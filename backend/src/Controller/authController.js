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
exports.testPurpose = exports.getAccessToken = exports.otpLogin = exports.googleSignIn = exports.resendVerifyLInk = exports.userGoogleRegistration = exports.verifyLink = exports.userLogin = exports.userRegistration = void 0;
const authHelper_1 = require("../Helpers/authHelper");
const JWT_auth_1 = require("../Auth/JWT.auth");
// @ importing instance and destructurin
const authHelpers = new authHelper_1.authHelper();
const { doLogin, doSignUp, generateLink, sendVerifyMail, verifyEmail, googleUserSignUp, verifyUserId, googleLogin, otpLoginAuth, } = authHelpers;
// @ importing instance
const newJWTauth = new JWT_auth_1.JWTauth();
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = newJWTauth;
//------------------------------ user Registration ----------------------
const userRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@fetching data ...
        const response = yield doSignUp(req.body);
        const geratedLink = yield generateLink(response._id.toString());
        res.status(200).json(response);
        const mailResponse = yield sendVerifyMail(response.email, geratedLink);
    }
    catch (error) {
        console.log(error);
        res.status(409).json(error);
    }
});
exports.userRegistration = userRegistration;
//----------------------------- User Login -------------------------------
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@
        const response = yield doLogin(req.body);
        const userId = response._id.toString();
        const accessToken = yield generateAccessToken(userId);
        const refreshToken = yield generateRefreshToken(userId);
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
        res.status(409).json(error);
    }
});
exports.userLogin = userLogin;
const verifyLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield verifyEmail(req.body);
        console.log(response);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(302).json(error);
    }
});
exports.verifyLink = verifyLink;
const userGoogleRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield googleUserSignUp(req.body);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(302).json(error);
    }
});
exports.userGoogleRegistration = userGoogleRegistration;
const resendVerifyLInk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield verifyUserId(req.body.userId);
        if (response) {
            const geratedLink = yield generateLink(response._id.toString());
            res.status(200).json({ msg: "mail succesfully resended" });
            const mailResponse = yield sendVerifyMail(response.email, geratedLink);
        }
        else {
            res.status(302).json("Invalid Link");
        }
    }
    catch (error) {
        res.status(302).json(error);
    }
});
exports.resendVerifyLInk = resendVerifyLInk;
const googleSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield googleLogin(req.body.email);
        const userId = response === null || response === void 0 ? void 0 : response._id.toString();
        const accessToken = yield generateAccessToken(userId);
        const refreshToken = yield generateRefreshToken(userId);
        res.cookie("accessToken", accessToken, { httpOnly: true });
        res.cookie("refreshToken", refreshToken, { httpOnly: true });
        res.status(200).json({ response, accessToken });
    }
    catch (error) {
        res.status(302).json(error);
    }
});
exports.googleSignIn = googleSignIn;
const otpLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield otpLoginAuth(req.body.number);
        const userId = response === null || response === void 0 ? void 0 : response._id.toString();
        const accessToken = yield generateAccessToken(userId);
        const refreshToken = yield generateRefreshToken(userId);
        res.cookie("accessToken", accessToken, { httpOnly: true });
        res.cookie("refreshToken", refreshToken, { httpOnly: true });
        res.status(200).json({ response, accessToken });
    }
    catch (error) {
        res.status(302).json(error);
    }
});
exports.otpLogin = otpLogin;
const getAccessToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const refreshToken = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.refreshToken;
        console.log("refreshToken", refreshToken);
        const response = yield verifyRefreshToken(refreshToken);
        const accessToken = yield generateAccessToken(response === null || response === void 0 ? void 0 : response.userId);
        res.status(200).json(accessToken);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.getAccessToken = getAccessToken;
const testPurpose = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: "got it succesfully" });
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.testPurpose = testPurpose;
