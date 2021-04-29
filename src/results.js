const config = require('../data/config');
const fs = require('fs');

const registerResult = async (envios, error = null) => {
    try {
        const resultFolder = `${config.files.rootFolder}/${config.files.resultFolder}`;
        let resultado = ''
        if (error) {
            resultado = `1; ${error.status}`
        } else {
            resultado = `0`
            if (envios) {
                resultado += `; ${envios}`
            }
        }
        fs.writeFileSync(`${resultFolder}/resultados.csv`, resultado, {flag: 'w+'})
    } catch (err) {
       console.log(err)
    }
}

module.exports = registerResult;