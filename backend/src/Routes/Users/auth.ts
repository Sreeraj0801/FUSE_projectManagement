import express from 'express';
const router = express.Router();
import {userRegistration,userLogin,verifyLink,userGoogleRegistration ,resendVerifyLInk ,googleSignIn ,otpLogin} from '../../Controller/authController';

//------------------------------ User Registration ---------------
    router.post('/register', userRegistration);

//------------------------------ User Login  ---------------------
    router.post('/login',userLogin);

// ---------------------------- Verify Link ----------------------
    router.post('/verifyLink',verifyLink)

//--------------------------- EmailRegistration -------------------
    router.post('/googleRegistration',userGoogleRegistration)

//---------------------------Resend Email Registration-------------------
    router.post('/resendVerifyLink',resendVerifyLInk)
    
//---------------------------Resend Email Registration-------------------
    router.post('/googleSignIn',googleSignIn)

    //--------------------------- OTP login ----------------------------
router.post('/otpLogin',otpLogin)
    
export default router;