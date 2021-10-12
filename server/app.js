//imports
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

//const
const app = express();
const url = 'mongodb://localhost:27017/account';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./routes/accountRoutes'));
app.use('/api', require('./routes/roomsBd'));

//middleware for vue js
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

//connection BD
mongoose.connect(url, options).then(

    () => {
        console.log('connected to mongoDB on url = '+url);
    },
    err => { err }
);

//port
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('listening on port: '+app.get('puerto'));
});
