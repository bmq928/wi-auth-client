// import angular from 'angular';
import { VIEWS } from '../../../constant';
// import appName from '../../../module';
import template from './group.html';
import toast from 'toastr';

const name = VIEWS.group;

controller.$inject = ['group', 'search']
function controller(group, search) {
    let self = this;

    self.$onInit = function () {
        preProcess();
        init();

        //search type
        search.onSearchSubmit((text) => self.searchStr = text);
    }

    self.addGroupSuccess = function () {
        init();
        toast.success('add group success');
    }

    self.changePage = function (page) {
        self.curPage = page;
    }

    self.chooseGroup = function (group) {
        console.log(group);
        self.selectedGroup = group;
    }

    self.removeGroup = function (idGroup) {
        const data = { idGroup };

        if(confirm('are you sure remove this group')) {
            group.removeGroup(data, (err, resp) => {
                if(err) {
                    self.errMsg = err.reason;
                    toast.error(err.reason);
                } else {
                    self.errMsg = '';
                    init();
                }
            });
        }
    }

    function preProcess() {
        self.groups = [];

        //pagination
        self.groupPerPage = 5;
        self.curPage = 1;
        self.numPage = self.groups.length / self.groupPerPage + 1;

        //filter
        self.searchStr = '';

        //selected
        self.selectedGroup = {};

        //text info
        self.errMsg = ''
    }

    function init() {
        group.getAllGroup((err, resp) => {
            if (err) {
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