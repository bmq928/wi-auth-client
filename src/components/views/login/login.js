// import angular from 'angular';
import { VIEWS } from '../../../constant';
// import appName from '../../../module';
import template from './login.html';
import toast from 'toastr';

const name = VIEWS.login;

function controller() {
    let self = this;

    

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