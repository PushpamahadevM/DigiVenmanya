const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const designSchema = new Schema({
	username1 : {
        type: String,
        required: true
        },

        path: { 
            type: String,
            required: true
        }
   
},{timestamps: true})

const Design = mongoose.model('Design', designSchema);
module.exports = Design;