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
            // console.log({'location.hash':location.hash})
            // changeUrl('user');
            changeUrl(location.hash)
            // console.log({'location.hash':location.hash})
        } else {
            changeUrl('login');
        }
    }


    function changeUrl(url) {        
        if(url[0] == '#' && url[1] == '!') location.hash = url;
        else location.hash = `#!/${url}`;
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