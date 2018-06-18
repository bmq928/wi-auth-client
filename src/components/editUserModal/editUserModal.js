import template from './editUserModal.html';

const name = 'editUserModal';

controller.$inject = ['user', 'modal'];
function controller(user, modal) {
    let self = this;

    self.$onInit = function () {
        preProcess();

        // //copy confirm password
        // self.user.confirmPassword = self.user.password;
    }

    self.$onChanges = function (obj) {
        if (obj && obj.user && obj.user.currentValue && self.user)
            self.user.confirmPassword = obj.user.currentValue.password;
        console.log(obj.user);
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
                    self.editUserSuccess();
                    modal.closeModal(self.name);
                }
            })
        })
    }

    self.onClose = function () {
        preProcess();
    }

    function preProcess() {
        self.name = 'edit-user-modal';

        // self.user = {};
        self.sucMsg = '';
        self.errMsg = '';
    }

    function checkSubmit(fullfill) {
        if (self.user.password === self.user.confirmPassword) {
            fullfill();
        } else {
            self.errMsg = 'password confirm is not matched';
        }
    }

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