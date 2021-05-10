import http from "../http-common";

class Bank {

    getBankDetails(data) {

        console.log(data.user_id)

        return http.get('/bank/get/',{
            headers:{
                'x-access-token' : data.access_token
            },
            params:{
                user_id:data.user_id
            }
        });
    }

    verifyBank(data,token) {

        console.log(data)

        return http.post('/bank/verify/',data, {
            headers: {
                'x-access-token' : token
            }
        });
    }

    removeBankDetail(__id) {

        console.log(__id)

        return http.post('/bank/remove',__id);
    }

}

export default new Bank()