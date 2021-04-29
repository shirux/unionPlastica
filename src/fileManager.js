const path = require('path');
const fs = require('fs');
var FormData = require('form-data');
const axios = require('axios');
const config = require('../data/config')
const { ServerError } = require('./error/errorList')
const handleError = require('./error/error')
const Log = require('./log');

/**
 * Envia un archivo hacia el servidor. Debe autenticarse para poder enviar.
 * Una vez enviado el archivo, debe registrar acción en el log y mover los archivos a la siguiente carpeta.
 * 
 * En caso de fallo, alza excepciones. Puede fallar por lo siguiente:
 * 1. No genera la petición correctamente
 * 2. No logra generar la conexión hacia el servidor.
 * 3. Fallo en parametrización para la conexión
 * 4. No encuentra la ruta de los archivos
 * 
 * @param {String} fileName Nombre del archivo
 * @param {String} accessToken Token de autenticación del usuario
 * @param {String} idProv Id del proveedor del archivo (ID del cliente)
 */
const sendFiles = async(fileName, accessToken, idProv="1220393") => {
    try { 
        // Lee el archivo y construye formulario de envio
        let formData = new FormData();
        const filePath = `${config.files.rootFolder}/${config.files.inputFolder}/${fileName}`
        const file = fs.createReadStream(filePath);
        formData.append('file', file);
        formData.append('idProv', config.client.idProv);
        const url = `${config.prodUrl}${config.transit.url}`

        // Construye la petición
        let response = await axios({
            method: 'post',
            url: `${config.prodUrl}${config.transit.url}`,
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Accept-Encoding': 'gzip, deflate, br',
                 Authorization: `Bearer ${accessToken}`
            }
        })

        if (response) {
            if (response.status === 200) {
                // Registra acción exitosa de envio
                Log.registerAction(fileName);

                // Mueve el archivo al output folder
                const oldPath=`${config.files.rootFolder}/${config.files.inputFolder}/${fileName}`;
                const newPath=`${config.files.rootFolder}/${config.files.outputFolder}/${fileName}`;
                try {
                    fs.renameSync(oldPath, newPath);
                    Log.registerAction(fileName, action="movio")
                } catch(err) {
                    handleError(err, "move file")
                }
            } else {
                throw new ServerError("send_file");
            }
        }
    } catch (err) {
        handleError(err, "send File")
    }
}


/**
 * Busca todos los archivos existentes en un folder.
 * Por cada archivo encontrado, se conecta al servidor API y ejecuta envio de archivos
 * @param {string} accessToken Token de autenticación del usuario
 */
const processFiles = async (accessToken) => {
    try {
        const folderURL = `${config.files.rootFolder}/${config.files.inputFolder}`;
        const files = fs.readdirSync(folderURL)
        for (file of files) {
            try {
                await sendFiles(file, accessToken)
            } catch (err) {
                throw err
            }
        }
    } catch (err){
        throw err
    }
}

module.exports = processFiles;