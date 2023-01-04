require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const path = require("path");
const cors = require("cors");
const url = process.env.DATABASE_URL;
const PORT = process.env.PORT || 8000
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
app.use(express.json());
app.use(cors());

app.use(require(path.join(__dirname, "routes/user.js")));

// app.use(express.static('client/build'));
if (process.env.NODE_ENV === "production") {
    // app.use(express.static("client/build"));
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}


//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})