import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
  'first-name': { type: 'String', required: true },
  'last-name': { type: 'String', required: true },
  'passenger-type': { type: 'String' },
  'phone': { type: 'String', required: true },
  'email': { type: 'String' },
  'gender': { type: 'String', default: 'male', required: true },
  'children': { type: 'Number' },
  'pickup-airport-name': { type: 'String' },
  'pickup-airport-code': { type: 'String' },
  'dropoff-airport-name': { type: 'String' },
  'dropoff-airport-code': { type: 'String' },
  'arr-date': { type: 'Date', default: Date.now },
  'arr-time': { type: 'String', default: Date.now },
  'dep-date': { type: 'Date', default: Date.now },
  'dep-time': { type: 'String', default: Date.now },
  'passenger-status': { type: 'String' },
  'pickup-saarthi': { type: 'String' },
  'dropoff-saarthi': { type: 'String' },
  'pickup-vehicle': { type: 'String' },
  'dropoff-vehicle': { type: 'String' },
  'accommodation': { type: 'String' },
});

export default mongoose.model('Passenger', passengerSchema);

