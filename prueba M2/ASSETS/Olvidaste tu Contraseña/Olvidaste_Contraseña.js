const nodemailer = require('nodemailer');

// Configurar el transporte
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tu_correo@gmail.com',
        pass: 'tu_contraseña'
    }
});

// Configurar el correo electrónico
const mailOptions = {
    from: 'adm.97mati@gmail.com@gmail.com',
    to: 'correo_destino@example.com',
    subject: 'Recuperación de contraseña',
    text: 'Hola, tu codigo de recuperacion es:.'
};

// Enviar el correo electrónico
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Correo electrónico enviado: ' + info.response);
    }
});

