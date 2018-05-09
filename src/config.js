import angular from 'angular';
import appName from './module';
import { VIEWS } from './constant';

function createUrl(view) {
    return `/${view}`;
}

function createComponent(view) {
    return `<${view}></${view}>`;
}

angular
    .module(appName)
    .config(function ($stateProvider, $urlRouterProvider,) {

        const {user, group} = VIEWS;

        $stateProvider
            .state(user, {
                url: createUrl(user),
                template: createComponent(user)
            })
            .state(group, {
                url: createUrl(group),
                template: createComponent(group)
            })

        $urlRouterProvider.otherwise(createUrl(user));
    })