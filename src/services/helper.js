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

// export function createPostService($http, url) {
//     url = createUrl(url);

//     return function(data, callback) {
//         fetchPOST(
//             $http,
//             url,
//             data,
//             (resp) => {
//                 if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
//                 else callback(resp.data);
//             },
//             (err) => callback(err)
//         )
//     }
// }

// export function createGetService($http, url) {
//     url = createUrl(url);

//     return function (callback) {
//         fetchPOST(
//             $http,
//             url,
//             null,
//             (resp) => {
//                 if(resp.data.code === SUCCESS_CODE) callback(false, resp.data);
//                 else callback(resp.data);
//             },
//             (err) => callback(err));
//     }
// }

export const SUCCESS_CODE = 200;
export const INTERNAL_ERROR_CODE = 512;