import {sign,verify} from 'jsonwebtoken';

export class JWTauth {

   async generateAccessToken(userId:string){
        try {
           return  await  sign({userId },process.env.JWT_ACCESS_TOKEN_SECRET as string ,{expiresIn:'15m'})
        } catch (error) {
            console.log(error);
            
          throw {error}
        }
    }
    
    async generateRefreshToken(userId:string){
        try {
            return await sign({userId} , process.env.JWT_REFRESH_TOKEN_SECRET as string ,{expiresIn:'2d'})
        } catch (error) {
            console.log(error);
            throw {error}
        }
    }
    
    async createVerifyToken (userId:string){
        try {
            return await sign({userId},process.env.VERIFY_MAIL_TOKEN_SECRET as string ,{expiresIn:'2m'})
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async verifyEmailToken(token:string){
        try {
            return await verify(token, process.env.VERIFY_MAIL_TOKEN_SECRET as string)
        } catch (error) {
          throw{error}  
        }
    }

}