require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const password = process.env.EMAIL_PASS;
const emailUser = process.env.EMAIL_USER;

if (!password || !emailUser) {
    console.error("⚠️ EMAIL_PASS ou EMAIL_USER non défini !");
    process.exit(1);
}

const app = express();
app.use(express.json());
app.use(cors()); // Autorise les requêtes du frontend

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailUser,
            pass: password,
        },
    });

    const mailOptions = {
        from: emailUser,             
        to: emailUser,               
        subject: `Message de ${name}`,  
        text: message,
        replyTo: email,              
    };


    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message envoyé !' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l’envoi.' });
    }
});

app.listen(5000, () => console.log('Serveur en écoute sur le port 5000'));
