// import angular from 'angular';
// import appName from '../../module';
import template from './addCompanyModal.html';

const name = 'addCompanyModal';

controller.$inject = ['company'];
function controller(company){
    
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
                    self.addCompanySuccess();
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