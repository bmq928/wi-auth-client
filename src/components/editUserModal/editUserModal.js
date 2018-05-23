import template from './editUserModal.html';

const name = 'editUserModal';

controller.$inject = ['user'];
function controller(){
    let self = this;

    self.$onInit = function(){
        preProcess();
        console.log(self.userId);
    }


    self.onClose = function(){
        preProcess();
    }

    function preProcess () {
        self.user = {};
        self.sucMsg = '';
        self.errMsg = '';
    }

    function checkSubmit(fullfill){
        if(self.user.password === self.user.confirmPassword) {
           fullfill();
        } else {
            self.errMsg = 'password confirm is not matched';
        }
    }
}


export default {
    name,
    options: {
        bindings: {
            editUserSuccess: '<',
            userId: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};