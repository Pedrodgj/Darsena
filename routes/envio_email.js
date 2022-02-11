const {Router} = require('express');
const nodemailer = require('nodemailer');

const routes = Router()

routes.post('/send-email', async(req, res) => {
    
    const {email, mensaje, nombre} = req.body;

    let contentHTML = `
        <h1>Informacion de Cliente</h1>
        <ul>
            <li><h2>Nombre: ${nombre}.</h2></li>
            <li><h2>Email: ${email}</h2></li>
        </ul>
        <h2>${mensaje}</h2>
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

    let info = await transporter.sendMail(({
        from: `"Informacion cliente Darsena" <${email}>`, // sender address
        to: process.env.EMAILDESTINO, // list of receivers
        subject: "Información", // Subject line
        html: contentHTML, // html body
      }));

    res.json({
        msg: 'Recibido de',
        respuesta: info.envelope.from
    })
     

})

module.exports = routes