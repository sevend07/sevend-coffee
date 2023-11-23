require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
const router = require("./router/appRouter");

const port = process.env['PORT']

app.use(express.json())
app.use(cors())

// --- Routers ---

app.use('/', router)

// --- Start Server ---

app.listen(port, () => {
  console.log(`Server running on port: ${port} `)
})