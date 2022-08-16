import { dbConnect } from "./dbConnect.js";

function handleError(err, res) {
    console.error(err);
    res.status(500).send(err);
  }
  
  export function getMessage(req, res) {
    const db = dbConnect();
    db.collection("messages")
      .get()
      .then((collection) => {
        const messages = collection.docs.map((doc) => doc.data());
        messages.sort((a,b) => a.entryDate < b.entryDate ? 1: -1)
        res.send(messages);
      })
      .catch((err) => handleError(err, res));
  }
  
  export function createMessage(req, res) {
    const newMessage = req.body;
    newMessage.entryDate = new Date()
    const db = dbConnect();
    db.collection("messages")
      .add(newMessage)
      .then((doc) => {
        res.status(201).send({
          success: true,
          id: doc.id,
        });
      })
      .catch((err) => handleError(err, res));
  }
  
  export function saveUserLogin(req, res) {
    const newUser = req.body;
    const db = dbConnect();
    db.collection('users')
      .add(newUser)
      .then((doc) => {
        res.status(201).send({
          sucess: true,
          id: doc.id,
        });
      })
      .catch((err) => handleError(err, res))
  }