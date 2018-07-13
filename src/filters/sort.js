// import angular from 'angular';
// import appName from '../module';

const name = 'sort';


// angular
//     .module(appName)
//     .filter(name, pagination)

function sort() {
    return function (input, attr, reverse) {

        if(!attr) return input;
        const param = !!(reverse) ? -1 : 1; // 

        return input
            // .map(e => e)
            .sort((a, b) => {
                const _a = a[attr].toString();
                const _b = b[attr].toString();

                if(_a < _b) return -1 * param; // -1 * -1 = 1 => reverse
                if(_a > _b) return 1 * param;  // 1 * -1 = 1 => reverse

                return 0;
            });

    }
}

export default {
    name,
    options: sort
};