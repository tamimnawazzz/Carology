import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  carId: mongoose.Schema.Types.ObjectId,
  date: Date,
});

export default mongoose.model('Booking', bookingSchema);
