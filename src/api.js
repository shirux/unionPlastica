const axios = require('axios');
const config = require('../data/config')
const UnauthorizedError = require('./error/error')
const path = require('path');
const fs = require('fs');

const api = {
    authenticate: async() => {
        const bodyParams = config.login.bodyParams
        try {
            const response = await axios.post(`${config.devUrl}${config.login.url}`, bodyParams);
            if (response) {
                console.log(response.status)
            }
        } catch (err) {
            if (err.response) {
                switch (err.response.status) {
                    case 400:
                        throw new BadRequestError(err.response.status);
                    case 401:
                        throw new UnauthorizedError(err.response.status);
                    case 403:
                        throw new ForbiddenError(err.response.status);
                    case 404:
                        throw new NotFoundError(err.response.status);
                    case 405:
                        throw new MethodNotAllowedError(err.response.status);
                    default:
                        throw new ServerError(500);
                }
            }
            throw new Error();
        }
    },

    sendFiles: async(authToken) => {
        fs.readdirSync('D:/Programacion/trabajo/UnionPlastica/ApiRest/files/in').forEach(file => {
            try {
                const bodyParams = {}
                const formData = new FormData();
                formData.append("csv", file)
                let response = await axios.post(`${config.prodUrl}${config.transit.url}`, bodyParams)
                if (response) {

                }
            } catch (err) {
                console.log(err)
            }
        });


        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("image", imagefile.files[0]);
        axios.post('upload_file', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
    }
}

module.exports = api

