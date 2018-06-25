import { createUrl, fetchPOST, SUCCESS_CODE } from './helper';

const name = 'group';

// service.$inject = ['$http'];
function service() {


    function getAllGroup(callback) {

        const url = createUrl('/group/list');

        fetch.fetchPOST(
            // $http,
            url,
            null,
            (resp) => {
                console.log(resp);
                if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err));

    }

    function addUserToGroup(data,callback) {
        const url = createUrl('/group/add-user');

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

    function removeUserFromGroup(data, callback) {
        const url = createUrl('/group/remove-user');

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

    function addNewGroup(data, callback) {
        const url = createUrl('/group/new');

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

    function removeGroup (data, callback) {
        const url = createUrl('/group/delete');

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

    // function onAddUserSuccess(callback) {
    //     $rootScope.$on(EVENT.addUserSuccess, (e, data) => {
    //         callback(data);
    //     })
    // }


    return {
        getAllGroup,
        addUserToGroup,
        addNewGroup,
        removeUserFromGroup,
        removeGroup
    }
    
}






export default {
    name,
    options: service
}