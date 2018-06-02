import template from './listUserInGroup.html';
import './listUserInGroup.css';

const name = 'listUserInGroupModal';

controller.$inject = ['user']
function controller(user) {
    let self = this;

    self.$onInit = function () {
        preProcess();
        init();
    }

    function preProcess() {
        self.name = 'list-user-in-group-modal';
        self.errMsg = '';

    }

    function init() {
        // user.getAllUser((err, resp) => {
        //     if (err) {
        //         self.errMsg = err.reason;
        //     } else {
        //         self.users = resp.content;
        //     }
        // })

        if(!self.listUser || !self.listUser.length) self.errMsg = 'no user in this group';
    }
}

export default {
    name,
    options: {
        bindings: {
            listUser: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};