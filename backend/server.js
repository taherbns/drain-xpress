const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Configuration de Nodemailer avec Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // = info.drainxpress@gmail.com
    pass: process.env.EMAIL_PASS, // Mot de passe d'application
  },
});

// Point d’entrée pour recevoir l'email
app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  try {
    const mailOptions = {
      from: `"DrainXpress Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: `
Nom: ${firstName} ${lastName}
Email: ${email}
Sujet(s): ${Array.isArray(subject) ? subject.join(", ") : subject}
Message: ${message}
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur envoi email :", error);
    res.status(500).json({ error: "Échec de l'envoi de l'e-mail." });
  }
});

app.post("/subscribe-newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email requis." });
  }

  try {
    const mailOptions = {
      from: `"DrainXpress Newsletter" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nouvelle inscription à la newsletter",
      text: `Nouvel abonné : ${email}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Inscription enregistrée avec succès." });
  } catch (error) {
    console.error("Erreur newsletter :", error);
    res.status(500).json({ error: "Échec de l’enregistrement de l’email." });
  }
});


app.listen(PORT, () => {
  console.log(`Serveur backend en cours sur http://localhost:${PORT}`);
});
