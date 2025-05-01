import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  documentUrl: String,
});

export default mongoose.model('Document', documentSchema);
