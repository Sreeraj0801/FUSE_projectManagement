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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProjectSchema_1 = require("../Model/ProjectSchema");
const workspaceSchema_1 = require("../Model/workspaceSchema");
class ProjectServices {
    //-----------create a project
    createProjectService(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(details);
                const response = yield ProjectSchema_1.userProjectSchema.create(details);
                yield workspaceSchema_1.userWorkspaceSchema.findByIdAndUpdate({ _id: details.workspaceName }, { $push: { projects: response._id } });
                return "project created succesfully";
            }
            catch (error) {
                console.log("Error from project creation ", error);
                throw { messsage: "Project creation failed" };
            }
        });
    }
    findProjectByNameandWorkspaceId({ workspaceName, projectName, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ProjectSchema_1.userProjectSchema.find({ workspaceName, projectName });
            }
            catch (error) {
                console.log("This error is where we find project with workspace name and project name ", error);
                throw { message: "somethting went wrong on database" };
            }
        });
    }
    getAllProjectDetails(workspaceId, email, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ userId });
            try {
                return yield ProjectSchema_1.userProjectSchema.find({
                    $and: [
                        { workspaceName: workspaceId },
                        { $or: [{ masterId: userId }, { members: email }] },
                    ],
                });
            }
            catch (error) {
                console.log("Error from getting Project details", error);
                throw { msg: "something went wrong" };
            }
        });
    }
    getProjectDetails(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const proId = new mongoose_1.default.Types.ObjectId(projectId);
                const response = yield ProjectSchema_1.userProjectSchema.aggregate([
                    {
                        $match: {
                            _id: proId,
                        },
                    },
                    {
                        $addFields: {
                            workspaceId: {
                                $toObjectId: "$workspaceName",
                            },
                        },
                    },
                    {
                        $lookup: {
                            from: "workspace",
                            localField: "workspaceId",
                            foreignField: "_id",
                            as: "workspaceDetails",
                        },
                    },
                    {
                        $unwind: "$workspaceDetails",
                    },
                ]);
                return response[0];
            }
            catch (error) {
                console.log("Error from getting single Project Details", error);
                throw { msg: "Somehting went wrong" };
            }
        });
    }
    getMembersDetails(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ProjectSchema_1.userProjectSchema.findById({ _id: projectId });
            }
            catch (error) {
                console.log("Error from getting  registerd project members", error);
                throw { msg: "Somehting went wrong" };
            }
        });
    }
}
exports.ProjectServices = ProjectServices;
