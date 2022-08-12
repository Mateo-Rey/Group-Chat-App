import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { getMessage, createMessage } from "./functions.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get("/messages", getMessage);
app.post("/add-message", createMessage);