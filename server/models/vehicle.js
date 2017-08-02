import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  name: { type: 'String', required: true },
  'owner-info': {
    'first-name': { type: 'String' },
    'last-name': { type: 'String' },
    email: { type: 'String' },
    phone: { type: 'String' },
  },
  'rental-info': {
    company: { type: 'String' },
    'contact-name': { type: 'String' },
    phone: { type: 'String' },
    email: { type: 'String' },
  },
  'start-date': { type: 'Date', default: Date.now, required: true },
  'end-date': { type: 'Date' },
  ezpass: { type: 'Boolean' },
  'date-added': { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Vehicle', vehicleSchema);

