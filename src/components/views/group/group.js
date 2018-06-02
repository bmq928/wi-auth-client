// import angular from 'angular';
import { VIEWS } from '../../../constant';
// import appName from '../../../module';
import template from './group.html';

const name = VIEWS.group;

controller.$inject = ['group']
function controller(group) {
    let self = this;

    self.$onInit = function() {
        preProcess();
        init();
    }

    self.addGroupSuccess = function() {
        init();
    }

    function preProcess(){
        self.groups = [];

        //pagination
        self.groupPerPage = 5;
        self.curPage = 1;
        self.numPage = self.groups.length / self.groupPerPage + 1;

        //filter
        self.searchStr = '';
    }

    function init(){
        group.getAllGroup((err, resp) => {
            if(err) {
                console.log(err);
                self.errMsg = err.reason;
            } else {
                console.log(resp);
                self.groups = resp.content;
                
                //pagination'
                self.numPage = self.groups.length / self.groupPerPage + 1;
            }
        }) 
    }

}

// angular
//     .module(appName)
//     .component(name, {
//         template,
//         controller,
//         controllerAs: 'self'
//     })


export default {
    name,
    options: {
        template,
        controller,
        controllerAs: 'self'
    }
};