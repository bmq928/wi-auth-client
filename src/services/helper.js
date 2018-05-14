export function createUrl(path) {
    const domain = 'http://auth.sflow.me:33333';

    return domain + path;
}

export function fetchPOST($http, url, token, success, fail) {
    return (
        $http({
            url,
            headers: { 'Authorization': 'Bearer ' + token },
            method: 'POST'
        })
            .then(success)
            .catch(fail)
    );
}