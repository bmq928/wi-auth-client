// import angular from 'angular';
// import appName from '../../module';
import template from './addCompanyModal.html';
// import './addCompanyModal.css'

const name = 'addCompanyModal';

controller.$inject = ['company', 'modal'];
function controller(company, modal){
    
    let self = this;

    self.$onInit = function(){
        preProcess();
    }

    self.onClose = function (){
        preProcess();
    }

    self.onSubmit = function () {
        checkSubmit(() => {
            company.addCompany(self.company, (err, resp) => {
                if(err) {
                    console.log(err);
                    self.errMsg = err.content || err.statusText;
                    self.sucMsg = '';
                } else {
                    console.log(resp.reason);
                    self.sucMsg = resp.reason;
                    
                    self.errMsg = '';

                    refreshField();
                    self.addCompanySuccess();
                    modal.closeModal(self.name);
                }
            })
        })
    }

    function preProcess () {
        self.company = {};
        self.name = 'add-company-modal';
        self.sucMsg = '';
        self.errMsg = '';
    }

    function checkSubmit(fullfill) {
        if(!self.company.name) {
            self.errMsg = 'name is required';
            self.sucMsg = '';
        } else {
            fullfill();
        }
    }

    function refreshField() {
        preProcess();
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
            addCompanySuccess: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};