import angular from 'angular';
import components from './components'


const appName = 'app';

const app = angular.module(appName, ['ui.router']);
assignAllComponent();



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // let sidebar = components[components.length - 1];
// let template = `<h1>curView: {{self.curView}}</h1> 
// <button ng-click="self.call()">skda</button>`
// // console.log(sidebar);

// app
//     .controller('nah', function () { this.val = 'nadfa' })
//     .component('cd', {
//         bindings: { a: '<' },
//         template: '<h1>{{$ctrl.a}}</h1>'
//     })
//     .component('ab', {
//         bindings: { a: '<' },
//         template: '<cd a="$ctrl.a"></cd>'
//     })
//     .component('sidebar', {
//         template,
//         bindings: {
//             curView: '<',
//             changeView: '<'
//         },
//         controller: function () {
//             let self = this;

//             self.call = function () { console.log(self) }

//             self.$onInit = function () {

//                 console.log(self.curView);
//                 console.log(self.changeView);
//                 console.log(self);
//             }

//         }
//     });


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function assignAllComponent() {


    components.forEach(c => {
        app.component(c.name, c.options)
    })
}

export default appName;