import template from './modalBtn.html';
// import { createModalName } from '../helper'

const name = 'modalBtn';

controller.$inject = ['modal']
function controller(modal) {
    let self = this;

    self.$onInit = function () {
        self._target = '#' + modal.createModalName(self.target);
    }
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
            target: '<',
            className: '<',
            myDisable: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};