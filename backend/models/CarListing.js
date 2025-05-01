import mongoose from 'mongoose';

const carListingSchema = new mongoose.Schema({
  model: String,
  year: Number,
  listedBy: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model('CarListing', carListingSchema);