const config = require('../data/config');
const fs = require('fs');

/**
 * Registra los resultados en un archivo csv, ya sea caso exitoso o un error.
 * Esto para que el programa contable entienda los resultados
 * @param {string} envios Envios realizados 
 * @param {*} error Error
 */
const registerResult = async (envios, error = null) => {
    try {
        const resultFolder = `${config.files.rootFolder}/${config.files.resultFolder}`;
        let resultado = ''
        
        // Caso de error
        if (error) { 
            resultado = `1;${error.status}\n`
            error.data.forEach(data => {
                resultado += `1;${data}\n`
            })
        } else { // Caso Exito
            resultado = `0`
            if (envios) {
                resultado += `;${envios}\n`
            }
        }
        fs.writeFileSync(`${resultFolder}/resultados.csv`, resultado, {flag: 'w+'})
    } catch (err) {
       console.log(err)
    }
}

module.exports = registerResult;