// import angular from 'angular';
// import appName from '../../module';
import template from './addUserToGroupModal.html';

const name = 'addUserToGroupModal';

controller.$inject = ['user', 'company', 'modal', 'auth'];
function controller(user, company, modal, auth){
    let self = this;

    self.$onInit = function () {
        preProcess();
        init();
    }

    self.onClose = function () {
        
        preProcess();
        init();
    }


    function preProcess() {
        self.name = 'add-user-to-group-modal';

        self.sucMsg = '';
        self.errMsg = '';
        self.listUser = [];
        self.idUser = null;
        self.searchUserStr = {
            name: ''
        }
    }

    function init() {

    }
}

// angular
//     .module(appName)
//     .component(name, {
//         template
//     })

export default {
    name,
    options: {
        bindings: {
            
        },
        template,
        controller,
        controllerAs: 'self'
    }
};