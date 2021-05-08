function Config() {

    const mode = "PROD";
    var API_BASEURL = "";
    var BASEURL = "";
    if(mode==="DEV") {

        BASEURL="http://localhost:8080/";
        API_BASEURL=BASEURL+"api";

    } else {

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