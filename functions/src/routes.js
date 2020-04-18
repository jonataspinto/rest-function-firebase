const router = require('express');
const admin = require('firebase-admin');

admin.initializeApp();

// modo desenvolvimento

// admin.initializeApp({
//   credential: admin.credential.cert({
//     "type": "*****",
//     "project_id": "*****",
//     "private_key_id": "*****",
//     "private_key": "*****",
//     "client_email": "*****",
//     "client_id": "*****",
//     "auth_uri": "*****",
//     "token_uri": "*****",
//     "auth_provider_x509_cert_url": "*****",
//     "client_x509_cert_url": "*****"
//   }),
//   databaseURL: "*****",
// });

// modo desenvolvimento


const db = admin.database();

const routes = new router()

routes.get('', async (req, res)=> {
  await db.ref('gifted').on("value", snapshot => {
    const data = snapshot.val();
    res.send(data)
  })
})

module.exports = routes;