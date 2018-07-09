const name = 'modal';

service.$inject = ['$rootScope']
function service($rootScope) {

    // const CLOSE_MODAL_EVENT = 'CLOSE_MODAL_EVENT'

    function closeModal(name, callback) {
        const id = createModalName(name);

        const $ = window.jQuery;

        

         if ($rootScope.$$phase === '$apply' ||
            $rootScope.$$phase === '$digest') {

                $('#'+id).modal('hide');

        } else {
            $rootScope.$apply(() => {
                $('#'+id).modal('hide');
            })
        }

        if (callback) callback();

    }

    // function onCloseModal(callback) {
    //     $rootScope.$on(CLOSE_MODAL_EVENT, (event, args) => {
    //         callback();
    //     })
    // }

    function createModalName(name) {
        return `_modal_${name}`;
    }

    function createModalCloseName(name) {
        return `_${createModalName(name)}_close_btn_`;
    }

    return {
        closeModal,
        createModalName,
        createModalCloseName
    }
}

export default {
    name,
    options: service
}