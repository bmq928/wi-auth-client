import { createUrl, fetchPOST } from './helper';

const name = 'user';

service.$inject = ['$http'];
function service($http) {


    function getAllUser(callback) {

        const url = createUrl('/user/list');
        // const url = 'http://auth.sflow.me:33333/user/list';
        const token = localStorage.getItem('jwt-token');

        fetchPOST(
            $http,
            url,
            token,
            (resp) => callback(false, resp.data),
            (err) => callback(err));

        // $http({
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     method: 'POST',
        // }).then(resp => console.log(resp));
    }

    function addUser(callback) {
        
    }


    return {
        getAllUser,
        addUser
    }
    
}






export default {
    name,
    options: service
}