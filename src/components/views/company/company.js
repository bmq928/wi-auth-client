import { VIEWS } from '../../../constant';
import template from './company.html';

const name = VIEWS.company;

function controller() {
    
    

    function init() {
    
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