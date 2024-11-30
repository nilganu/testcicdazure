import express from 'express';

const app = express();
const PORT = 8080;

// Middleware for parsing JSON
app.use(express.json());

// Static endpoint 1: Home
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js ES6 App!');
});

// Static endpoint 2: About
app.get('/about', (req, res) => {
    res.json({
        message: 'This is a simple Node.js application.',
        developer: 'Rachana Ganatra',
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
