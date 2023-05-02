"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const projectController_1 = require("../../Controller/projectController");
//-----------Project create ---------------------
router.post("/create", projectController_1.createProjectController);
//--------- Get all projejcts -------------------
router.get("/:workspaceId/:email/:userId", projectController_1.getAllProjectDetails);
//--------- Get all projejcts -------------------
router.get("/details/:projectId", projectController_1.getProjectDetail);
router.get("/members/:projectId", projectController_1.getAllregisterdProjectMembers);
exports.default = router;
