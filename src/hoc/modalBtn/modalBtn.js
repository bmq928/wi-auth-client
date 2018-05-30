import template from './modalBtn.html';
import { createModalName } from '../helper'

const name = 'modalBtn';

function controller() {
    let self = this;

    self.$onInit = function () {
        self._target = '#' + createModalName(self.target);
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
            className: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};