const authenticate = require('./src/authenticate')

let access_token = null;

const main = async () => {
    try {
        access_token = await authenticate();
        console.log(access_token)
        // await api.sendFiles(access_token);
    } catch (err) {
        console.log(err.message)
    }
}

main()