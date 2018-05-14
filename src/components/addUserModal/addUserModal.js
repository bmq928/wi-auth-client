// import angular from 'angular';
// import appName from '../../module';
import template from './addUserModal.html';

const name = 'addUserModal';

controller.$inject = ['user'];
function controller(user){
    let self = this;

    self.$onInit = function(){
        self.user = {};
        self.sucMsg = '';
        self.errMsg = '';
    }

    self.onSubmit = function(){
        user.addUser(self.user, (err, resp) => {
            console.log(self.user);
            if(err) {
                self.errMsg = err.statusText;
                self.sucMsg = '';
            } else {
                console.log(resp);
                self.sucMsg = resp.reason;
                self.errMsg = '';
                self.addUserSuccess(self.user);
            }
        })
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