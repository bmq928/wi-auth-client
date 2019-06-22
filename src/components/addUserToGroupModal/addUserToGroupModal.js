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
        let groupTemp;
        if (!self.groups) {
            return;
        }
        for (let i = 0; i < self.groups.length; i++) {
            console.log('LOOP')
            if (self.groups[i].idGroup == self.group.idGroup) {
                groupTemp = Object.assign({}, self.groups[i]);
            }
        }
        self.users = groupTemp.users.map(user=> user.idUser);
        self.listUserShow = self.listUser.filter(u => !self.users.includes(u.idUser));
    }

    self.onClose = function () {
        preProcess();
        init();
    }

    self.isSelected = function(user) {
        const id = user.idUser
        return self.listAddUser.includes(id)
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
        self.listUserShow = []
        self.users;
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
                console.log('users', users)
                console.log({'self.listUser':self.listUser})
                console.log({'self.group':self.group})
                console.log({'self.companyId':self.companyId})
            }
        });
        group.getAllGroup((err, resp) => {
            if (err) {
                //console.log(err);
                self.errMsg = err.reason;
            } else {
                //console.log(resp);
                self.groups = resp.content;
                //pagination'
                // self.numPage = self.groups.length / self.groupPerPage + 1;
            }
        });
        
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