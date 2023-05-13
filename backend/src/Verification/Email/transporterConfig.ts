import NodeMailer from 'nodemailer'


export const transporter =  NodeMailer.createTransport({
    host    :  process.env.HOST,
    service :  process.env.SERVICE,
    port    :  Number(process.env.EMAIL_PORT),
    secure  :  Boolean(process.env.SECURE),
    auth    :{
                user: process.env.USER,
                pass: process.env.PASS
            }
})
