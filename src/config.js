import { VIEWS } from './constant';

function config($stateProvider, $urlRouterProvider) {

    const { user, group, company, login } = VIEWS;

    function createUrl(view) {
        return `/${view}`;
    }

    function createComponent(view) {
        return `<${view}></${view}>`;
    }

    $stateProvider
        .state(user, {
            url: createUrl(user),
            template: createComponent(user),
            controller: function($state) {
                if(!isLogin()) goToLogin($state);
            }
        })
        .state(group, {
            url: createUrl(group),
            template: createComponent(group),
            controller: function($state) {
                if(!isLogin()) goToLogin($state);
            }
        })
        .state(company, {
            url: createUrl(company),
            template: createComponent(company),
            controller: function($state) {
                if(!isLogin()) goToLogin($state);
            }
        })
        .state(login, {
            //just a fake url for login
            //because now i use browser hoc
            url: createUrl(login),
            template: '<div></div>'
        })
        // .state(login, {
        //     url: createUrl(login),
        //     template: createComponent(login),
        //     controller: function($state) {
        //         if(isLogin()) {
        //             goToDashboard($state);
        //         }
        //     }
        // })

    $urlRouterProvider.otherwise(createUrl(user));



    function goToLogin($state) {
        $state.go(login)
    }

    function goToDashboard($state) {
        $state.go(user)
    }

    function isLogin(){
        const token = localStorage.getItem('jwt-token');

        if(token) return true;
        return false;
    }
}


export default config;