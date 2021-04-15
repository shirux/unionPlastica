const authenticate = require('./src/authenticate')
const processFiles = require('./src/fileManager')
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
const main = async () => {
    try {
        accessToken = await authenticate();
        if (accessToken) {
            await processFiles(accessToken);
        }
    } catch (err) {
        Log.registerError(err)
    }
}

main()