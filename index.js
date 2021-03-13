const authenticate = require('./src/authenticate')
const sendFiles = require('./src/fileManager')

let access_token = null;

const main = async () => {
    try {
        access_token = await authenticate();
        if (access_token) {
            console.log(access_token)
            // await sendFiles(access_token);
        }
    } catch (err) {
        console.log(err)
    }
}

main()