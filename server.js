const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { text } = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contacto', async (req,res) =>{
    const {nombre, correo, mensaje} = req.body;
    
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    });
    //se define el contenido del correo
    let mailOptions = {
        from:process.env.EMAIL_USER,
        to:process.env.EMAIL_USER,
        subject:`Nuevo mensaje de ${nombre}`,
        text:`Correo del usuario: ${correo}\n\nMensaje:\n${mensaje}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({succes:true});
    }catch(error){
        console.error(error);
        res.status(500).json({succes:false, error:'Error al enviar el correo'});
    }
});

if (process.env.NODE_ENV !=='production'){
    const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    })
}
module.exports = app;