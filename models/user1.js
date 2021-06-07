const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const user1Schema = new Schema({
	email1 : {
        type: String,
        required: true
        },

    pwd1 : {
    type: String,
    required: true
	}
   
},{timestamps: true})

const User1 = mongoose.model('User1', user1Schema);
module.exports = User1;