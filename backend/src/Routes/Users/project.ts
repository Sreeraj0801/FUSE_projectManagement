import express from "express";
const router = express();

import {
  createProjectController,
  getAllProjectDetails,
  getProjectDetail,
  getAllregisterdProjectMembers,
} from "../../Controller/projectController";

//-----------Project create ---------------------
router.post("/create", createProjectController);

//--------- Get all projejcts -------------------
router.get("/:workspaceId/", getAllProjectDetails);

//--------- Get all projejcts -------------------
router.get("/details/:projectId", getProjectDetail);

router.get("/members/:projectId", getAllregisterdProjectMembers);

export default router;
