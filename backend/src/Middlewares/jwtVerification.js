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
exports.verifyAccesToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyAccesToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log(req.headers['authorization']);
        const accessToken = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        (0, jsonwebtoken_1.verify)(accessToken, process.env.JWT_ACCESS_TOKEN_SECRET);
        next();
    }
    catch (error) {
        console.log(error);
        res.status(403).json("frobidden token");
    }
});
exports.verifyAccesToken = verifyAccesToken;
