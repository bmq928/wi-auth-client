// import angular from 'angular';
// import appName from '../../module';
import template from './sidebar.html';
import { APP_TITLE } from '../../constant';
import { VIEWS } from '../../constant';


const name = 'sidebar';

controller.$inject = ['search', 'auth', 'user', 'company']
function controller(search, auth, user, company) {

    let self = this;
    const { role, username } = auth.getData();
    let companies, users, error;

    self.$onInit = function () {
        preProcess()
        init()
    }

    self.tabOnClick = function (view) {
        // change view 
        self.changeView(view);

        //reload search string
        search.searchReset();
    }

    function preProcess() {
        self.title = '';
        // self.title = ''
        self.views = generateView(role);

        users = []
        companies = []
        error = ''
    }

    function init() {
        user.getAllUser((err, resp) => {

            if (err) {
                //console.log(err);
                error = err.reason;
            } else {
                users = resp.content;
                console.log({'companies.length':companies.length})
                if(companies.length) {
                    console.log('title')
                    self.title = makeTitle()
                    console.log({'self.title': self.title})
                }
            }
        })


        company.getAllCompanies((err, resp) => {
            if (err) {
                //console.log(err);
                err = err.reason;
            } else {

                companies = resp.content;
                console.log({'users.length':users.length})
                if(users.length) {
                    console.log('title')
                    self.title = makeTitle()
                    console.log({'self.title': self.title})
                }
            }
        })
    }

    function makeTitle() {
        const {idCompany} = users.filter(u => u.username === username)[0]
        console.log({idCompany})
        const {name: companyName} = companies.filter(c => c.idCompany === idCompany)[0]
        console.log({companyName})
        return `${username} / ${companyName}`
    }

}


function generateView(role) {
    const { user, group, company, parameter, project } = VIEWS;
    const views = [];

    limitTabForUser();

    return views;

    function limitTabForUser() {
        switch (role) {
            case 2:
                enableTabUser();
                // enableTabParameter();
                break;
            case 1:
                enableTabUser();
                // enableTabParameter();
                enableTabGroup();
                enableProject();
                break;
            case 0:
                enableTabUser();
                // enableTabParameter();
                enableTabGroup();
                enableTabCompany();
                enableProject();
                break;
        }
    }

    function enableProject() {
        views.push({
            view: project,
            icon: 'book'
        })
    }
    function enableTabUser() {
        views.push({
            view: user,
            icon: 'person'
        });
    }

    function enableTabGroup() {
        views.push({
            view: group,
            icon: 'group'
        })
    }

    function enableTabCompany() {
        views.push({
            view: company,
            icon: 'business'
        })
    }

    function enableTabParameter() {
        views.push({
            view: parameter,
            icon: 'spellcheck'
        })
    }
}




export default {
    name,
    options: {
        template,
        bindings: {
            curView: '<',
            changeView: '<'
        },
        controller,
        controllerAs: 'self',

    }
};