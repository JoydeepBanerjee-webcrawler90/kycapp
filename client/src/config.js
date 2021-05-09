function Config() {

    const mode = "DEV";
    var API_BASEURL = "";
    var BASEURL = "";

    switch(mode) {

        case "DEV":
            BASEURL="http://localhost:8080/";
            API_BASEURL=BASEURL+"api";
            break;

        case "PROD":
            BASEURL="https://shyamkycdemo.herokuapp.com/";
            API_BASEURL=BASEURL+"api";
            break;

        default:
            BASEURL="https://shyamkycdemo.herokuapp.com/";
            API_BASEURL=BASEURL+"api";

    }

    const TOKEN = localStorage.getItem('access_token');
    const USER_ID = localStorage.getItem('user_id');
    
    return {
        'API_BASEURL' : API_BASEURL,
        'BASEURL' : BASEURL,
        'TOKEN' : TOKEN,
        'USER_ID' : USER_ID
    }
}

export default Config;