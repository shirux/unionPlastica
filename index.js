const authenticate = require('./src/authenticate')
const processFiles = require('./src/fileManager')

let accessToken = null;

/**
 * Authenticate against API server and send files.
 */
const main = async () => {
    try {
        accessToken = await authenticate();
        if (accessToken) {
            await processFiles(accessToken);
        }
    } catch (err) {
        // TODO define what to do on every err
        console.log(err)
    }
}

main()