// app.js (Node.js with Express)
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Premium Coffee', price: 120000 },
        { id: 2, name: 'Espresso', price: 100000 },
        // other products
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});