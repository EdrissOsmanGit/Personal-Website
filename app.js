const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'indi.html'));
});

app.get('/gallary/', (req, res) => {
    res.sendFile(path.join(__dirname, 'temp/gallary.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});