import app from './app/app';
import appFooter from './appFooter/appFooter';
import navbar from './navbar/navbar';
import navbarHeader from './navbarHeader/navbarHeader';
import navbarTool from './navbarTool/navbarTool';
import sidebar from './sidebar/sidebar';
import user from './views/user/user';
import group from './views/group/group';
import login from './views/login/login';
import company from './views/company/company';
import parameter from './views/parameter/parameter';
import addUserModal from './addUserModal/addUserModal';
import addGroupModal from './addGroupModal/addGroupModal';
import addGroupToUserModal from './addGroupToUserModal/addGroupToUserModal';
import addCompanyModal from './addCompanyModal/addCompanyModal';
import editUserModal from './editUserModal/editUserModal';
import editCompanyModal from './editCompanyModal/editCompanyModal';
import listUserInGroupModal from './listUserInGroupModal/listUserInGroupModal';
import project from './views/project/project';

export default [
    app,
    appFooter,
    navbar,
    navbarHeader,
    navbarTool,
    sidebar,
    user,
    login,
    group,
    parameter,
    company,
    addGroupModal,
    addCompanyModal,
    addUserModal,
    addGroupToUserModal,
    editUserModal,
    editCompanyModal,
    listUserInGroupModal,
    project
];