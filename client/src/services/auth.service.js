import http from "../http-common";

class Auth {

    authenticate(data) {
        console.log(data)
        return http.post('/auth/signin',data,{});
    }

    signUp(data) {
        console.log(data)
        return http.post('/auth/signup',data);
    }

    storeToken(token) {
        var local = localStorage.setItem('access_token',token);
        return local;
    }
}

export default new Auth();