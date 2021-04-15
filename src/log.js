
const config = require('../data/config')
const DateFormatter = require('./utils/date');
var fs = require("fs");

// Log object
const Log = {
    
    // ---------- ATRIBUTOS --------------
    logFilePath: `${config.files.rootFolder}/${config.files.logFolder}/log.txt`,
    errorLogFilePath: `${config.files.rootFolder}/${config.files.errorLogFolder}/errorLog.txt`,
    today: `[${DateFormatter.getToday()}]`,

    // ---------- METODOS --------------
    /**
     * Escribe un mensaje en el archivo pasado por parametro.
     * @param {String} accessToken Token de autenticación del usuario
     */
    writeFile(message, path=this.logFilePath) {
        if(fs.existsSync(path)) {
            fs.appendFileSync(path, message)
        } else {
            fs.writeFileSync(path, message)
        }
    },
    /**
     * Registra una acción en el archivo de log. 
     * El mensaje puede ser de autenticación o de envió de archivo
     * @param {String} fileName Nombre del archivo enviado. Defecto en vacio
     * @param {action} action Acción ejecutada. Defecto en "envió"
     */
    registerAction(fileName="", action="envió") {
        try {
            // Construye mensaje y escribe en archivo
            let message = `${this.today}:`;
            if (fileName) {
                message = `${message} Se ${action} exitosamente el siguiente archivo ${fileName}\n`;
            } else {
                message = `${message} Autenticación exitosa\n`;
            }
            this.writeFile(message);
        } catch (err) {
            // Registra error
            this.registerError(err);
        }
    },
    /**
     * Registra una acción en el archivo de log de errores.
     * @param {Error} exception Error a registrar
     */
    registerError(exception) {
        try {
            // Construye el mensaje
            let message = `${this.today}:`;
            message += exception.stack + '\n';
            this.writeFile(message, this.errorLogFilePath);
        } catch (err) {
            // No debe registrar error en archivo, puede generar ciclo infinito
            console.error(err);
        }
    }
}

module.exports = Log;