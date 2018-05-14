export function createUrl(path) {
    const domain = 'http://auth.sflow.me:33333';

    return domain + path;
}

export function fetchPOST($http, url,data, success, fail) {

    const token = localStorage.getItem('jwt-token');
    return (
        $http({
            url,
            headers: { 'Authorization': 'Bearer ' + token },
            method: 'POST',
            data
        })
            .then(success)
            .catch(fail)
    );
}