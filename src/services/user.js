import { createUrl, fetchPOST, SUCCESS_CODE } from './helper';

const name = 'user';

service.$inject = ['$http'];
function service($http) {


    function getAllUser(callback) {

        const url = createUrl('/user/list');
        // const url = 'http://auth.sflow.me:33333/user/list';
        // const token = localStorage.getItem('jwt-token');

        fetchPOST(
            $http,
            url,
            null,
            (resp) => {
                if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err));

        // $http({
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     method: 'POST',
        // }).then(resp => console.log(resp));
    }

    function addUser(data,callback) {
        const url = createUrl('/user/new');

        fetchPOST(
            $http,
            url,
            data,
            (resp) => {
                if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err)
        )
    }

    function deleteUser(id, callback) {
        const url = createUrl('/user/delete');
        const data = {idUser: id};

        fetchPOST(
            $http,
            url,
            data,
            (resp) => {
                if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            } ,
            (err) => callback(err)
        )
    }

    // function onAddUserSuccess(callback) {
    //     $rootScope.$on(EVENT.addUserSuccess, (e, data) => {
    //         callback(data);
    //     })
    // }


    return {
        getAllUser,
        addUser,
        deleteUser
    }
    
}






export default {
    name,
    options: service
}