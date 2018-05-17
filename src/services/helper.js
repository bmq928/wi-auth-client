export function createUrl(path) {
    // const domain = 'http://auth.sflow.me:33333';
    const domain = 'http://localhost:2999';

    return domain + path;
}

export function fetchPOST($http, url,data, success, fail) {

    const token = 'f82e62d7c3ea69cc12b5cdb8d621dab6';
    return (
        $http({
            url,
            // headers: { 'Authorization': 'Bearer ' + token },
            method: 'POST',
            data: Object.assign({token}, data)
        })
            .then(success)
            .catch(fail)
    );
}

export const SUCCESS_CODE = 200;