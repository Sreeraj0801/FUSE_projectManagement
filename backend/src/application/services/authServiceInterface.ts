import { AuthServiceReturn } from "../../frameworks/services/authServices";

export const authServiceInterface = (service:AuthServiceReturn) => {
    const encryptedPassword = (pword:string) => service.encryptedPassword(pword);
return {
    encryptedPassword
}

}

export type AuthServiceInterface = typeof authServiceInterface