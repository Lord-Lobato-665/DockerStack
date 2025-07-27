const db = require('../config/db.config');
const { App } = require('@slack/bolt');
require('dotenv').config();

const slackApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const SLACK_CHANNEL_ID = process.env.SLACK_CHANNEL_ID;

const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await db.query(
      `INSERT INTO Contacts (name, email, message, recaptcha_passed, accepted_terms)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, message, 1, 1]
    );

    console.log('✅ Contacto guardado en MySQL');

    await slackApp.client.chat.postMessage({
      channel: SLACK_CHANNEL_ID,
      text: `📩 *Nuevo contacto recibido:*\n*Nombre:* ${name}\n*Email:* ${email}\n*Mensaje:* ${message}`,
    });

    res.status(201).json({ message: 'Contacto guardado y enviado a Slack' });
  } catch (err) {
    console.error('❌ Error al guardar contacto o enviar Slack:', err.message);
    res.status(500).json({ error: 'Error al guardar contacto' });
  }
};

const getContacts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Contacts ORDER BY id DESC');
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener contactos' });
  }
};

module.exports = {
  createContact,
  getContacts,
};
