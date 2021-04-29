const authenticate = require('./src/authenticate')
const processFiles = require('./src/fileManager')
const registerResult = require('./src/results')
const Log = require('./src/log');

let accessToken = null;

/**
 * Hilo principal de ejecución. 
 * 1. Autentica
 * 2. Envia archivos
 * 
 * En caso de errores, registra el error en el log
 * y ejecuta acción a partir del tipo de error
 */
const main = async (envios) => {
    try {
        accessToken = await authenticate();
        if (accessToken) {
            await processFiles(accessToken);
        }
        // Register success on result file
        registerResult(envios)
    } catch (err) {
        Log.registerError(err)
        registerResult(envios, err)
    }
}

envios = process.argv[2]
main(envios)
