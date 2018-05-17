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

        init();

    }

    self.addUserSuccess = function (data) {
        // self.users.push(data);
        // // self.users = [...self.users];
        // console.log(self.users);

        init();
    }

    self.addGroupUserOnClick = function(id) {
        self.addGroupUser = id;
    }

    self.removeUserOnClick = function (id){
        if(confirm('Are you sure to delete user id : ' + id)) {
            user.deleteUser(id, (err, resp) => {
                if(err) {
                    console.log(err);
                    self.errMsg = err.reason;
                } else {
                    init();
                    
                }
            });
        }
    }

    function init(){
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
}




export default {
    name,
    options: {
        template,
        controller,
        controllerAs: 'self'
    }
};