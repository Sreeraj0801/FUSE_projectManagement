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
exports.getAllregisterdProjectMembers = exports.getProjectDetail = exports.getAllProjectDetails = exports.createProjectController = void 0;
const projectHelpers_1 = require("../Helpers/projectHelpers");
const projectHelper = new projectHelpers_1.ProjectClass();
const { createProjectHelper, getAllProjectDetailsHelper, getProjectDetailsHelper, getAllMembersHelper, } = projectHelper;
const createProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield createProjectHelper(req.body);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.createProjectController = createProjectController;
const getAllProjectDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { workspaceId, email, userId } = req.params;
        const response = yield getAllProjectDetailsHelper(workspaceId, email, userId);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.getAllProjectDetails = getAllProjectDetails;
const getProjectDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = req.params;
        const response = yield getProjectDetailsHelper(projectId);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.getProjectDetail = getProjectDetail;
const getAllregisterdProjectMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = req.params;
        const response = yield getAllMembersHelper(projectId);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.getAllregisterdProjectMembers = getAllregisterdProjectMembers;
