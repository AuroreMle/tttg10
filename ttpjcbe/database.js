const mysql = require('mysql2');
require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,       // Assurez-vous que vous avez défini DB_PORT dans votre .env
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MySQL:', err);
    return;
  }
  console.log('Connexion réussie à MySQL');
});

module.exports = connection;

