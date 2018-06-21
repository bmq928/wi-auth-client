// import { VIEWS } from '../../../constant';
import template from './browser.html';
// import './login.css';
import toast from 'toastr';

const name = 'browser'

controller.$inject = ['auth']
function controller(auth) {
    let self = this;

    self.$onInit = function () {
        preProcess();
        init()
    }

    function preProcess() {
        self.isLogined = auth.isLogined();
    }

    function init() {
        if (self.isLogined) {
            changeUrl('user');
        } else {
            changeUrl('login');
        }
    }


    function changeUrl(url) {
        location.hash = `#!/${url}`;
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