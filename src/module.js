import angular from 'angular';
import components from './components';
import filters from './filters';
import services from './services';
import config from './config';
import hoc from './hoc'


const appName = 'app';

const app = angular.module(appName, ['ui.router']);
assignConfig();
assignAllFilter();
assignAllService();
assignAllComponent();
assignAllHoc();


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

function assignAllService() {
    services.forEach(f => {
        app.factory(f.name, f.options);
    })
}

function assignConfig() {
    app.config(config);
}

function assignAllHoc() {
    hoc.forEach(h => app.component(h.name, h.options));
}

export default appName;