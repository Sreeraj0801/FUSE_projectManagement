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
exports.workspaceService = void 0;
const workspaceSchema_1 = require("../Model/workspaceSchema");
class workspaceService {
    createWorspace(detaiils) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { workspaceName, masterId, color } = detaiils;
                yield workspaceSchema_1.userWorkspaceSchema.create({ workspaceName, masterId, color });
                return "Workspace created Succesfully";
            }
            catch (error) {
                throw { message: "Database Error" };
            }
        });
    }
    findWorkspaceByMasterIdandWorkspaceName(masterId, workspaceName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield workspaceSchema_1.userWorkspaceSchema.find({ masterId, workspaceName });
            }
            catch (error) {
                console.log(error);
                throw { message: "Database Error" };
            }
        });
    }
    findAllWorkspace(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield workspaceSchema_1.userWorkspaceSchema.find({ masterId: userId });
                return response;
            }
            catch (error) {
                throw { message: "Database Error" };
            }
        });
    }
    insertToWorkspace(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workspace = yield workspaceSchema_1.userWorkspaceSchema.findById({ _id: details.workSpaceId });
                const members = workspace === null || workspace === void 0 ? void 0 : workspace.members;
                const membersEmail = members === null || members === void 0 ? void 0 : members.map((member) => {
                    return member === null || member === void 0 ? void 0 : member.email;
                });
                const updatedDetails = details.updatedMembers.filter((obj) => {
                    if (!(membersEmail === null || membersEmail === void 0 ? void 0 : membersEmail.includes(obj.email)))
                        return obj;
                });
                updatedDetails['worksapceId'] = workspace === null || workspace === void 0 ? void 0 : workspace._id.toString();
                yield workspaceSchema_1.userWorkspaceSchema.updateOne({ _id: details.workSpaceId }, { $push: { members: { $each: [...updatedDetails] } } });
                return updatedDetails;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateMemberStatus({ workspace, choise, email }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield workspaceSchema_1.userWorkspaceSchema.updateOne({ _id: workspace, "members.email": email }, { $set: { "members.$.status": choise } });
                return;
            }
            catch (error) {
                console.error("Error message when member status is updating", error);
            }
        });
    }
    findWorkspaceById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield workspaceSchema_1.userWorkspaceSchema.findById({ _id });
            }
            catch (error) {
                console.log("its the error from finding workspace by Id", error);
                throw { msg: "Workspace not found" };
            }
        });
    }
    findMyWorksapces(userId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield workspaceSchema_1.userWorkspaceSchema.aggregate([
                    {
                        $facet: {
                            ownedWorkspaces: [
                                {
                                    $match: {
                                        masterId: userId
                                    }
                                }
                            ],
                            sharedWorkspaces: [
                                {
                                    $match: {
                                        members: {
                                            $elemMatch: {
                                                email: email,
                                                status: "accepted"
                                            }
                                        }
                                    }
                                },
                                {
                                    $lookup: {
                                        from: "users",
                                        let: { masterId: "$masterId" },
                                        pipeline: [
                                            {
                                                $match: {
                                                    $expr: {
                                                        $eq: ["$_id", { $toObjectId: "$$masterId" }]
                                                    }
                                                }
                                            },
                                            {
                                                $project: {
                                                    _id: 1,
                                                    name: 1,
                                                    email: 1
                                                }
                                            }
                                        ],
                                        as: "masterDetails"
                                    }
                                }
                            ]
                        }
                    }
                ]);
                return response[0];
            }
            catch (error) {
                console.log("its the error from fetching My workspaces by Id shared and owned ", error);
                throw { msg: "Workspace not found" };
            }
        });
    }
}
exports.workspaceService = workspaceService;
