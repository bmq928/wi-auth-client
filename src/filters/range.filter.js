import angular from 'angular';
import appName from '../app';

const name = 'range';

angular
    .module(appName)
    .filter(name, range)

function range() {
    return function (input, num) {

        var arr = [];

        for (var i = 1; i <= num; ++i) arr.push(i);

        return arr;

    }
}

export default name;