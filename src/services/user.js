import { creatUrl } from './helper';

const name = 'user';

service.$inject = ['$http'];
function service($http) {
    return {
        getAllUser
    }


    function getAllUser(callback) {

        const path = '/user/list';
        const token = localStorage.getItem('jwt-token');

        _fetchPOST(creatUrl(path),
            token,
            (resp) => callback(false, resp),
            (err) => callback(err));
    }





    function _fetchPOST(url, token, success, fail) {
        return (
            $http({
                url,
                headers: { 'Authorization': 'Bearer ' + token },
                method: 'POST'
            })
                .then(success)
                .catch(fail)
        );
    }
}






export default {
    name,
    options: service
}