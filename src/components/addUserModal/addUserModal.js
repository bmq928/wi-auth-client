// import angular from 'angular';
// import appName from '../../module';
import template from './addUserModal.html';

const name = 'addUserModal';

controller.$inject = ['user'];
function controller(user){
    let self = this;

    self.$onInit = function(){
        preProcess();
    }

    self.onSubmit = function(){
        
        checkSubmit(() => {
            user.addUser(self.user, (err, resp) => {
                console.log(self.user);
                if(err) {
                    self.errMsg = err.content || err.statusText;
                    self.sucMsg = '';
                } else {
                    console.log(resp);
                    self.sucMsg = resp.reason;
                    self.errMsg = '';
                    self.addUserSuccess(self.user);
                }
            })
        })

       
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

// angular
//     .module(appName)
//     .component(name, {
//         template
//     })

export default {
    name,
    options: {
        bindings: {
            addUserSuccess: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};