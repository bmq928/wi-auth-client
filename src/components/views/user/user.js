import {VIEWS} from '../../../constant';
import template from './user.html';
import toast from 'toastr'

const name = VIEWS.user;

// ------------- HAM CHINH ---------------------------
//self.userPerPage is a string => have to parseInt before use

controller.$inject = ['user', 'search', 'company'];

function controller(user, search, company) {
    let self = this;

    self.$onInit = function () {
        console.log(toast);
        preProcess();
        init();


        //search type
        search.onSearchSubmit((text) => self.searchStr.username = text);
    }

    self.addUserSuccess = function (data) {
        // self.users.push(data);
        // // self.users = [...self.users];
        // console.log(self.users);

        init();
        toast.success('Add user success');
    }

    self.editUserSuccess = function () {
        init();
        toast.success('Edit user success');
    }

    self.addGroupUserOnClick = function (id) {
        self.addGroupUser = id;
    }

    self.editUserOnClick = function (user) {
        self.editUser = user;
    }

    self.removeUserOnClick = function (u) {

        const id = u.idUser;
        if (confirm('Are you sure to delete user : ' + u.username)) {
            user.deleteUser(id, (err, resp) => {
                if (err) {
                    console.log(err);
                    self.errMsg = err.reason;
                    toast.error(err.reason);
                } else {
                    init();
                    toast.success('Delete success');
                }
            });
        }
    }

    self.changePage = function (page) {
        self.curPage = page;
    }

    self.changeUserPerPage = function() {
        self.numPage = self.users.length / parseInt(self.userPerPage) + 1;
        if(self.curPage > self.numPage) self.curPage = 1;
    }

    self.activeUser = function (idUser) {
        const ACTIVE = 'Active';
        const data = {
            idUser,
            status: ACTIVE
        }

        user.changeStatus(data, (err, resp) => {
            if (err) {
                self.errMsg = err.reason;
            } else {
                init();
            }
        })
    }

    self.deactiveUser = function (idUser) {
        const INACTIVE = 'Inactive';

        const data = {
            idUser,
            status: INACTIVE
        };

        user.changeStatus(data, (err, resp) => {
            if (err) {
                self.errMsg = err.reason;
            } else {
                init();
            }
        })
    }

    self.forceUserLogOut = function (u) {
        user.forceLogOut(u.idUser, (err, resp) => {
            if (err) {
                self.errMsg = err.reason;
            } else {
                init();
            }
        });
    };

    self.isActive = function (user) {
        const ACTIVE = 'Active';

        return user.status === ACTIVE;
    }

    function preProcess() {
        self.removeUser = [];
        self.addGroupUser = -1;  //id

        //pre
        self.users = [];
        self.idToCompanyDict = {};

        //pagination
        self.userPerPage = 5;
        self.curPage = 1;
        self.numPage = self.users.length / self.userPerPage + 1;

        //filter
        self.searchStr = {};
    }

    function init() {
        user.getAllUser((err, resp) => {

            if (err) {
                console.log(err);
                self.errMsg = err.reason;
            } else {

                console.log(resp);
                self.users = resp.content;
                self.filter = '';


                //pagination
                self.numPage = self.users.length / self.userPerPage + 1;
            }
        })


        company.getAllCompanies((err, resp) => {
            if (err) {
                console.log(err);
                self.errMsg = err.reason;
            } else {

                const companies = resp.content;

                companies.forEach(c => self.idToCompanyDict[c.idCompany] = c.name)
            }
        })

    }
}


export default {
    name,
    options: {
        template,
        controller,
        controllerAs: 'self'
    }
};