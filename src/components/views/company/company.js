import { VIEWS } from '../../../constant';
import template from './company.html';
import toast from 'toastr';

const name = VIEWS.company;

controller.$inject = ['company', 'search']
function controller(company, search) {

    let self = this;

    self.$onInit = function () {
        preProcess();
        init();

        //search type
        search.onSearchSubmit((text) => self.searchStr = text);
    }

    self.addCompanySuccess = function () {
        init();
        toast.success('add company success');
    }

    self.editCompanySuccess = function() {
        init();
        toast.success('edit company success');
    }

    self.changePage = function (page) {
        self.curPage = page;
    }

    self.removeCompany = function (idCompany) {
        const data = { idCompany };
        console.log(data);
        if (confirm('are you sure remove this group')) {
            company.removeCompany(data, (err, resp) => {
                if(err) {
                    self.errMsg = err.reason;
                    toast.error(err.reason);
                } else {
                    self.errMsg = '';
                    init();
                }
            })
        }
    }

    self.chooseCompany = function(company) {
        self.editCompany = company;
    }

    function preProcess() {
        self.companies = [];

        //pagination
        self.companyPerPage = 5;
        self.curPage = 1;
        self.numPage = self.companies.length / self.companyPerPage + 1;

        //filter
        self.searchStr = '';

        //text info
        self.errMsg = ''

        //chosen com
        self.editCompany = null;
    }

    function init() {
        company.getAllCompanies((err, resp) => {
            if (err) {
                console.log(err);
                self.errMsg = err.reason;
            } else {
                console.log(resp);
                self.companies = resp.content;

                self.filter = '';


                //pagination
                self.numPage = self.companies.length / self.companyPerPage + 1;
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