const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema = new Schema({
	username : {
	type: String,
	required: true
	},
    pwd: {
    type: String,
    required: true
	},
    address: {
    type: String,
    required: true
	},
    email : {
    type: String,
    required: true
	},
    mobileno : {
    type: Number,
    required: true
	} 
},{timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;


