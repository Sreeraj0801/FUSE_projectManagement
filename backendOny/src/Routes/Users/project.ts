import express from "express";
const router = express();

import {createProjectController} from '../../Controller/projectController'


//-----------Project create ---------------------
router.post('/create',createProjectController)


export  default router;