import express,{Request,Response} from "express";
const router = express.Router();


import { fetchProjectChat ,addMessage ,getAllMessages } from "../../Controller/chatController";
//------------------get chat---------------------------
router.get('/:projectId', fetchProjectChat);

//------------------Add chat message---------------------------
router.post('/addMessage',addMessage)

router.get('/messages/:chatId',getAllMessages)

export default router ;