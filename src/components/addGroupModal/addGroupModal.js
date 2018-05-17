import template from './addGroupModal.html';

const name = 'addGroupModal';

controller.$inject = ['group'];
function controller(group) {

    let self = this;

    self.$onInit = function () {
        
        self.sucMsg = '';
        self.errMsg = '';
        self.listGroup = [];
        self.idGroup = null ;

        group.getAllGroup((err, resp) => {
            if(err) {
                self.errMsg = err.reason || err.statusText;
                self.sucMsg = '';
            } else {
                self.listGroup = resp.content;
            }
        })
        
    }

    self.onSubmit = function() {
        const data = {
            idGroup: self.idGroup,
            idUser: self.userId
        };
        group.addUserToGroup(data, (err, resp) => {
            if(err) {
                console.log(err);
                self.errMsg = err.reason || err.statusText;
                self.sucMsg = '';
            } else {
                console.log(resp);
                self.sucMsg = resp.reason;
                self.errMsg = '';
            }
        })
    }

    self.onClose = function(){
        console.log('close');
        self.errMsg = '';
        self.sucMsg = '';
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
            userId: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};