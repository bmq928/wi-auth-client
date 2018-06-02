import template from './modal.html';
import { createModalName } from '../helper';

const name = 'modal';

function controller() {
    let self = this;

    self.$onInit = function () {
        console.log(self.name);
        self._name = createModalName(self.name);
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
            name: '<',
            onClose: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};