
import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    licenseNumber: { type: String, required: true }
});

export default mongoose.model('Driver', driverSchema);
