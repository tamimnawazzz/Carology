import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  postedBy: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model('Job', jobSchema);