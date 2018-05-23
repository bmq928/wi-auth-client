const name = 'search';

service.$inject = ['$rootScope'];
function service($rootScope) {

    const SEARCH_SUBMIT = 'SEARCH_SUBMIT';

    function searchSubmit(text) {
        $rootScope.$emit(SEARCH_SUBMIT, text);
    }

    function onSearchSubmit(callback) {
        $rootScope.$on(SEARCH_SUBMIT, function(e, text) {
            callback(text);
        });
    }

    return {
        searchSubmit,
        onSearchSubmit
    }
}

export default {
    name,
    options: service
}