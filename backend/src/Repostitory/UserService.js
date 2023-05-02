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
exports.UserService = void 0;
const UserSchema_1 = require("../Model/UserSchema");
class UserService {
    // ------------------------------ Insert a new User -----------------
    insertUser(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, mobile, email, pword } = details;
                return yield UserSchema_1.userSchemaRegistration.create({ name, mobile, email, pword });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    //----------------- find user by email / mobile ----------------------
    findUserByMobileOrEmail(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield UserSchema_1.userSchemaRegistration.findOne({ $or: [{ email: identifier }, { mobile: identifier }], });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    findUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield UserSchema_1.userSchemaRegistration.findById(userId);
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    updateUserIsValidate(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield UserSchema_1.userSchemaRegistration.updateOne({ _id: userId }, { $set: { isVerified: true } });
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    insertGoogleUser(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { displayName, email } = details;
                const name = displayName;
                return yield UserSchema_1.userSchemaRegistration.create({ name, email });
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
}
exports.UserService = UserService;
