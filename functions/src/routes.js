const router = require('express');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.database();

const routes = new router()

routes.get('', async (req, res)=> {
  await db.ref('gifted').on("value", snapshot => {
    const data = snapshot.val();
    res.send(data)
  })
})

module.exports = routes;