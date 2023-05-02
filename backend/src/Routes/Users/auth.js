"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jwtVerification_1 = require("../../Middlewares/jwtVerification");
const authController_1 = require("../../Controller/authController");
//------------------------------ User Registration ---------------
router.post("/register", authController_1.userRegistration);
//------------------------------ User Login  ---------------------
router.post("/login", authController_1.userLogin);
// ---------------------------- Verify Link ----------------------
router.post("/verifyLink", authController_1.verifyLink);
//--------------------------- EmailRegistration -------------------
router.post("/googleRegistration", authController_1.userGoogleRegistration);
//---------------------------Resend Email Registration-------------
router.post("/resendVerifyLink", authController_1.resendVerifyLInk);
//---------------------------Resend Email Registration--------------
router.post("/googleSignIn", authController_1.googleSignIn);
//--------------------------- OTP login ----------------------------
router.post("/otpLogin", authController_1.otpLogin);
//---------------------------Resend AccessToken---------------------
router.get("/token", authController_1.getAccessToken);
router.get("/testCase", jwtVerification_1.verifyAccesToken, authController_1.testPurpose);
exports.default = router;
