const mongoose = require('mongoose');
const {Schema} = mongoose;

const MenuSchema = new Schema({
     name: {type:String, required:true},
     photo: {type:String, required:true},
     price: {type:Number,required:true}
});

module.exports = mongoose.model('Menu',MenuSchema);
