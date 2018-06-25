import { VIEWS } from '../../../constant';
import template from './login.html';
import './login.css';
// import toast from 'toastr';

const name = VIEWS.login;

controller.$inject = ['auth']
function controller(auth) {
    let self = this;

    self.$onInit = function(){
        preProcess();


        auth.onJwtExpired(() => {
            self.errMsg = 'Token is expired';
        })
    }

    self.login = function() {
        checkSumit(() => {
            auth.login(self.user, (err, resp) => {
                if(err) {                
                    self.errMsg = err.reason;
                } else {
                    console.log('suc');
                    console.log(resp);
                }
            })
        })
    }

    
    function preProcess() {
        self.user = {};
        self.errMsg = '';
    }

    function checkSumit(fullfil) {
        if(!self.user.username) {
            self.errMsg = 'Username is required';
        } else if(!self.user.password) {
            self.errMsg = 'Password is required'
        } else {
            fullfil();
        }
    }

}

// angular
//     .module(appName)
//     .component(name, {
//         template,
//         controller,
//         controllerAs: 'self'
//     })


export default {
    name,
    options: {
        template,
        controller,
        controllerAs: 'self'
    }
};