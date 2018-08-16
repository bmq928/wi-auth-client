import template from './listGroupInProject.html';
import './listGroupInProject.css';
import toast from "toastr";

const name = 'listGroupInProjectModal';

function controller(group, project) {
    let self = this;
    self.$onInit = function () {
        preProcess();
        init();
    };

    function preProcess() {
        self.name = 'list-group-in-project-modal';
        self.errMsg = '';

    }
    self.removeGroup = function (data) {
        project.removeProjectOutOfGroup({
            idGroup: data.idGroup,
            idSharedProject: data.shared_project_group.idSharedProject,
            type: 'remove',
        }, (err, resp) => {
            if (err) {
                toast.error(err.reason);
            } else {
                self.listGroup.splice(self.listGroup.findIndex(g => g.idGroup == data.idGroup), 1);
                init();
                // toast.success("Done");
            }
        });
    }
    function init() {
        self.projectCtrl.init();
    }
}

export default {
    name,
    options: {
        bindings: {
            listGroup: '<',
            // removeGroup: '<'
            projectCtrl: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
};