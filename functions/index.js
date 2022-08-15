import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { getMessage, createMessage, saveUserLogin } from "./functions.js";

const app = express()
app.use(cors())
app.use(express.json())

app.listen(4000, console.log('listening on port 4000'))

app.get("/messages", getMessage);
app.post("/add-message", createMessage);
app.post('/new-user', saveUserLogin)

export const api = functions.https.onRequest(app)