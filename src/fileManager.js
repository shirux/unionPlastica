const path = require('path');
const fs = require('fs');
var FormData = require('form-data');
const axios = require('axios');
const config = require('../data/config')
const { ServerError } = require('./error/errorList')
const handleError = require('./error/error')

const sendFiles = async(fileName, access_token) => {
    try {
        let formData = new FormData();
        const filePath = `${config.files.rootFolder}/${config.files.inputFolder}/${fileName}`
        const file = fs.createReadStream(filePath);
        formData.append('file', file);
        formData.append('idProv', 1220393);
        let response = await axios({
            method: 'post',
            url: `${config.prodUrl}${config.transit.url}`,
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Accept-Encoding': 'gzip, deflate, br',
                 Authorization: `Bearer ${access_token}`
            }
        })

        if (response) {
            if (response.status === 200) {
                console.log(response.data)
            // TODO
            } else {
                throw new ServerError("send_file");
            }
        }
    } catch (err) {
        throw err
    }
}


/**
 * Retrieve all existing files path on a folder. 
 * For every file try to connect to API Server
 * @param {string} accessToken Authorization token sent from server
 */
const processFiles = async (accessToken) => {
    try {
        const folderURL = `${config.files.rootFolder}/${config.files.inputFolder}`;
        const files = fs.readdirSync(folderURL)
        for (file of files) {
            try {
                console.log(file)
                await sendFiles(file, accessToken)
            } catch (err) {
                // TODO
                console.log(err)
               // console.log(err.response.data)
            }
        }
    } catch (err){
        console.log(err)
        handleError(err, "reading Files");
    }
}

        //const files = fs.readdirSync(`${config.filesPath}/in`);
        //for (file in files) {
        //    await sendFiles (file, access_token)
        // }
    


    // var formData = new FormData();
    // var imagefile = document.querySelector('#file');
    // formData.append("image", imagefile.files[0]);
    // axios.post('upload_file', formData, {
    //     headers: {
    //     'Content-Type': 'multipart/form-data'
    //     }
    // })



module.exports = processFiles;