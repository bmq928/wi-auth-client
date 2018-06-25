import { createUrl, SUCCESS_CODE } from './helper';

const name = 'auth';

service.$inject = ['$rootScope', 'fetch'];
function service( $rootScope, fetch) {

    const EVENTS = {
        LOGIN_SUCCESS: 'LOGIN_SUCCESS',
        LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
    }

    function isLogined() {

        const token = localStorage.getItem('jwt-token');

        if (token) return true;
        return false;

    }

    function getData() {
        const token = localStorage.getItem('jwt-token');
        const data = atob(token.split('.')[1]);

        return JSON.parse(data);
    }

    function logout() {
        localStorage.removeItem('jwt-token');
        emitMessage(EVENTS.LOGOUT_SUCCESS);
    }

    function login(data, callback) {
        const url = createUrl('/login');

        fetch.fetchPOST(
            // $http,
            url,
            data,
            (resp) => {

                if (resp.data.code === SUCCESS_CODE) {

                    const { token } = resp.data.content;

                    localStorage.setItem('jwt-token', token);
                    emitMessage(EVENTS.LOGIN_SUCCESS);

                    callback(false, resp.data);
                }
                else callback(resp.data);
            },
            (err) => callback(err));
    }

    function emitMessage(event, data) {
        $rootScope.$emit(event, data);
    }

    function onLoginSuccess(callback){
        $rootScope.$on(EVENTS.LOGIN_SUCCESS, (e, data) => callback(data));
    }

    function onLoggoutSuccess(callback) {
        $rootScope.$on(EVENTS.LOGOUT_SUCCESS, (e, data) => callback(data));
    }

    return {
        isLogined,
        getData,
        logout,
        login,
        onLoggoutSuccess,
        onLoginSuccess
    }
}


export default {
    name,
    options: service
}