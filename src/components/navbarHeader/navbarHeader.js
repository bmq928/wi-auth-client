// import angular from 'angular';
// import appName from '../../module';
import template from './navbarHeader.html';

const name = 'navbarHeader';

controller.$inject = ['search']
function controller(search) {
    let self = this;

    self.reload = function() {
        search.searchSubmit('');
    }
}

// angular
//     .module(appName)
//     .component(name, {
//         template
//     });


export default {
    name,
    options: {
        controller,
        template,
        bindings: {
            curView: '<'
        },
        controllerAs: 'self'
    }
};