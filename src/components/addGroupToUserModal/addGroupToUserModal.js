import template from './addGroupToUserModal.html';

const name = 'addGroupToUserModal';

controller.$inject = ['group', 'modal'];
function controller(group, modal) {

    let self = this;
    let groups = [];

    self.$onInit = function () {

        preProcess();
        init();

    }

    self.$onChanges = function () {
        // console.log('com id')
        // console.log(self.companyId);
        // console.log(groups);

        self.listGroup = groups.filter(g => g.idCompany === self.companyId);

        //prevent bug after change
        self.userId = self.user.idUser;
    }

    self.isOnGroup = function (group) {
        return group.users.filter(u => {
            return u.idUser === self.userId &&
                u.user_group_permission.permission >= 2
        }).length;
    }

    self.isAdded = function (group) {
        return self.listAddGroup.includes(group.idGroup);
    }

    self.isRemoved = function (group) {
        return self.listRemoveGroup.includes(group.idGroup);
    }

    self.toggleAdd = function (group) {
        if (!self.isAdded(group)) {
            self.listAddGroup.push(group.idGroup);
        } else {
            self.listAddGroup = self.listAddGroup.filter(el => el != group.idGroup);
        }

        console.log(self.listAddGroup);
    }

    self.toggleRemove = function (group) {
        if (!self.isRemoved(group)) {
            self.listRemoveGroup.push(group.idGroup);
        } else {
            self.listRemoveGroup = self.listRemoveGroup.filter(el => el != group.idGroup);
        }
        console.log(self.listRemoveGroup);
    }

    // self.onClose = function () {
    //     preProcess();
    // }

    // self.onSubmit = function () {
    //     const data = {
    //         idGroup: self.idGroup,
    //         idUser: self.userId
    //     };
    //     group.addUserToGroup(data, (err, resp) => {
    //         if (err) {
    //             console.log(err);
    //             self.errMsg = err.reason || err.statusText;
    //             self.sucMsg = '';
    //         } else {
    //             console.log(resp);
    //             self.sucMsg = resp.reason;
    //             self.errMsg = '';
    //             modal.closeModal(self.name);
    //         }
    //     })
    // }

    // const TYPES = {
    //     remove: 'remove',
    //     add: 'add'
    // };
    // const _listAdd = listAdd.map(id => ({id, type: TYPES.add}));
    // const _listRemove = listRemove.map(id => ({id, type: TYPES.remove}));
    // const data = [..._listAdd, ..._listRemove];

    self.onSubmit = function () {

        const TYPES = {
            remove: 'remove',
            add: 'add'
        };

        const _listAdd = self.listAddGroup.map(id => ({ id, type: TYPES.add }));
        const _listRemove = self.listRemoveGroup.map(id => ({ id, type: TYPES.remove }));
        const data = {
            idGroups: [..._listAdd, ..._listRemove],
            idUser: self.userId
        }



        group.addUserToGroups(data, (err, resp) => {
            if (err) {
                console.log(err);
                self.errMsg = err.reason || err.statusText;
                self.sucMsg = '';
            } else {
                console.log(resp);
                self.sucMsg = resp.reason;
                self.errMsg = '';
                modal.closeModal(self.name, self.onClose);
            }
        })
    }

    self.onClose = function () {
        // preProcess();
        //prevent lost data (not neccessary to reload again)

        //because after click close and click add again
        //the component has been already init
        // => init func doesnt get call
        // => if call preProcess cause lose data

        // self.sucMsg = '';
        // self.errMsg = '';
        preProcess();
        init();
    }

    function preProcess() {
        self.name = 'add-group-modal';

        self.sucMsg = '';
        self.errMsg = '';
        self.listGroup = [];
        self.idGroup = null;
        self.searchGroupStr = {
            name: ''
        };

        //data
        self.listAddGroup = [];
        self.listRemoveGroup = [];

        //prevent bug after change
        self.userId = self.user.idUser;
    }

    function init() {
        group.getAllGroup((err, resp) => {
            if (err) {
                self.errMsg = err.reason || err.statusText;
                self.sucMsg = '';
            } else {
                // self.listGroup = resp.content;
                // console.log('==========');
                // console.log(resp.content);
                // console.log(self.companyId);
                // console.log(resp.content.filter(g => g.idCompany === self.companyId));
                groups = resp.content;
                self.listGroup = resp.content.filter(g => g.idCompany === self.companyId);
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
        bindings: {
            user: '<',
            companyId: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};