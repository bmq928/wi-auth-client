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
                    console.log(err);
                    self.errMsg = err.content || err.statusText;
                    self.sucMsg = '';
                } else {
                    console.log(resp.reason);
                    self.sucMsg = resp.reason;
                    
                    self.errMsg = '';
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
        } else if (!self.group.description) {
            self.errMsg = 'description is required';
            self.sucMsg = ''
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
                console.log(err);
                self.errMsg = err.reason;
            } else {
                console.log(resp);
                self.listCompany = resp.content;
                console.log(self.listCompany);
            }
        })
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
            addGroupSuccess: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};