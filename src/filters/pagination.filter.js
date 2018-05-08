import angular from 'angular';
import appName from '../app';
console.log(appName);

const name = 'pagination';


angular
    .module(appName)
    .filter(name, pagination)

function pagination() {
    return function (input, pageth, videoPerPage) {

        if (!input || !input.length) return;

        // var videoPerPage = window.constants.VIDEO_PER_PAGE;
        let numVideos = input.length;
        let start = (pageth - 1) * videoPerPage;
        let end = start + videoPerPage > numVideos ? numVideos - 1 : start + videoPerPage - 1;

        if (pageth > numVideos / videoPerPage + 1) return; // pageth > num pages
        return input.slice(start, end + 1);

    }
}

export default name;