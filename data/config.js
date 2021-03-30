require('dotenv').config()

const config = {
    devUrl: process.env.DEV_URL,
    prodUrl: process.env.PROD_URL,
    filesPath: process.env.FILES_PATH,
    files: {
        rootFolder: process.env.FILES_FOLDER_PATH,
        inputFolder: process.env.INPUT_FOLDER,
        outputFolder: process.env.OUTPUT_FOLDER
    },
    login: {
        url: "oauth/token",
        bodyParams: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            audience: process.env.AUDIENCE,
            grant_type: "client_credentials"
        }
    },
    transit: {
        url: "iprov/transito/csv/"
    }
}

module.exports = config;