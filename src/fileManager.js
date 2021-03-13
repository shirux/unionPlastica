const path = require('path');
const fs = require('fs');
var FormData = require('form-data');
const axios = require('axios');
const config = require('../data/config');
const { UnauthorizedError, ServerError, BadRequestError, ForbiddenError, NotFoundError, MethodNotAllowedError } = require('./error/errorList')

const sendFiles = async (access_token) => {
    fs.readdirSync('D:/Programacion/trabajo/UnionPlastica/ApiRest/files/in').forEach(async (file) => {
        try {
            let formData = new FormData();
            formData.append('file', file);
            formData.append('idProv', 3000);
            const header = {
                headers: { Authorization: `Bearer ${access_token}` }
            };
            let response = await axios.post(`${config.prodUrl}${config.transit.url}`, formData, header)
            console.log(file)
            if (response) {
                console.log(response.status)
            }
        } catch (err) {
            
            if (err.response) {
                switch (err.response.status) {
                    case 400:
                        throw new BadRequestError();
                    case 401:
                        throw new UnauthorizedError();
                    case 403:
                        throw new ForbiddenError();
                    case 404:
                        throw new NotFoundError();
                    case 405:
                        throw new MethodNotAllowedError();
                    default:
                        throw new ServerError();
                }
            }
            throw new ServerError();
        }
    });


    // var formData = new FormData();
    // var imagefile = document.querySelector('#file');
    // formData.append("image", imagefile.files[0]);
    // axios.post('upload_file', formData, {
    //     headers: {
    //     'Content-Type': 'multipart/form-data'
    //     }
    // })
}

module.exports = sendFiles;