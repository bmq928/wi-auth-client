const name = 'stt';

function stt() {
    return function (input) {
        return parseInt(input) + 1;
    }
}

export default {
    name,
    options: stt
}