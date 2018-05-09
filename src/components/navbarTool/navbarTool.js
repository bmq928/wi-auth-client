import angular from 'angular';
import appName from '../../module';
import template from './navbarTool.html';

const name = 'navbarTool';

function controller() {
    let self = this;


    
}

angular
    .module(appName)
    .component(name, {
        bindings: {

        },
        template,
        controller,
        controllerAs: 'self'
    })

export default name;