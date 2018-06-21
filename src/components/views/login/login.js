import { VIEWS } from '../../../constant';
import template from './login.html';
import './login.css';
// import toast from 'toastr';

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