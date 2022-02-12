const {Router} = require('express');
const nodemailer = require('nodemailer');

const routes = Router()

routes.post('/send-email', async(req, res) => {
    
    const {email, mensaje, nombre} = req.body;

    let contentHTML = `
        <h2>Informacion de Cliente</h2>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Email: ${email}</li>
        </ul>
        <p>${mensaje}</p>
    `;    

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAILDESTINO, // generated ethereal user
          pass: process.env.PASSWORDGMAIL, // generated ethereal password
        },
    });

    await transporter.sendMail(({
        from: `"Informacion cliente Darsena" <${email}>`, // sender address
        to: process.env.EMAILDESTINO, // list of receivers
        subject: "Información", // Subject line
        html: contentHTML, // html body
      }));

    res.redirect('/')
})

module.exports = routes