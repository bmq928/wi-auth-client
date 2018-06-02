import template from './listUserInGroup.html';
import './listUserInGroup.css';

const name = 'listUserInGroupModal';

function controller (){
    let self = this;

    self.$onInit = function() {
        preProcess();
    }

    function preProcess (){
        self.name = 'list-user-in-group-modal';
    }
}

export default {
    name,
    options: {
        bindings: {
            
        },
        template,
        controller,
        controllerAs: 'self'
    }
};