const router = require('express');
const admin = require('firebase-admin');

admin.initializeApp();

// modo desenvolvimento usar .env

const credenciais = {
  "type": process.env.APP_TYPE,
  "project_id": process.env.APP_PROJECT_ID,
  "private_key_id": process.env.APP_PRIVATE_KEY_ID,
  "private_key": process.env.APP_PRIVATE_KEY,
  "client_email": process.env.APP_CLIENT_EMAIL,
  "client_id": process.env.APP_CLIENT_ID,
  "auth_uri": process.env.APP_AUTH_URI,
  "token_uri": process.env.APP_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.APP_AUTH_PROVIDER_CERT,
  "client_x509_cert_url": process.env.APP_CLIENT_CERT
}

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse),
  databaseURL: process.env.APP_DATABASE_URL,
});

const db = admin.database();

const routes = new router()

routes.get('', async (req, res)=> {
  await db.ref('gifted').on("value", snapshot => {
    const data = snapshot.val();
    res.send(data)
  })
})

module.exports = routes;