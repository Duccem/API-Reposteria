const mongoose = require('mongoose');
const URI = 'mongodb://localhost/Reposteria';
mongoose.connect(URI,{useNewUrlParser:true})
     .then(db => console.log('db is connect'))
     .catch(err => console.log(rr));
module.exports = mongoose;
