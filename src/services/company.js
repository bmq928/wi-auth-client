import { createUrl, SUCCESS_CODE } from './helper';

const name = 'company';

service.$inject = ['fetch'];
function service(fetch) {

    function getAllCompanies(callback) {
        const url = createUrl('/company/list');

        fetch.fetchPOST(
            // $http,
            url,
            null,
            (resp) => {
                if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err));
    }

    function addCompany(data, callback) {
        const url = createUrl('/company/new');

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
    
    function removeCompany(data, callback) {
        const url = createUrl('/company/delete');

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


    function editCompany(data, callback) {
        const url = createUrl('/company/edit');

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

    return {
        getAllCompanies,
        addCompany,
        removeCompany,
        editCompany
    }
}






export default {
    name,
    options: service
}