import template from './modal.html';
// import './modal.css'
// import { createModalName } from '../helper';

const name = 'modal';

controller.$inject = ['modal', '$rootScope']
function controller(modal, $rootScope) {
    let self = this;

    self.$onInit = function () {
        self._name = modal.createModalName(self.name);
        self._closeBtn = modal.createModalCloseName(self.name);

        
        // //safe close on click
        // const btn = document.getElementById(self._closeBtn);
        // console.log(btn)
        // // btn.onclick = function() {
        // //     $rootScope.$apply(() => {
        // //         console.log('should inside a $digest');
        // //     })
        // // }
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
            header: '<',
            name: '<',
            onClose: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};