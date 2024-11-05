// server/config/dbConfig.js
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});
