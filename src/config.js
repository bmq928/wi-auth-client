import { VIEWS } from './constant';

function config($stateProvider, $urlRouterProvider ) {

    const { user, group, company } = VIEWS;

    function createUrl(view) {
        return `/${view}`;
    }

    function createComponent(view) {
        return `<${view}></${view}>`;
    }

    $stateProvider
        .state(user, {
            url: createUrl(user),
            template: createComponent(user)
        })
        .state(group, {
            url: createUrl(group),
            template: createComponent(group)
        })
        .state(company, {
            url: createUrl(company),
            template: createComponent(company)
        })

    $urlRouterProvider.otherwise(createUrl(user));
}

export default config;