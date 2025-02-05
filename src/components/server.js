const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors()); // Autorise les requêtes du frontend

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Configurer le transporteur SMTP (ex: Gmail, Mailtrap, etc.)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rachabar2003@gmail.com',
            pass: 'mtlk wgpx kyyk fedu',
        },
    });


    const mailOptions = {
        from: `"${name}" <${email}>`, // Utiliser le nom et l'email de l'expéditeur
        to: 'rachabar2003@gmail.com', // Ton email où le message est envoyé
        subject: `Portfolio Message`,
        text: message,
        replyTo: email, // Permet au destinataire de répondre à l'email de l'expéditeur
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
