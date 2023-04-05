import bcrypt from 'bcrypt';

export const authService = () => {
    const encryptedPassword = async(password:string) => {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt);
        return password;
    }

    return {
        encryptedPassword
    }
}


export type AuthService = typeof authService;

export type AuthServiceReturn = ReturnType <AuthService>;
