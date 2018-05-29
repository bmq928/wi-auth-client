//dependency
import '@uirouter/angularjs';
import './module';


//render
const app = '<app></app>';
// const app = `<modal name="'nah'"><h1>akldsjflkjasdf</h1></modal><modal-btn target="'nah'" style="'btn btn-success'">some</modal-btn>`
// const app = `<table-form title="'MANAGE'" description="'flaksdjfl'" headers="['sadf', 'adsfsdf']"></table-form>`;
render(app, document.getElementById('root-app'));




function render(component, el) {
    el.innerHTML = component;
}