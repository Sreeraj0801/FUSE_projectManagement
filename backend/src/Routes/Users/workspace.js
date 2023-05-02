"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const workspaceController_1 = require("../../Controller/workspaceController");
//------------------------------ Crerate Workspace -------------------
router.post("/create", workspaceController_1.createWorkspaceController);
//--------------------------------Get all workspace ------------------
router.get("/:userId", workspaceController_1.getAllWorkspaceController);
//------------------------------Invite to workspace ------------------
router.post("/invite", workspaceController_1.inviteMembersController);
// ---------------------------- Verify Members of workspace ----------
router.get("/verifyUserinvitationEmail/:workspace/:email/:choise", workspaceController_1.verifyMemberController);
//-------------------------- get all workspace members ---------------
router.get("/members/:workspaceId", workspaceController_1.getAllWorkspaceMembers);
//-------------------------- get  workspace members -------------------
router.get('/details/:workspaceId', workspaceController_1.getWorksapceDetails);
router.get('/myWorkspaces/:userId/:email', workspaceController_1.getMyWorkspaces);
exports.default = router;
