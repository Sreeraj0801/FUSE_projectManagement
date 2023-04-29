import express from 'express';
const router = express.Router();
import { addNewTask,fetchTask ,changeStatus} from '../../Controller/taskController';

router.post('/create',addNewTask)

router.get('/:projectId',fetchTask)

router.patch('/updateStatus',changeStatus)


export default router;
