import {VIEWS} from '../../../constant';
import template from './project.html';
import toast from "toastr";
import './project.css';

const name = VIEWS.project;

controller.$inject = ['project', 'search', 'user'];

function controller(project, search, user) {
    let self = this;

    self.$onInit = function () {
        preProcess();
        self.init();
        search.onSearchSubmit((text) => {
            self.searchStr = text;
            self.changePage(1);
            const numElments = self.projects.filter(c => c.name.includes(text) || c.createdBy.includes(text)).length;
            self.numPage = calNumPage(numElments, self.projectPerPage);
        });
    };

    self.sort = function (sortBy) {
        if (self.sortBy === sortBy) self.reverse = !self.reverse;
        else self.reverse = false;
        self.sortBy = sortBy;
    };

    function preProcess() {
        self.projects = [];
        self.projectPerPage = 10;
        self.curPage = 1;
        self.numPage = calNumPage(self.projects.length, self.projectPerPage);
        self.searchStr = {};
        self.errMsg = '';
        self.sortBy = '';
        self.reverse = false;
    }

    self.choseProject = async function (project) {
        //await self.init();
        
        self.selectedProject = project;
    };

    self.changeProjectPerPage = function () {
        self.numPage = calNumPage(self.projects.length, self.projectPerPage);
        if (self.curPage > self.numPage) self.curPage = 1;
    };
    
    self.changePage = function (page) {
        self.curPage = page;
    };

    self.init = async function() {
        user.getAllUser((err, resp) => {
            let users = [];
            resp.content.forEach(user => users.push(user.username));
            project.getAllProject({users}, (err, resp) => {
                if (err) {
                    self.errMsg = err.reason;
                    toast.error(err.reason);
                } else {
                    self.errMsg = '';
                    self.projects = resp.content;
                    self.numPage = calNumPage(self.projects.length, self.projectPerPage);
                }
            });
        });
    }

    self.createSharedProject = function (projectObject) {
        project.createSharedProject({
            project_name: projectObject.name,
            username: projectObject.createdBy
        }, (err, resp) => {
            if (err) {
                toast.error(err.reason);
            } else {
                self.init();
                toast.success("Done");
            }
        });
    };

    self.removeSharedProject = function (projectObject) {
        project.removeSharedProject(projectObject, (err, resp) => {
            if (err) {
                toast.error(err.reason);
            } else {
                self.init();
                toast.success("Done");
            }
        });
    };
    self.removeProject = function (idProject, owner) {
        const data = {idProject, owner};
        if (confirm('Are you sure remove this project?')) {
            project.removeProject(data, (err, resp) => {
                if (err) {
                    self.errMsg = err.reason;
                    toast.error(err.reason);
                } else {
                    self.errMsg = '';
                    self.init();
                    toast.success('Delete success');
                }
            })
        }
    };

    function calNumPage(numElments, elPerPage) {
        return parseInt(numElments) / parseInt(elPerPage) + 1;
    }

    self.miniTrans = function(description) {
        if (!description) return '';
        if (description.length > 55) {
            return description.substr(0,51) + '...';
        }
        return description;
    }
}

export default {
    name,
    options: {
        template,
        controller,
        controllerAs: 'self'
    }
};