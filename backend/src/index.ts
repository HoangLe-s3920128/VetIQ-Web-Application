import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000; // Or your desired backend port

app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// A basic route for testing
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});