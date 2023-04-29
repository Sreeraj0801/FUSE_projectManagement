import { projectDetailsInterface } from "../Types/project.types";
import { ProjectServices } from "../Repostitory/ProjectService";
import { UserService } from "../Repostitory/UserService";
import { sentMail } from "../Verification/Email/projectInvitation";

const projectServ = new ProjectServices();
const {
  createProjectService,
  findProjectByNameandWorkspaceId,
  getAllProjectDetails,
  getProjectDetails,
  getMembersDetails,
} = projectServ;
const userSer = new UserService();
const { findUserById, findUserByMobileOrEmail } = userSer;

export class ProjectClass {
  async createProjectHelper(details: projectDetailsInterface) {
    try {
      const existProject = await findProjectByNameandWorkspaceId({
        projectName: details.projectName,
        workspaceName: details.workspaceName,
      });
      if (existProject?.length) throw { msg: "Project name already exist" };
      if (details.members.length)
        await sentMail(details.projectName, details.members);
      return await createProjectService(details);
    } catch (error) {
      throw { error };
    }
  }
  async getAllProjectDetailsHelper(workspaceId: string,email:string,userId:string) {
    try {
      return await getAllProjectDetails(workspaceId,email,userId);
    } catch (error) {
      throw { error };
    }
  }

  async getProjectDetailsHelper(projectId: string) {
    try {
      const response = await getProjectDetails(projectId);
      const userId = await findUserById(response.workspaceDetails.masterId);
      response.workspaceDetails["masterName"] = userId?.name;
      response.workspaceDetails["masterEmail"] = userId?.email;
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async getAllMembersHelper(projectId: string) {
    try {
      const response = await getMembersDetails(projectId);
      const registeredUsers: any[] = await Promise.all(
        response?.members.map((member:any) => findUserByMobileOrEmail(member))
      );
      const filteredUsers = registeredUsers.filter(user => user);
      const userDetails = filteredUsers.map(user => ({
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      }));
      return {members:response?.members,registerdMembers:userDetails};
    } catch (error) {
      throw { error };
    }
  }
  
}
