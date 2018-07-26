import {createUrlToMainService, SUCCESS_CODE} from './helper';

const name = 'project';

service.$inject = ['fetch'];

function service(fetch) {

    function getAllProject({}, callback) {
        const url = createUrlToMainService('/project/list-of-all-user');
        fetch.fetchPOST(
            url,
            null,
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

    return {
        getAllProject,
        removeProject
    }
}

export default {
    name,
    options: service
}
