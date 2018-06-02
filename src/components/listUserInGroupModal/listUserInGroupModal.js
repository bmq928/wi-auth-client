import template from './listUserInGroup.html';
import './listUserInGroup.css';

const name = 'listUserInGroupModal';

controller.$inject = ['user', 'group']
function controller(user, group) {
    let self = this;

    self.$onInit = function () {
        preProcess();
        init();
    }

    self.removeUserFromGroup = function (idUser) {
        const data = {
            idUser, 
            idGroup: self.idGroup
        }

        group.removeUserFromGroup(data, (err, resp) => {
            if(err) {
                self.sucMsg = '';
                self.errMsg = err.reason;
            }
            else {
                self.sucMsg = 'success remove user from group';
                self.errMsg = '';

                //remove in representation
                self.listUser = self.listUser.filter(u => u.idUser !== idUser);
            }
        })
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
        // console.log(self.listUser);
        // if (self.listUser )console.log(self.listUser.length); else console.log('nanimonaidesu');
        // if(!self.listUser || !self.listUser.length) self.errMsg = 'no user in this group';
    }
}

export default {
    name,
    options: {
        bindings: {
            listUser: '<',
            idGroup: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};