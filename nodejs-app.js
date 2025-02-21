const express = require('express');
const app = express();
const PORT =  3000;

// Define the API route
app.get('/api/hello', (req, res) => {
    res.send('Hello Eyego');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


