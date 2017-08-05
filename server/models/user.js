import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  'first-name': { type: 'String', required: true },
  'last-name': { type: 'String', required: true },
  'gender' : { type: 'String', default:"Male", required:true },
  'email': { type: 'String' },
  'phone': { type: 'String', require:true},
  'user-name': { type: 'String', required: true },
  'password': { type: 'String', required: true },
  'access-type': { type: 'String', default: "Admin", required: true },
  'verified': {type: 'Boolean', default: false, required: true},
  'date-added': { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('User', userSchema);
