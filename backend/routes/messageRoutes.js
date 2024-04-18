import express from 'express';  
import { sendMessage } from '../controllers/messageController.js';
const router = express.Router();
import protectRoute from '../middleware/protectRoute.js';

router.post('/send/:id',protectRoute, sendMessage );

export default router;