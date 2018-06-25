import {TOKEN_EXPIRED} from './helper'

const name = 'fetch';

service.$inject = ['$http'];
function service($http) {

    function fetchPOST(url,data, success, fail) {

        // const token = 'f82e62d7c3ea69cc12b5cdb8d621dab6';
        const token = localStorage.getItem('jwt-token');
        return (
            $http({
                url,
                // headers: { 'Authorization': 'Bearer ' + token },
                method: 'POST',
                data: Object.assign({token}, data)
            })
                .then(success)
                .catch(err => {
                    if(err.data.message === TOKEN_EXPIRED) {
    
                        
                        return ;
                    } 
    
                    fail(err);
                })
        );
    }

    return {
        fetchPOST
    }
    
}




export default {
    name,
    options: service
}