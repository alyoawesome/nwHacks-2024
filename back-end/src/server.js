import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();

// app.use(express.json());

const url = 'mongodb+srv://water:water@cluster0.brrnrse.mongodb.net/'
const client = new MongoClient(url);

app.get('/hello', async (req, res) => {
    await client.connect();
    const db = client.db('water');
    const user = await db.collection('users').findOne({ id: "12345" });
    const userDays = user.daysAndWater;
    res.json(userDays);
  });


const port =  3001;

app.listen(port, () => {
  console.log('Server is listening on port' + " " + port);
});