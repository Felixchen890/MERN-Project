const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url = "mongodb+srv://felixchen511:Zhycpy120127!@cluster0.sokkcq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

app.use(express.json());

try {
    con.on('open', () => {
        console.log('Connected to the database');
    })
} catch (error) {
    console.log("Error: " + error);
}

const port = 9100;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

const productrouter = require("./routes/products");
app.use('/products', productrouter);

