import http from "../http-common";

class KycDocuments {

    getAadhaar(data) {
        console.log(data.user_id)
        return http.get('/aadhaar/get/',{
            params:{
                user_id:data.user_id
            }
        });
    }


}

export default new KycDocuments()