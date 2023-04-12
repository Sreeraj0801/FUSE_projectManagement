import express from "express";
const router = express.Router();

import {
  createWorkspaceController,
  getAllWorkspaceController,
  inviteMembersController,
  verifyMemberController,
  getAllWorkspaceMembers
} from "../../Controller/workspaceController";

//------------------------------ Crerate Workspace -------------------
router.post("/create", createWorkspaceController);

//--------------------------------Get all workspace ------------------
router.get("/:userId", getAllWorkspaceController);

//------------------------------Invite to workspace ------------------
router.post("/invite", inviteMembersController);

// ---------------------------- Verify Members of workspace ----------
router.get(
  "/verifyUserinvitationEmail/:workspace/:email/:choise",
  verifyMemberController
);

//-------------------------- get all workspace members ---------------
router.get("/members/:workspaceId", getAllWorkspaceMembers);
export default router;
