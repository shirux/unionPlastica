const fileManager = async () => {
    fs.readdirSync('D:/Programacion/trabajo/UnionPlastica/ApiRest/files/in').forEach(file => {
        try {
            const bodyParams = {}
            const formData = new FormData();
            formData.append("csv", file)
            let response = await axios.post(`${config.prodUrl}${config.transit.url}`, bodyParams)
            if (response) {
                console.log(response)
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

module.exports = fileManager;