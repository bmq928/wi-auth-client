// import angular from 'angular';
// import appName from '../../module';
import template from './sidebar.html';
import { APP_TITLE } from '../../constant';
import { VIEWS } from '../../constant';


const name = 'sidebar';

controller.$inject = ['search', 'auth']
function controller(search, auth) {

    let self = this;
    const {role} = auth.getData();

    self.$onInit = function () {
        self.title = APP_TITLE;
        self.views = generateView(role);
    }

    self.tabOnClick = function (view) {
        // change view 
        self.changeView(view);

        //reload search string
        search.searchReset();
    }



}


function generateView(role) {
    const { user, group, company, parameter } = VIEWS;
    const views = [];

    limitTabForUser();

    return views;

    function limitTabForUser() {
        switch (role) {
            case 2:
                enableTabUser();
                enableTabParameter();
                break;
            case 1:
                enableTabUser();
                enableTabParameter();
                enableTabGroup();
                break;
            case 0:
                enableTabUser();
                enableTabParameter();
                enableTabGroup();
                enableTabCompany();
                break;
        }
    }

    function enableTabUser() {
        views.push({
            view: user,
            icon: 'person'
        });
    }

    function enableTabGroup() {
        views.push({
            view: group,
            icon: 'group'
        })
    }

    function enableTabCompany() {
        views.push({
            view: company,
            icon: 'business'
        })
    }

    function enableTabParameter() {
        views.push({
            view: parameter,
            icon: 'spellcheck'
        })
    }
}




export default {
    name,
    options: {
        template,
        bindings: {
            curView: '<',
            changeView: '<'
        },
        controller,
        controllerAs: 'self',

    }
};