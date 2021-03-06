function Config() {


    var mode = 'PROD'
    console.log(window.location.href);

    if(window.location.href.indexOf('local') > -1) {
      mode = 'DEV';
    } 
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
            BASEURL="http://localhost:8080/";
            API_BASEURL=BASEURL+"api";

    }

    const TOKEN = localStorage.getItem('access_token');
    const USER_ID = localStorage.getItem('user_id');
    var USERINFO = {
        username : ''
    }
    var UNIFO = {}
    UNIFO = JSON.parse(localStorage.getItem('userinfo'))
    if(UNIFO !== null) {
        USERINFO = UNIFO
    }
    return {
        'API_BASEURL' : API_BASEURL,
        'BASEURL' : BASEURL,
        'TOKEN' : TOKEN,
        'USER_ID' : USER_ID,
        'USERINFO':USERINFO
    }
}

export default Config;