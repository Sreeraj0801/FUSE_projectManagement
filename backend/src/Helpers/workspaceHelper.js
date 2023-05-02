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
exports.workspaceClass = void 0;
const WorkspaceService_1 = require("../Repostitory/WorkspaceService");
const UserService_1 = require("../Repostitory/UserService");
const userWorkspaceInvitation_1 = require("../Verification/Email/userWorkspaceInvitation");
const workspace = new WorkspaceService_1.workspaceService();
const { createWorspace, findWorkspaceByMasterIdandWorkspaceName, findAllWorkspace, insertToWorkspace, updateMemberStatus, findWorkspaceById, findMyWorksapces } = workspace;
const userService = new UserService_1.UserService();
class workspaceClass {
    createWorkspaceHelper(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workspace = yield findWorkspaceByMasterIdandWorkspaceName(details.masterId, details.workspaceName);
                if (workspace === null || workspace === void 0 ? void 0 : workspace.length)
                    throw "Workspace name already exist";
                return yield createWorspace(details);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getAllWorkspaceHelper(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDetails = yield userService.findUserById(userId);
                if (!userDetails) {
                    throw "user not found";
                }
                return yield findAllWorkspace(userId);
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    inviteMembersHelper(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedMembers = details.tags.map((email) => {
                    return { email, status: "pending" };
                });
                const response = yield insertToWorkspace({
                    workSpaceId: details.workSpaceId,
                    updatedMembers,
                });
                yield (0, userWorkspaceInvitation_1.sentMail)(response);
                return "Invitation send succesfully";
            }
            catch (error) {
                console.log(error);
                throw { message: "something went wrong ,Try again " };
            }
        });
    }
    verityMemberHelper({ workspace, email, choise, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield updateMemberStatus({ workspace, email, choise });
                const user = yield userService.findUserByMobileOrEmail(email);
                if (user === null) {
                    throw { message: "User not registered" };
                }
                return {
                    email: user.email,
                    _id: user._id,
                    name: user.name,
                };
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getAllWorkspaceMembersHelper(workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield findWorkspaceById(workspaceId);
                return response === null || response === void 0 ? void 0 : response.members;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getWorkspaceDetailHelper(workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield findWorkspaceById(workspaceId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getMyWorkspacesHelper(userId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield findMyWorksapces(userId, email);
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.workspaceClass = workspaceClass;
