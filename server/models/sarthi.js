import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  'first-name': { type: 'String', required: true },
  'last-name': { type: 'String', required: true },
  'email': { type: 'String' },
  'phone': { type: 'String' },
  'start-date': { type: 'Date', default: Date.now, required: true },
  'end-date': { type: 'Date', default: Date.now },
  'date-added': { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('Sarthi', vehicleSchema);

