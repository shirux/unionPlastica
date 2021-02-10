const api = require('./src/api')

let access_token = null;

const main = async () => {
    try {
        await api.authenticate();
        await api.sendFiles();
    } catch (err) {
        console.log(err.message)
    }
    
    
}



main()