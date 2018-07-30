import { VIEWS } from '../../../constant';
import template from './login.html';
import './login.css';
// import toast from 'toastr';

const name = VIEWS.login;

controller.$inject = ['auth']
function controller(auth) {
    let self = this;

    self.$onInit = function () {
        preProcess();


        auth.onJwtExpired(() => {
            self.errMsg = 'Token is expired';
        });

        enableEnterSubmit();
    }

    self.login = function () {
        checkSumit(() => {
            auth.login(self.user, (err, resp) => {
                if (err) {
                    self.errMsg = err.reason;
                } else {
                    auth.updateDatabase({}, (err, resp) =>{
                        console.log('suc');
                        console.log(resp);
                    });
                }
            })
        })
    }


    function preProcess() {
        self.user = {};
        self.errMsg = '';
    }

    function checkSumit(fullfil) {
        if (!self.user.username) {
            self.errMsg = 'Username is required';
        } else if (!self.user.password) {
            self.errMsg = 'Password is required'
        } else {
            fullfil();
        }
    }

    function enableEnterSubmit() {
        // const $ = window.jQuery;
        // const $thisModal = $(`#${self._name}`);
        // const $btnSubmit = $(`#${self._name} .modal-footer > button`);

        // console.log('this modal');
        // console.log(self._name);
        // console.log($thisModal);

        // console.log('this modal button');
        // console.log($btnSubmit);

        // console.log(document.getElementById(self._name));


        // if($thisModal.hasClass('in')) {

        // }
        window.addEventListener('keyup', function (event) {

            event.preventDefault();

            if (event.keyCode === 13) {

                document.getElementById('btn-login').click();
            }
        })
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