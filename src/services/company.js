import { createUrl, fetchPOST, SUCCESS_CODE } from './helper';

const name = 'company';

service.$inject = ['$http'];
function service($http) {

    function getAllCompanies(callback) {
        const url = createUrl('/company/list');

        fetchPOST(
            $http,
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
    
    function removeCompany(data, callback) {
        const url = createUrl('/company/delete');

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


    return {
        getAllCompanies,
        addCompany,
        removeCompany
    }
}






export default {
    name,
    options: service
}