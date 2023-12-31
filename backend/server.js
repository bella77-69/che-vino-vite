const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    });