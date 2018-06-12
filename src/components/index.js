import app from './app/app';
import appFooter from './appFooter/appFooter';
import navbar from './navbar/navbar';
import navbarHeader from './navbarHeader/navbarHeader';
import navbarTool from './navbarTool/navbarTool';
import sidebar from './sidebar/sidebar';
import user from './views/user/user';
import group from './views/group/group';
import company from './views/company/company';
import addUserModal from './addUserModal/addUserModal';
import addGroupModal from './addGroupModal/addGroupModal';
import addGroupToUserModal from './addGroupToUserModal/addGroupToUserModal';
import editUserModal from './editUserModal/editUserModal';
import listUserInGroupModal from './listUserInGroupModal/listUserInGroupModal';

export default [
    app,
    appFooter,
    navbar,
    navbarHeader,
    navbarTool,
    sidebar,
    user,
    group,
    company,
    addGroupModal,
    addUserModal,
    addGroupToUserModal,
    editUserModal,
    listUserInGroupModal
];