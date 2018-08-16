// import angular from 'angular';
// import appName from '../../module';
import template from './addGroupModal.html';

const name = 'addGroupModal';

controller.$inject = ['group', 'company', 'modal'];
function controller(group, company, modal){
    let self = this;

    self.$onInit = function () {
        preProcess();
        init();
    }

    self.onSubmit = function() {
        checkSubmit(() => {
            group.addNewGroup(self.group, (err, resp) => {
                if(err) {
                    if(err.code !== 512)self.errMsg = err.content || err.statusText;
                    self.sucMsg = '';
                } else {
                    self.sucMsg = resp.reason;
                    
                    // self.errMsg = '';

                    refreshField();
                    self.addGroupSuccess();
                    modal.closeModal(self.name);
                }
            })
        })
    }

    self.onClose = function() {
        // preProcess();
        //the reason is just like in addGroupToUserModal

        self.group = {};
        self.name = 'add-group-modal';
        self.sucMsg = '';
        self.errMsg = '';
    }


    function checkSubmit (fullfill) {
        if(!self.group.name) {
            self.errMsg = 'name is required';
            self.sucMsg = '';
        } else if(self.userRole === 1) {
            self.group.idCompany = self.getDefaultCompanyId(self.group.name);
            fullfill();
        } else {
            fullfill();
        }
    }

    function preProcess(){
        self.group = {};
        self.name = 'add-group-modal';
        self.sucMsg = '';
        self.errMsg = '';
        self.listCompany = [];
    }

    function init() {
        company.getAllCompanies((err, resp) => {
            if (err) {
                //console.log({err});
                self.errMsg = err.reason;
            } else {
                //console.log(resp);
                self.listCompany = resp.content;
                //console.log(self.listCompany);
            }
        })
    }

    function refreshField(){
        self.group = {};
        self.name = 'add-group-modal';
        self.sucMsg = '';
        self.errMsg = '';
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
            userRole:'<',
            addGroupSuccess: '<',
            getDefaultCompanyId: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};