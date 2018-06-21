import { VIEWS } from '../../../constant';
import template from './parameter.html';


const name = VIEWS.parameter;


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