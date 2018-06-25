import { createUrl, SUCCESS_CODE } from './helper';

const name = 'user';

service.$inject = ['fetch'];
function service(fetch) {


    function getAllUser(callback) {

        const url = createUrl('/user/list');
        // const url = 'http://auth.sflow.me:33333/user/list';
        // const token = localStorage.getItem('jwt-token');

        fetch.fetchPOST(
            // $http,
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

        fetch.fetchPOST(
            // $http,
            url,
            data,
            (resp) => {
                if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err)
        )
    }

    function editUser(data, callback){
        const url = createUrl('/user/edit');

        fetch.fetchPOST(
            // $http,
            url,
            data,
            (resp) => {
                if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            err => callback(err)
        )
    }

    function deleteUser(id, callback) {
        const url = createUrl('/user/delete');
        const data = {idUser: id};

        fetch.fetchPOST(
            // $http,
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
        deleteUser,
        editUser
    }
    
}



export default {
    name,
    options: service
}