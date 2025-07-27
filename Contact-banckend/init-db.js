const db = require('./config/db.config');

const createContactsTable = `
  CREATE TABLE IF NOT EXISTS Contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    recaptcha_passed BOOLEAN DEFAULT FALSE,
    accepted_terms BOOLEAN DEFAULT FALSE
  );
`;

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;

db.query(createContactsTable, (err) => {
  if (err) {
    console.error('❌ Error al crear tabla Contacts:', err.message);
  } else {
    console.log('✅ Tabla Contacts creada');
  }
});

db.query(createUsersTable, (err) => {
  if (err) {
    console.error('❌ Error al crear tabla users:', err.message);
  } else {
    console.log('✅ Tabla users creada');
  }
});
