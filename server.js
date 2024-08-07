
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors');
const app = jsonServer.create()
const router = jsonServer.router('public/db.json')
const express= require('express');
const server = express();
// /!\ Bind the router db to the app
app.db = router.db

server.get('/profile', auth, (req, res, next) => {
    const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;
    if (token) {
      try {
        const data = jwt.verify(token, JWT_SECRET_KEY)
  
        const { db } = req.app;
        let user = db.get('users').find({ email: data.email }).value();
        res.json([user])
      }
      catch (error) {
        res.json({ error: error })
      }
  
    } else {
      res.json({ error: { name: "User not authorized" } })
    }
  });


// You must apply the auth middleware before the router
app.use(cors())
app.use(auth)
app.use(router)
app.listen(3000)