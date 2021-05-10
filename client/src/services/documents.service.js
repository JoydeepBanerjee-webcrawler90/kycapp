import http from "../http-common";

class KycDocuments {

    getAadhaar(data) {
        console.log(data.user_id)
        return http.get('/aadhaar/get/',{
            headers:{
                'x-access-token' : data.access_token
            },
            params:{
                user_id:data.user_id
            }
        });
    }

    getPan(data) {
        console.log(data)
        return http.get('/pan/get/',{
            params:{
                user_id:data.user_id
            }
        });
    }


}

export default new KycDocuments()