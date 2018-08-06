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
        // //console.log(btn)
        // // btn.onclick = function() {
        // //     $rootScope.$apply(() => {
        // //         //console.log('should inside a $digest');
        // //     })
        // // }

        enableEnterSubmit();

    }

    function enableEnterSubmit() {
        // const $ = window.jQuery;
        // const $thisModal = $(`#${self._name}`);
        // const $btnSubmit = $(`#${self._name} .modal-footer > button`);

        // //console.log('this modal');
        // //console.log(self._name);
        // //console.log($thisModal);

        // //console.log('this modal button');
        // //console.log($btnSubmit);

        // //console.log(document.getElementById(self._name));


        // if($thisModal.hasClass('in')) {

        // }
        window.addEventListener('keyup', function (event) {
            
            event.preventDefault();

            if (event.keyCode === 13) {
                
                const $ = window.jQuery;
                const $thisModal = $(`#${self._name}`);
                const $btnSubmit = $(`#${self._name} .modal-footer > button`);

                if ($thisModal.hasClass('in')) $btnSubmit.click();
            }
        })
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