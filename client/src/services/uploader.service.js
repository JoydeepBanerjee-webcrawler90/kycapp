import http from "../http-file-upload";

class Uploader {

    aadhaar_upload(data) {

        localStorage.setItem('aadhaar_upload','true');
        return http.post('/aadhaar/upload',data,{});
        
    }

}

export default new Uploader();