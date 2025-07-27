const db = require('../config/db.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'mi_clave_secreta';

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      `INSERT INTO users (username, password) VALUES (?, ?)`,
      [username, hashed]
    );

    res.status(201).json({ message: 'Usuario registrado' });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'Usuario ya existe' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error en el registro' });
    }
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [rows] = await db.query(`SELECT * FROM users WHERE username = ?`, [username]);

    if (rows.length === 0) return res.status(401).json({ error: 'Credenciales inválidas' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en el login' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const [rows] = await db.query(`SELECT id, username FROM users`);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};
