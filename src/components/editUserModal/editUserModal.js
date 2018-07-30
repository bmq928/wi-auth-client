import template from './editUserModal.html';

const name = 'editUserModal';

controller.$inject = ['user', 'modal', 'auth', 'company', 'group'];
function controller(user, modal, auth, company, group) {
    let self = this;
    let allGroups = [];

    self.$onInit = function () {
        preProcess();
        init();
        // //copy confirm password
        // self.user.confirmPassword = self.user.password;
    }

    self.$onChanges = function (obj) {


        if (obj && obj.user && obj.user.currentValue && self.user) {
            self.user.confirmPassword = obj.user.currentValue.password;

            //prevent password is show up in ui
            self.user.password = self.user.confirmPassword = '';
        }
        // console.log(self.user);
    }

    self.onSubmit = function () {
        checkSubmit(() => {

            const data = Object.assign({
                idUser: self.idUser
            }, self.user)

            user.editUser(data, (err, resp) => {
                if (err) {
                    self.errMsg = err.content || err.statusText;
                    self.sucMsg = '';
                } else {
                    self.sucMsg = resp.reason;
                    self.errMsg = '';

                    refreshField();
                    self.editUserSuccess();
                    modal.closeModal(self.name);
                }
            })
        })
    }

    self.onClose = function () {
        refreshField();
    }

    self.companyOptionOnClick = function() {
        makeGroupOption();
    }

    function preProcess() {
        self.name = 'edit-user-modal';
        self.role = auth.getData().role;
        self.listCompany = [];
        self.listGroup = [];

        // self.user = {};
        self.sucMsg = '';
        self.errMsg = '';

        //prevent password show up
        if (self.user) self.user.password = self.user.confirmPassword = '';
    }

    function init() {
        group.getAllGroup((err, resp) => {
            if (err) {
                // console.log(err);
                // self.errMsg = err.reason;
            } else {
                console.log(resp);
                // self.listGroup = resp.content;
                allGroups = resp.content;
                makeGroupOption();
            }
        })

        company.getAllCompanies((err, resp) => {
            if (err) {
                console.log(err);
                self.errMsg = err.reason;
            } else {
                console.log(resp);
                self.listCompany = resp.content;

            }
        })
    }

    function makeGroupOption() {
        
        if (!self.user) {
            self.listGroup = [];
        } else {
            self.listGroup = allGroups.filter(g => g.idCompany.toString() === self.user.idCompany.toString());
        }
        // console.log('++++');
        // console.log(self.user);
        // console.log(self.listGroup);
    }

    function refreshField() {
        self.name = 'edit-user-modal';
        self.role = auth.getData().role;

        // self.user = {};
        self.sucMsg = '';
        self.errMsg = '';

        //prevent password show up
        if (self.user) self.user.password = self.user.confirmPassword = '';
    }

    // function checkSubmit(fullfill) {
    //     if (!self.user.password) {


    //         self.errMsg = 'password is required';


    //     } else if (!self.user.confirmPassword) {

    //         self.errMsg = 'confirm password is required';

    //     } else if (self.user.password !== self.user.confirmPassword) {
    //         self.errMsg = 'password confirm is not matched';
    //     } else {

    //         fullfill();
    //     }
    // }

    function checkSubmit(fullfill) {
        if (self.user.password === self.user.confirmPassword) {
            fullfill();
        } else {
            self.errMsg = 'password confirm is not matched';
        }
    }
}


export default {
    name,
    options: {
        bindings: {
            editUserSuccess: '<',
            // idUser: '<',
            user: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};