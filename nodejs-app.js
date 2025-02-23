const express = require('express');
const app = express();
const PORT =  3000;

// Define the API route
app.get('/', (req, res) => {
    res.json({'message':'Hello Eyego'});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


