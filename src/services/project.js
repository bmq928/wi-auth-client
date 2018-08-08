import {createUrlToMainService, createUrl, SUCCESS_CODE} from './helper';

const name = 'project';

service.$inject = ['fetch'];

function service(fetch) {

    function getAllProject(payload, callback) {
        const url = createUrlToMainService('/project/list-of-all-user');
        fetch.fetchPOST(
            url,
            payload,
            (resp) => {
                if (resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err));
    }

    function removeProject(data, callback) {
        const url = createUrlToMainService('/project/delete');
        fetch.fetchPOST(
            url,
            data,
            (resp) => {
                if (resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err)
        )
    }

    function createSharedProject(data, callback) {
        const url = createUrl('/shared-project/new');
        fetch.fetchPOST(
            url,
            data,
            (resp) => {
                if (resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err)
        )
    }

    function removeSharedProject(data, callback) {
        const url = createUrl('/shared-project/remove');
        fetch.fetchPOST(
            url,
            data,
            (resp) => {
                if (resp.data.code === SUCCESS_CODE) callback(false, resp.data);
                else callback(resp.data);
            },
            (err) => callback(err)
        )
    }

    return {
        getAllProject,
        removeProject,
        createSharedProject,
        removeSharedProject
    }
}

export default {
    name,
    options: service
}
