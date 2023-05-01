import NodeMailer from 'nodemailer'

export const sentMail = async(projectName:string,members:[]) =>{
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
            to : members,
            subject:"FUSE service confirmation mail",
            html:`
            <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>FUSE - Selected for the Project</title>
    <style>
      /* Add your custom styles here */
      body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        color: #333;
        padding: 20px;
      }
      h1 {
        font-size: 2em;
        margin-bottom: 0;
        color: #4caf50;
      }
      h2 {
        font-size: 1.5em;
        margin-top: 0;
        color: #333;
      }
      p {
        line-height: 1.5;
        margin-bottom: 20px;
      }
      .button {
        display: inline-block;
        background-color: #4caf50;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <h1>FUSE</h1>
    <h2>Selected for the Project ${projectName}</h2>
    <p>Congratulations! We are pleased to inform you that you have been selected for the project ${projectName}. Your skills and experience make you a valuable addition to our team.</p>
    <p>We look forward to working with you and achieving great results together. If you have any questions or concerns, please do not hesitate to contact us.</p>
    <p>Thank you for your interest  and for being part of our team!</p>
    <p><a href="${process.env.BASE_URL}" class="button">Visit our platform</a></p>
  </body>
</html>

            `
        })
        
        return  "Email sent successfully" 
        
    } catch (error) {
        console.log(error)
        throw{error}
    }
}

