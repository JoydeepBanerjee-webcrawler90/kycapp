import http from "../http-file-upload";

class Uploader {

    aadhaar_upload(data,token) {
        console.log(data)
        localStorage.setItem('aadhaar_upload','true');
        return http.post('/aadhaar/upload',data, {
            headers: {
                'x-access-token' : token
            }
        });
        
    }

}

export default new Uploader();