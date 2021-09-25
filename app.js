const express = require('express')
const { port } = require('./config/config');

const app = express()

app.use(express.json({ extended: true }))

app.use('/api', routes);



app.listen(port, () => console.log(`App has been started on port ${port}...`))

start()
