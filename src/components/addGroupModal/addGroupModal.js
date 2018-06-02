// import angular from 'angular';
// import appName from '../../module';
import template from './addGroupModal.html';

const name = 'addGroupModal';

controller.$inject = ['group'];
function controller(group){
    let self = this;

    self.$onInit = function () {
        preProcess();
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
                }
            })
        })
    }

    self.onClose = function() {
        preProcess();
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