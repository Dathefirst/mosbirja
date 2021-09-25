const express = require('express')

const routes = require('./routers/getCurency.router')


const app = express()

app.use(express.json({ extended: true }))

app.use('/api', routes);

const PORT = process.env.PORT || 4000;

async function start() {
    try {
     
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
      console.log('Server Error', e.message)

    }
  }

start()