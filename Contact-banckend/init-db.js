const mysql = require('mysql2/promise');

async function createTables() {
  try {
    const db = await mysql.createConnection({
      host: 'localhost',   // o 'db' si estás dentro del contenedor
      port: 3309,
      user: 'root',
      password: 'admin',
      database: 'midb'
    });

    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `;

    const createContactsTable = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        recaptcha_passed BOOLEAN DEFAULT FALSE,
        accepted_terms BOOLEAN DEFAULT FALSE
      );
    `;

    await db.execute(createUsersTable);
    console.log('✅ Tabla "users" creada o ya existía.');

    await db.execute(createContactsTable);
    console.log('✅ Tabla "contacts" creada o ya existía.');

    await db.end();
  } catch (err) {
    console.error('❌ Error al crear tablas:', err.message);
  }
}

createTables();
