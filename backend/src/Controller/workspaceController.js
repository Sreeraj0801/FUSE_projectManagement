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
exports.getMyWorkspaces = exports.getWorksapceDetails = exports.getAllWorkspaceMembers = exports.verifyMemberController = exports.inviteMembersController = exports.getAllWorkspaceController = exports.createWorkspaceController = void 0;
const workspaceHelper_1 = require("../Helpers/workspaceHelper");
const cryptoEncryption_1 = __importDefault(require("../Encryption/cryptoEncryption"));
const { decryptEmail } = (0, cryptoEncryption_1.default)();
const JWT_auth_1 = require("../Auth/JWT.auth");
/*
    Exporting classControllers and destructing it
*/
const workspace = new workspaceHelper_1.workspaceClass();
const { createWorkspaceHelper, getAllWorkspaceHelper, inviteMembersHelper, verityMemberHelper, getAllWorkspaceMembersHelper, getWorkspaceDetailHelper, getMyWorkspacesHelper } = workspace;
// @ importing instance
const newJWTauth = new JWT_auth_1.JWTauth();
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = newJWTauth;
//------------------------------ user Registration ----------------------
const createWorkspaceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield createWorkspaceHelper(req.body);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(401).json(error === null || error === void 0 ? void 0 : error.error);
    }
});
exports.createWorkspaceController = createWorkspaceController;
const getAllWorkspaceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.params) === null || _a === void 0 ? void 0 : _a.userId;
        const response = yield getAllWorkspaceHelper(userId);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(409).json(error);
    }
});
exports.getAllWorkspaceController = getAllWorkspaceController;
const inviteMembersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield inviteMembersHelper(req.body);
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});
exports.inviteMembersController = inviteMembersController;
const verifyMemberController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { workspace, choise } = req.params;
        const email = yield decryptEmail(req.params.email);
        const response = yield verityMemberHelper({ workspace, email, choise });
        const accessToken = yield generateAccessToken(response._id.toString());
        const refreshToken = yield generateRefreshToken(response._id.toString());
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        });
        res.status(200).json({ response, accessToken });
    }
    catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
});
exports.verifyMemberController = verifyMemberController;
const getAllWorkspaceMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { workspaceId } = req.params;
        const response = yield getAllWorkspaceMembersHelper(workspaceId);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getAllWorkspaceMembers = getAllWorkspaceMembers;
const getWorksapceDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { workspaceId } = req.params;
        const response = yield getWorkspaceDetailHelper(workspaceId);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getWorksapceDetails = getWorksapceDetails;
const getMyWorkspaces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, email } = req.params;
        const response = yield getMyWorkspacesHelper(userId, email);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getMyWorkspaces = getMyWorkspaces;
