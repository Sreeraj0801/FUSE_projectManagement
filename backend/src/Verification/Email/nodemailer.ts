import nodemailer,{Transporter} from 'nodemailer'
import {MailOptions} from '../../Types/NodeMailerMail.type'


import NodeMailer from 'nodemailer'

export const sentMail = async(email:string,link:string) =>{
    try {
        const transporter = NodeMailer.createTransport({
            host    :  process.env.HOST,
            service :  process.env.SERVICE,
            port    :  Number(process.env.EMAIL_PORT),
            secure  :  Boolean(process.env.SECURE),
            auth    :{
                        user: process.env.USER,
                        pass: process.env.PASS
                    }
        })

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

