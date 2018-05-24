// import angular from 'angular';
import { VIEWS } from '../../../constant';
// import appName from '../../../module';
import template from './user.html';

const name = VIEWS.user;

// ------------- HAM CHINH ---------------------------


controller.$inject = ['user', 'search'];
function controller(user, search) {
    let self = this;

    self.$onInit = function () {
        preProcess();
        init();


        //search type
        search.onSearchSubmit((text) => self.searchStr = text);
    }

    self.addUserSuccess = function (data) {
        // self.users.push(data);
        // // self.users = [...self.users];
        // console.log(self.users);

        init();
    }

    self.editUserSuccess = function () {
        init();
    }

    self.addGroupUserOnClick = function (id) {
        self.addGroupUser = id;
    }

    self.editUserOnClick = function (id) {
        self.editUser = id;
    }

    self.removeUserOnClick = function (id) {
        if (confirm('Are you sure to delete user id : ' + id)) {
            user.deleteUser(id, (err, resp) => {
                if (err) {
                    console.log(err);
                    self.errMsg = err.reason;
                } else {
                    init();

                }
            });
        }
    }

    self.changePage = function (page) {
        self.curPage = page;
    }

    self.activeUser = function(idUser) {
        const ACTIVE = 'Active';
        const data = {
            idUser,
            status: ACTIVE
        }
        
        user.editUser(data, (err, resp) => {
            if(err) {
                self.errMsg = err.reason;
            } else {
                init();
            }
        })
    }

    self.deactiveUser = function(idUser) {
        const INACTIVE = 'Inactive';

        const data = {
            idUser,
            status: INACTIVE
        };

        user.editUser(data, (err, resp) => {
            if(err) {
                self.errMsg = err.reason;
            } else {
                init();
            }
        })
    }

    self.isActive = function(user) {
        const ACTIVE = 'Active';
        
        return user.status === ACTIVE;
    }

    function preProcess() {
        self.removeUser = [];
        self.addGroupUser = -1;  //id

        //pre
        self.users = [];

        //pagination
        self.userPerPage = 5;
        self.curPage = 1;
        self.numPage = self.users.length / self.userPerPage + 1;

        //filter
        self.searchStr = '';
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