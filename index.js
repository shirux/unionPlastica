const authenticate = require('./src/authenticate')
const processFiles = require('./src/fileManager')

let access_token = null;

const main = async () => {
    try {
        access_token = await authenticate();
        if (access_token) {
            await processFiles(access_token);
        }
    } catch (err) {
        console.log(err)
    }
}

main()