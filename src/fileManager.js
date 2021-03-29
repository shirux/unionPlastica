const path = require('path');
const fs = require('fs');
var FormData = require('form-data');
const axios = require('axios');
const config = require('../data/config')
const { ServerError } = require('./error/errorList')
const handleError = require('./error/error')

const sendFiles = async(file, access_token) => {
    try {
        let formData = new FormData();
        formData.append('file', file);
        formData.append('idProv', 1220393);
        const header = {
            headers: {Authorization: `Bearer ${access_token}`}
        };
        console.log(formData);
        let response = await axios.post(`${config.prodUrl}${config.transit.url}`, formData, header)
        // console.log(file)
        console.log(response.status)
        //if (response) {
        //    if (response.status === 200) {
        //    } else {
        //        throw new ServerError("send_file");
        //    }
        // }
    } catch (err) {
        throw err
    }
}


const processFiles = async (access_token) => {
    try {
        fs.readdirSync(`${config.filesPath}/in`).map(async file => {
            try {
                await sendFiles(file, access_token);
            }
            catch (err) {
                console.log(err.response.data)
                console.log("holis")
            }
        })  
    } catch (err){
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