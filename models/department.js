import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const department = new Schema({
	name: {
		type: String,
	  required: true,
	
	},
	code: {
		type: String,
	  required: true,
	
	},
},{timestamps: true});

export default mongoose.model('department',department);