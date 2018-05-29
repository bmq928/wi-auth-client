import template from './tableForm.html';

const name = 'tableForm';

function controller() {

}

// angular`
//     .module(appName)
//     .component(name, {
//         template
//     })

export default {
    name,
    options: {
        transclude: true,
        bindings: {
            title: '<',
            description: '<',
            headers: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};