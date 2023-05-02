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
exports.JWTauth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JWTauth {
    generateAccessToken(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, jsonwebtoken_1.sign)({ userId }, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    generateRefreshToken(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, jsonwebtoken_1.sign)({ userId }, process.env.JWT_REFRESH_TOKEN_SECRET, { expiresIn: '2d' });
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    createVerifyToken(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, jsonwebtoken_1.sign)({ userId }, process.env.VERIFY_MAIL_TOKEN_SECRET, { expiresIn: '5m' });
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    verifyEmailToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, jsonwebtoken_1.verify)(token, process.env.VERIFY_MAIL_TOKEN_SECRET);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    verifyRefreshToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, jsonwebtoken_1.verify)(token, process.env.JWT_REFRESH_TOKEN_SECRET);
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.JWTauth = JWTauth;
