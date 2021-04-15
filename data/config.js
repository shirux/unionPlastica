require('dotenv').config()

const config = {
    devUrl: process.env.DEV_URL,
    prodUrl: process.env.PROD_URL,
    filesPath: process.env.FILES_PATH,
    files: {
        rootFolder: process.env.FILES_FOLDER_PATH,
        inputFolder: process.env.INPUT_FOLDER,
        outputFolder: process.env.OUTPUT_FOLDER,
        logFolder: process.env.LOG_FOLDER,
        errorLogFolder: process.env.ERROR_LOG_FOLDER
    },
    login: {
        url: process.env.LOGIN_URL,
        bodyParams: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            audience: process.env.AUDIENCE,
            grant_type: process.env.CLIENT_CREDENTIALS
        }
    },
    transit: {
        url: process.env.TRANSIT_URL
    }
}

module.exports = config;