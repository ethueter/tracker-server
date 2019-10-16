const express = require('express');
const mongoose = require('mongoose')

const app = express();

const mongoURI = 'mongodb+srv://tyleradmin:adminpassword@cluster0-oeg0z.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
})

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
})

app.get('/', (req, res) => {
    res.send('Hi There!')
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});