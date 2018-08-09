// import angular from 'angular';
// import appName from '../module';

const name = 'iig';

// angular
//     .module(appName)
//     .filter(name, range)

function isInGroup() {
    return function (input, groups) {
        if(!groups) return input

        try {
            const _groups = JSON.parse(groups)  
            return input.filter(user => !!(_groups.users.filter(_u => user.idUser === _u.idUser)[0]))
        } catch(e) {
            return input
        }
    }
}

export default {
    name,
    options: isInGroup
};