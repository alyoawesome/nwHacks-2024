import express from 'express';


const app = express();


app.get('/hello', async (req, res) => {
    res.send("Hello"); 
  });


const port =  3001;

app.listen(port, () => {
  console.log('Server is listening on port' + " " + port);
});