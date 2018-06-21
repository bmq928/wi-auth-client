// import angular from 'angular';
// import appName from '../../module';
import template from './sidebar.html';
import { APP_TITLE } from '../../constant';
import {VIEWS} from '../../constant';


const name = 'sidebar';

controller.$inject = ['search']
function controller(search) {

    let self = this;

    self.$onInit = function () {
        self.title = APP_TITLE;
        self.views = generateView();
    }

    self.tabOnClick = function(view){
        // change view 
        self.changeView(view);

        //reload search string
        search.searchReset();
    }



}


function generateView() {
    const {user, group, company, parameter} = VIEWS;
    const views = [];


    views.push({
        view : user,
        icon: 'person'
    });

    views.push({
        view: group,
        icon: 'group'
    })

    views.push({
        view: company,
        icon: 'business'
    })


    views.push({
        view: parameter,
        icon: 'spellcheck'
    })

    return views
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