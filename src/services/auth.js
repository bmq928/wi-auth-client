import { createUrl, fetchPOST, SUCCESS_CODE } from './helper';

const name = 'auth';

service.$inject = ['$http'];
function service($http) {
    

    function isLogined() {
        
        const token = localStorage.getItem('jwt-token');
        
        if(token) return true;
        return false;

    }

    function getData() {
        const token = localStorage.getItem('jwt-token');
        const data = atob(token.split('.')[1]);

        return JSON.parse(data);
    }

    
    return {
        isLogined,
        getData
    }
}


export default {
    name,
    options: service
}