//dependency
import '@uirouter/angularjs';
import './module';


//render
const app = '<app></app>';
render(app, document.getElementById('root-app'));




function render(component, el) {
    el.innerHTML = component;
}