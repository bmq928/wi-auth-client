// import angular from 'angular';
import { VIEWS } from '../../../constant';
// import appName from '../../../module';
import template from './group.html';
import toast from 'toastr';

const name = VIEWS.group;

controller.$inject = ['group', 'search', 'company', 'auth']
function controller(group, search, company, auth) {
    let self = this;

    self.$onInit = function () {
        preProcess();
        init();

        //search type
        search.onSearchSubmit((text) => {
            self.searchStr.name = text

            self.changePage(1);

            const numElement = self.groups.filter(g => g.name.includes(text)).length;
            self.numPage = calNumPage(numElement, self.groupPerPage);
        });
    }

    self.addGroupSuccess = function () {
        init();
        toast.success('Add group success');
    }

    self.changePage = function (page) {
        self.curPage = page;
    }

    self.changeGroupPerPage = function() {
        // self.numPage = self.companies.length / parseInt(self.groupPerPage) + 1;
        self.numPage = calNumPage(self.groups.length, self.groupPerPage);
        if(self.curPage > self.numPage) self.curPage = 1;
    }

    self.chooseGroup = function (group) {
        console.log(group);
        self.selectedGroup = group;
    }

    self.removeGroup = function (idGroup) {
        const data = { idGroup };

        if(confirm('Are you sure remove this group?')) {
            group.removeGroup(data, (err, resp) => {
                if(err) {
                    self.errMsg = err.reason;
                    toast.error(err.reason);
                } else {
                    self.errMsg = '';
                    init();
                    toast.success('Delete success');
                }
            });
        }
    }

    function preProcess() {
        self.groups = [];
        self.companies = [];
        self.idToCompanyDict = {};
        self.role = auth.getData().role;

        //pagination
        self.groupPerPage = 5;
        self.curPage = 1;
        // self.numPage = self.groups.length / self.groupPerPage + 1;
        self.numPage = calNumPage(self.groups.length, self.groupPerPage);

        //filter
        self.searchStr = {};
        self.inCompany = {};

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
                // self.numPage = self.groups.length / self.groupPerPage + 1;
                self.numPage = calNumPage(self.groups.length, self.groupPerPage);
            }
        })

        company.getAllCompanies((err, resp) => {
            if (err) {
                console.log(err);
                self.errMsg = err.reason;
            } else {
                console.log(resp);
                self.companies = resp.content;
                
                self.companies.forEach(c => self.idToCompanyDict[c.idCompany] = c.name)
            }
        })
    }

    function calNumPage(numElments, elPerPage) {
        // return self.users.length / parseInt(self.userPerPage) + 1;
        return parseInt(numElments) / parseInt(elPerPage) + 1;
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