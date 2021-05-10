
export const store = {

    _token: '',
    set token (str) {
        this._token = str
        localStorage.setItem('access_token',str)
    },
    get token () {
        return this._token || localStorage.getItem('access_token')
    }
}

