import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();
 app.use(express.json());

const url = 'mongodb+srv://water:water@cluster0.brrnrse.mongodb.net/'
const client = new MongoClient(url);

app.get('/hello', async (req, res) => {
    await client.connect();
    const db = client.db('water');
    const user = await db.collection('users').findOne({ id: "12345" });
    const userDays = user.daysAndWater;
    res.json(userDays);
  });

  app.post('/increment-water', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('water');
        const dateKey = req.body.date;
        const incrementAmount = 1; 


        const updateResult = await db.collection('users').updateOne(
            { id: "12345" },
            { $inc: { [`daysAndWater.${dateKey}`]: incrementAmount } }
        );

        if (updateResult.modifiedCount === 1) {
            res.json({ message: "Water count incremented successfully." });
        } else {
            res.status(404).send("User not found.");
        }

    } catch (error) {
        console.error('Error incrementing water:', error);
        res.status(500).send("An error occurred.");
    } 

});






const port =  3001;

app.listen(port, () => {
  console.log('Server is listening on port' + " " + port);
});