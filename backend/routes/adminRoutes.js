import express from 'express';
import { getAdminDashboard } from '../controllers/adminController.js';
const router = express.Router();

router.get('/dashboard', getAdminDashboard);

export default router;