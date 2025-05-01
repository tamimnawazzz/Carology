
import Driver from '../models/Driver.js';

export const applyDriver = async (req, res) => {
    const { licenseNumber } = req.body;
    try {
        const driver = new Driver({ userId: req.user.id, licenseNumber });
        await driver.save();
        res.json({ message: 'Driver application submitted' });
    } catch (err) {
        res.status(500).json({ message: 'Error applying driver', error: err.message });
    }
};
