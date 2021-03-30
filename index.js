const authenticate = require('./src/authenticate')
const processFiles = require('./src/fileManager')

let access_token = null;

/**
 * Authenticate against API server and send files.
 */
const main = async () => {
    try {
        access_token = await authenticate();
        if (access_token) {
            await processFiles(access_token);
        }
    } catch (err) {
        // TODO define what to do on every err
        console.log(err)
    }
}

main()