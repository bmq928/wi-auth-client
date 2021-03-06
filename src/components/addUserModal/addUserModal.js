// import angular from 'angular';
// import appName from '../../module';
import template from './addUserModal.html';

const name = 'addUserModal';

controller.$inject = ['user', 'company', 'modal', 'auth'];
function controller(user, company, modal, auth){
    let self = this;

    self.$onInit = function(){
        preProcess();
        init();
    }

    self.onSubmit = function(){
        
        checkSubmit(() => {
            user.addUser(self.user, (err, resp) => {
                //console.log(self.user);
                if(err) {
                    self.errMsg = err.content || err.statusText;
                    self.sucMsg = '';
                } else {
                    //console.log(resp);
                    self.sucMsg = resp.reason;
                    self.errMsg = '';
                    
                    refreshField();
                    self.addUserSuccess(self.user);
                    modal.closeModal(self.name);
                }
            })
        })

       
    }

    self.onClose = function(){
        // preProcess();
        //the reason is just like in addGroupToUserModal

        self.name = 'add-user-modal';
        self.user = {};
        self.sucMsg = '';
        self.errMsg = '';
    }

    function preProcess () {
        self.name = 'add-user-modal';
        self.user = {};
        self.sucMsg = '';
        self.errMsg = '';
        self.listCompany = [];
    }

    function init() {
        company.getAllCompanies((err, resp) => {
            if (err) {
                //console.log(err);
                self.errMsg = err.reason;
            } else {
                //console.log(resp);
                self.listCompany = resp.content;
                //console.log(self.listCompany);
            }
        })
    }

    function refreshField() {
        self.name = 'add-user-modal';
        self.user = {};
        self.sucMsg = '';
        self.errMsg = '';
    }

    function checkSubmit(fullfill){
        if (self.userRole === 1) {
            // company moderator mode
            //set company is default this company
            self.user.idCompany = self.getDefaultCompanyId(auth.getData().username);
            if(self.user.role !== 0 && !self.user.role) self.user.role = 3; //normal user default
            fullfill()
            // //console.log({'user': self.user})
        }
        else if(self.user.password === self.user.confirmPassword) {
           fullfill();
        } else {
            self.errMsg = 'password confirm is not matched';
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
            userRole: '<',
            addUserSuccess: '<',
            getDefaultCompanyId: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};