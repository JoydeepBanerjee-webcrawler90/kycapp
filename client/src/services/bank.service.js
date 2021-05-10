import http from "../http-common";

class Bank {

    getBankDetails(data) {

        console.log(data.user_id)

        return http.get('/bank/get/',{
            params:{
                user_id:data.user_id
            }
        });
    }

    verifyBank(data) {

        console.log(data)

        return http.post('/bank/verify/',data);
    }

    removeBankDetail(__id) {

        console.log(__id)

        return http.post('/bank/remove',__id);
    }

}

export default new Bank()