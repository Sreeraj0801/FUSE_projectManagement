import {
  WorkspaceInterface,
  InviteMembers,
  VerifyMemberInterface,
} from "../Types/workspace.types";

import { workspaceService } from "../Repostitory/WorkspaceService";
import { UserService } from "../Repostitory/UserService";
import { sentMail } from "../Verification/Email/userWorkspaceInvitation";
import cryptoEncryption from "../Encryption/cryptoEncryption";

const workspace = new workspaceService();
const {
  createWorspace,
  findWorkspaceByMasterIdandWorkspaceName,
  findAllWorkspace,
  insertToWorkspace,
  updateMemberStatus,
  findWorkspaceById,
  findMyWorksapces
} = workspace;

const userService = new UserService();

export class workspaceClass {
  async createWorkspaceHelper(details: WorkspaceInterface) {
    try {
      const workspace = await findWorkspaceByMasterIdandWorkspaceName(
        details.masterId,
        details.workspaceName
      );
      if (workspace?.length) throw "Workspace name already exist";
      return await createWorspace(details);
    } catch (error) {
      throw { error };
    }
  }

  async getAllWorkspaceHelper(userId: string) {
    try {
      const userDetails = await userService.findUserById(userId);
      if (!userDetails) {
        throw "user not found";
      }
      return await findAllWorkspace(userId);
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
  async inviteMembersHelper(details: InviteMembers) {
    try {
      
      const updatedMembers = details.tags.map((email) => {
        return { email, status: "pending" };
      });
      const response = await insertToWorkspace({
        workSpaceId: details.workSpaceId,
        updatedMembers,
      });      
      await sentMail(response);
      return "Invitation send succesfully";
    } catch (error) {
      console.log(error);
      throw { message: "something went wrong ,Try again " };
    }
  }

  async verityMemberHelper({
    workspace,
    email,
    choise,
  }: VerifyMemberInterface) {
    try {
      await updateMemberStatus({ workspace, email, choise });
      const user = await userService.findUserByMobileOrEmail(email);
      if (user === null) {
        throw { message: "User not registered" };
      }
      return {
        email: user.email,
        _id: user._id,
        name: user.name,
      };
    } catch (error) {
      throw { error };
    }
  }

  async getAllWorkspaceMembersHelper(workspaceId: string) {
    try {
     const response =  await findWorkspaceById(workspaceId);
     return response?.members ; 
    } catch (error) {
      throw {error}
    }
  }
  
  async getWorkspaceDetailHelper(workspaceId:string) {
    try {
      return  await findWorkspaceById(workspaceId)
    } catch (error) {
      throw {error}
    }
  }
  async getMyWorkspacesHelper(userId:string,email:string){
    try {
      return await findMyWorksapces(userId,email)
    } catch (error) {
      throw {error}
    }
  }
}
