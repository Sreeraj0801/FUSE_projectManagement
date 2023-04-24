import express from 'express';
const router = express.Router();
import { addNewTask } from '../../Controller/taskController';

router.post('/create',addNewTask)

export default router;
