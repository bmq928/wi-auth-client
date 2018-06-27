// import angular from 'angular';
// import appName from '../module';

const name = 'pagination';


// angular
//     .module(appName)
//     .filter(name, pagination)

function pagination() {
    return function (input, pageth, elPerPage) {

        if (!input || !input.length) return;

        // var videoPerPage = window.constants.VIDEO_PER_PAGE;
        // elPerPage = parseInt(elPerPage);

        pageth = parseInt(pageth);
        elPerPage = parseInt(elPerPage);

        let numEl = input.length;
        let start = (pageth - 1) * elPerPage;
        let end = start + elPerPage;

        console.log('==========')
        console.log(`num ele ${numEl}`);
        console.log(`page: ${pageth}`);
        console.log(`elperpage: ${elPerPage}`);
        console.log(`start: ${start}`);
        console.log(`end: ${end}`);
        // if (pageth > numEl / elPerPage + 1) return; // pageth > num pages
        return input.slice(start, end);

        
    }
}

export default {
    name,
    options: pagination
};