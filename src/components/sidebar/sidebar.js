// import angular from 'angular';
// import appName from '../../module';
import template from './sidebar.html';
import { APP_TITLE } from '../../constant';
import {VIEWS} from '../../constant';


const name = 'sidebar';

function controller() {

    let self = this;

    self.$onInit = function () {
        self.title = APP_TITLE;
        self.views = generateView();
    }

    self.tabOnClick = function(view){
        console.log('cl');
        self.changeView(view);
        console.log(self.curView);
    }



}


function generateView() {
    const {user, group} = VIEWS;
    const views = [];


    views.push({
        view : user,
        icon: 'person'
    });

    views.push({
        view: group,
        icon: 'group'
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