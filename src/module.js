import angular from 'angular';
import components from './components';
import filters from './filters';
import config from './config';


const appName = 'app';

const app = angular.module(appName, ['ui.router']);
assignConfig();
assignAllFilter();
assignAllComponent();



function assignAllComponent() {


    components.forEach(c => {
        app.component(c.name, c.options)
    })
}

function assignAllFilter(){
    filters.forEach(f => {
        app.filter(f.name, f.options);
        console.log(f.name);
    });
}

function assignConfig() {
    app.config(config);
}

export default appName;