const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const redRoute = require('./routes/redRoute')
const whiteRoute = require('./routes/whiteRoute');
const dessertRoute = require('./routes/dessertRoute');
const portRoute = require('./routes/portRoute');
const roseRoute = require('./routes/roseRoute');
const sparklingRoute = require('./routes/sparklingRoute');
const reviewRoute = require('./routes/reviewRoute');
const allWineRoute = require('./routes/allWineRoute');
const commentRoute =require('./routes/commentRoute');
const contactRoute = require('./routes/contactRoute');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//create inventory/admin routs
// app.use("/guest", (req, res) => {res.send({token: 'test123'})}, guestRoutes);
app.use('/wines/reds', redRoute);
app.use('/wines/whites', whiteRoute);
app.use('/wines/dessert', dessertRoute);
app.use('/wines/port', portRoute);
app.use('/wines/rose', roseRoute);
app.use('/wines/sparkling', sparklingRoute);
app.use('/wines/review', reviewRoute);
app.use('/wines/comments', commentRoute);
app.use('/wines/all', allWineRoute);
app.use('/wines/contact', contactRoute);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).json("Hello");
})
app.listen(PORT, (req, res) => {
  console.log(`Server connected to port: ${PORT}`);
});