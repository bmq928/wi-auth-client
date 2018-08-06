import { createUrl, SUCCESS_CODE } from './helper';

const name = 'group';

service.$inject = ['fetch'];
function service(fetch) {


    function getAllGroup(callback) {

        const url = createUrl('/group/list');

        fetch.fetchPOST(
            // $http,
            url,
            null,
            (resp) => {
                //console.log(resp);
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

    function addUserToGroups(data, callback) {
        const url = createUrl('/group/add-user-to-groups');

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

    function addUsersToGroup (data, callback) {
        const url = createUrl('/group/add-users-to-group')

        fetch.fetchPOST(
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
        removeGroup,
        addUserToGroups,
        addUsersToGroup
    }
    
}






export default {
    name,
    options: service
}