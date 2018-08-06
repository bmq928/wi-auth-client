// import angular from 'angular';
// import appName from '../../module';
import template from './addUserToGroupModal.html';

const name = 'addUserToGroupModal';

controller.$inject = ['user', 'group', 'modal'];
function controller(user, group, modal){
    let self = this;
    let users = [];

    self.$onInit = function () {
        preProcess();
        init();
    }

    self.$onChanges = function() {
        self.listUser = users.filter(u => u.idCompany === self.companyId)
    }

    self.onClose = function () {
        
        preProcess();
        init();
    }

    self.toggleAdd = function (user) {
        // console.log({user})
        const id = user.idUser

        if (self.listAddUser.includes(id)) {
            self.listAddUser = self.listAddUser.filter(u => u !== id)
        } else {
            self.listAddUser.push(id)
        }

        console.log({'self.listAddUser' : self.listAddUser})
    }

    self.onSubmit = function () {
        checkSubmit(() => {
            const data = {
                idUsers: self.listAddUser,
                idGroup: self.group.idGroup
            }

            // console.log({'group': self.group})

            group.addUsersToGroup(data, (err, resp) => {
                if(err) {
                    self.errMsg = err.reason || err.statusText
                    self.sucMsg = ''
                } else {
                    self.sucMsg = resp.reason
                    self.errMsg = ''
                    self.onSuccess()
                    modal.closeModal(self.name, self.onClose)
                }
            })
        })
    }


    function preProcess() {
        self.name = 'add-user-to-group-modal';

        self.sucMsg = '';
        self.errMsg = '';
        self.listUser = [];
        self.idUser = null;
        self.searchUserStr = {
            username: ''
        }

        //data
        self.listAddUser = [];
    }

    function init() {
        user.getAllUser((err, resp) => {

            if (err) {
                self.errMsg = err.reason || err.statusText;
                self.sucMsg = '';
            } else {
                users = resp.content;
                self.listUser = users.filter(u => u.idCompany === self.companyId)

                console.log({'self.listUser':self.listUser})
                console.log({'self.group':self.group})
                console.log({'self.companyId':self.companyId})
                console.log('================================')
            }
        })
    }

    function checkSubmit(cb) {
        if(!self.listAddUser.length) {
            self.errMsg = 'no user is selected'
        } else {
            self.errMsg = ''
            cb()
        }
    }
}

// angular
//     .module(appName)
//     .component(name, {
//         template
//     })

export default {
    name,
    options: {
        bindings: {
            group: '<',
            companyId: '<',
            onSuccess: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};