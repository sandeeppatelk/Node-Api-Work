import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
  'first-name': { type: 'String', required: true },
  'last-name': { type: 'String', required: true },
  'passenger-type': { type: 'String', required: true },
  'phone': { type: 'String', required: true },
  'email': { type: 'String' },
  'gender': { type: 'string', required: true },
  'children': { type: 'number' },
  'pickup-airport-name': { type: 'string' },
  'pickup-airport-code': { type: 'string' },
  'dropoff-airport-name': { type: 'string' },
  'dropoff-airport-code': { type: 'string' },
  'arr-date': { type: 'Date', default: Date.now, required: true },
  'arr-time': { type: 'string', required: true },
  'dep-date': { type: 'Date', default: Date.now, required: true },
  'dep-time': { type: 'string', required: true },
  'passenger-status': { type: 'string', required: true },
  'pickup-saarthi': { type: 'string' },
  'dropoff-saarthi': { type: 'string' },
  'pickup-vehicle': { type: 'string' },
  'dropoff-vehicle': { type: 'string' },
  'accommodation': { type: 'string' },
});

export default mongoose.model('Passenger', passengerSchema);

