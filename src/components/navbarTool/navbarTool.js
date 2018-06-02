// import angular from 'angular';
// import appName from '../../module';
import template from './navbarTool.html';

const name = 'navbarTool';

controller.$inject = ['search']
function controller(search) {
    let self = this;

    self.$onInit = function() {
        self.searchStr = '';

        search.onSearchReset(() => {
            self.searchStr = '';
        })
    }

    self.onTyping = function(){
        search.searchSubmit(self.searchStr);
    }

}

// angular
//     .module(appName)
//     .component(name, {
//         bindings: {

//         },
//         template,
//         controller,
//         controllerAs: 'self'
//     })

export default {
    name,
    options: {
        bindings: {

        },
        template,
        controller,
        controllerAs: 'self'
    }
};