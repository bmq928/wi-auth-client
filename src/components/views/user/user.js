// import angular from 'angular';
import { VIEWS } from '../../../constant';
// import appName from '../../../module';
import template from './user.html';

const name = VIEWS.user;

// ------------- HAM CHINH ---------------------------


controller.$inject = ['user'];
function controller(user) {
    let self = this;

    self.$onInit = function () {

        self.removeUser = []; 
        self.addGroupUser = -1;  //id

        user.getAllUser((err, resp) => {

            if (err) {
                console.log(err);
                self.errMsg = err.reason;
            } else {

                console.log(resp);
                self.users = resp.content;
                self.userPerPage = 9;
                self.curPage = 1;
                self.filter = '';
                self.numPage = self.users.length / self.userPerPage + 1;
            }
        })


    }

    self.addUserSuccess = function (data) {
        self.users.push(data);
        console.log(self.users);
    }

    self.addGroupUserOnClick = function(id) {
        self.addGroupUser = id;
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