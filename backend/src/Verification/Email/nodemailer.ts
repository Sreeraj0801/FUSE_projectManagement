import { transporter } from './transporterConfig';

export const sentMail = async(email:string,link:string) =>{
    try {
        await transporter.sendMail({
            from:process.env.USER,
            to : email,
            subject:"FUSE service confirmation mail",
            text:`Click on the below link to confirm ${link}`
        })
        
        return  "Email sent successfully" 
        
    } catch (error) {
        console.log(error)
        throw{error}
    }
}

