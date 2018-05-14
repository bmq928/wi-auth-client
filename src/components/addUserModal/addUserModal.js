// import angular from 'angular';
// import appName from '../../module';
import template from './addUserModal.html';

const name = 'addUserModal';

controller.$inject = ['user'];
function controller(user){
    let self = this;

    self.$onInit = function(){
        self.user = {};        
    }

    self.onSubmit = function(){
        user.addUser(self.user, (err, resp) => {
            console.log(self.user);
            if(err) {
                console.log(err);
            } else {
                console.log(resp);
                self.addUserSuccess(Object.assign({}, self.user));
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