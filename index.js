import express from 'express';
import admin from './admin.mjs';

const app = express();

// Route to read data from Firebase Realtime Database
app.get('/users', async (req, res) => {
  try {
    const snapshot = await admin.database().ref('/users').once('value');
    const users = snapshot.val();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
