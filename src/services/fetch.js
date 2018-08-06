import {TOKEN_EXPIRED} from './helper'

const name = 'fetch';

service.$inject = ['$http',  '$rootScope'];
function service($http, $rootScope) {

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
                    //console.log(err);
                    if(err.data.message === TOKEN_EXPIRED) {
    
                        // auth.jwtExpired();
                        localStorage.removeItem('jwt-token');
                        $rootScope.$emit(TOKEN_EXPIRED);

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