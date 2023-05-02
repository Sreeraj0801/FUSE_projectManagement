"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectClass = void 0;
const ProjectService_1 = require("../Repostitory/ProjectService");
const UserService_1 = require("../Repostitory/UserService");
const projectInvitation_1 = require("../Verification/Email/projectInvitation");
const projectServ = new ProjectService_1.ProjectServices();
const { createProjectService, findProjectByNameandWorkspaceId, getAllProjectDetails, getProjectDetails, getMembersDetails, } = projectServ;
const userSer = new UserService_1.UserService();
const { findUserById, findUserByMobileOrEmail } = userSer;
class ProjectClass {
    createProjectHelper(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existProject = yield findProjectByNameandWorkspaceId({
                    projectName: details.projectName,
                    workspaceName: details.workspaceName,
                });
                if (existProject === null || existProject === void 0 ? void 0 : existProject.length)
                    throw { msg: "Project name already exist" };
                if (details.members.length)
                    yield (0, projectInvitation_1.sentMail)(details.projectName, details.members);
                return yield createProjectService(details);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getAllProjectDetailsHelper(workspaceId, email, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield getAllProjectDetails(workspaceId, email, userId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getProjectDetailsHelper(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield getProjectDetails(projectId);
                const userId = yield findUserById(response.workspaceDetails.masterId);
                response.workspaceDetails["masterName"] = userId === null || userId === void 0 ? void 0 : userId.name;
                response.workspaceDetails["masterEmail"] = userId === null || userId === void 0 ? void 0 : userId.email;
                return response;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getAllMembersHelper(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield getMembersDetails(projectId);
                const registeredUsers = yield Promise.all(response === null || response === void 0 ? void 0 : response.members.map((member) => findUserByMobileOrEmail(member)));
                const filteredUsers = registeredUsers.filter(user => user);
                const userDetails = filteredUsers.map(user => ({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                }));
                return { members: response === null || response === void 0 ? void 0 : response.members, registerdMembers: userDetails };
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.ProjectClass = ProjectClass;
