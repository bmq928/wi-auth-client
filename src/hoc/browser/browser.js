// import { VIEWS } from '../../../constant';
import template from './browser.html';

const name = 'browser'

controller.$inject = ['auth']
function controller(auth) {
    let self = this;

    self.$onInit = function () {
        preProcess();
        init();

        auth.onLoginSuccess(() => {
            preProcess();
            changeUrl('user');
        });
        auth.onLoggoutSuccess(() => {
            preProcess();
            changeUrl('login');
        });

        auth.onJwtExpired(() => {
            preProcess();
            changeUrl('login');
        })
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