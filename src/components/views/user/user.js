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
}

// ------------------------ HAM SIMULATE -------------------------------

// function controller() {
//     let self = this;

//     self.$onInit = function () {
//         self.users = getFakeData();
//         self.userPerPage = 9;
//         self.curPage = 1;
//         self.filter = '';
//         self.numPage = self.users.length / self.userPerPage + 1;
//     }


// }

// function getFakeData () {
//     return [{
//         id: 'fasdkjf',
//         username: 'flakdsf',
//         email: 'fjaskldf',
//         status: 'aslkdfjlaskdjf',
//         role: 'datdfklajsdlfj',
//         fullname: 'dslfkjasdfjlj'
//     }, {
//         id: 'fasdkjf',
//         username: 'flakdsf',
//         email: 'fjaskldf',
//         status: 'aslkdfjlaskdjf',
//         role: 'datdfklajsdlfj',
//         fullname: 'dslfkjasdfjlj'
//     }, {
//         id: 'fasdkjf',
//         username: 'flakdsf',
//         email: 'fjaskldf',
//         status: 'aslkdfjlaskdjf',
//         role: 'datdfklajsdlfj',
//         fullname: 'dslfkjasdfjlj'
//     }, {
//         id: 'fasdkjf',
//         username: 'flakdsf',
//         email: 'fjaskldf',
//         status: 'aslkdfjlaskdjf',
//         role: 'datdfklajsdlfj',
//         fullname: 'dslfkjasdfjlj'
//     }, {
//         id: 'fasdkjf',
//         username: 'flakdsf',
//         email: 'fjaskldf',
//         status: 'aslkdfjlaskdjf',
//         role: 'datdfklajsdlfj',
//         fullname: 'dslfkjasdfjlj'
//     }]
// }

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