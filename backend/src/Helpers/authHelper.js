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
exports.authHelper = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const JWT_auth_1 = require("../Auth/JWT.auth");
const UserService_1 = require("../Repostitory/UserService");
const nodemailer_1 = require("../Verification/Email/nodemailer");
//------------------------------- @ Importing the instance ------------------------
const userService = new UserService_1.UserService();
const { insertUser, findUserByMobileOrEmail, findUserById, updateUserIsValidate, insertGoogleUser, } = userService;
// @ importing instance
const newJWTauth = new JWT_auth_1.JWTauth();
const { createVerifyToken, verifyEmailToken } = newJWTauth;
class authHelper {
    //--------------------------- Register a user -------------------------------------
    doSignUp(details) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // checks for depended details
                if (details.pword && details.email && details.name) {
                    const response = yield findUserByMobileOrEmail(details.email);
                    if (!response) {
                        details.pword = yield bcrypt_1.default.hash(details.pword, 10);
                        const data = yield insertUser(details);
                        return {
                            email: data.email,
                            _id: data._id,
                            name: data.name,
                        };
                    }
                    else {
                        if (!(response === null || response === void 0 ? void 0 : response.isVerified))
                            return response;
                        else
                            throw new Error("User Already Exist");
                    }
                }
                else {
                    throw new Error("Require every field");
                }
            }
            catch (error) {
                const EmptyError = error.message;
                if (EmptyError)
                    throw EmptyError;
                if (((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.code) === 11000) {
                    const value = Object.keys(error.error.keyValue)[0];
                    throw { error, message: `${value} already exist` };
                }
                else if ((_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message) {
                    throw { error, message: error.error.message };
                }
                else
                    throw { error };
            }
        });
    }
    //------------------------ Do Login ------------------------------------------------
    doLogin(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (details.credential && details.pword) {
                    const response = yield findUserByMobileOrEmail(details.credential);
                    if (response && response.pword) {
                        const auth = yield bcrypt_1.default.compare(details.pword, response.pword);
                        if (!(response === null || response === void 0 ? void 0 : response.isVerified))
                            throw new Error("Please verify your email Id");
                        if (auth && response.isVerified) {
                            return {
                                email: response.email,
                                _id: response._id,
                                name: response.name,
                            };
                        }
                        else {
                            throw new Error("Incorrect password");
                        }
                    }
                    throw new Error(" User not found ");
                }
                else
                    throw new Error("Every field is required");
            }
            catch (error) {
                const EmptyError = error.message;
                if (EmptyError)
                    throw EmptyError;
                else
                    throw error;
            }
        });
    }
    //---------------  Generate URL ------------------------------------------------
    generateLink(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const verifyToken = yield createVerifyToken(userId);
                return `${process.env.BASE_URL}/verifyUser/${verifyToken}/${userId}`;
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    sendVerifyMail(email, link) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, nodemailer_1.sentMail)(email, link);
            }
            catch (error) {
                console.log("Mail error message", error);
                throw error;
            }
        });
    }
    verifyEmail(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, verifyToken } = details;
                const userDetails = yield findUserById(userId);
                const tokenDetails = yield verifyEmailToken(verifyToken);
                if (tokenDetails.userId === userDetails._id.toString()) {
                    yield updateUserIsValidate(userId);
                    return { succes: true, userDetails };
                }
                else {
                    ("Invalid Link ");
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    googleUserSignUp(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield findUserByMobileOrEmail(details.email);
                if (response) {
                    throw { msg: "User already Exist" };
                }
                return yield insertGoogleUser(details);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    verifyUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield findUserById(userId);
                return response;
            }
            catch (error) {
                throw { msg: "Invalid Link Details" };
            }
        });
    }
    googleLogin(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield findUserByMobileOrEmail(email);
                console.log(response);
                if (!response) {
                    throw { msg: "User not found ! Please Register" };
                }
                if (!(response === null || response === void 0 ? void 0 : response.isVerified)) {
                    const userId = response === null || response === void 0 ? void 0 : response._id;
                    yield updateUserIsValidate(userId);
                    return response;
                }
                else if (response === null || response === void 0 ? void 0 : response.isVerified) {
                    return response;
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    otpLoginAuth(number) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield findUserByMobileOrEmail(number);
                if (!response)
                    throw "User not registerd";
                if (!(response === null || response === void 0 ? void 0 : response.isVerified))
                    throw "Please verify your email Id";
                else if (response === null || response === void 0 ? void 0 : response.isVerified)
                    return response;
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.authHelper = authHelper;
