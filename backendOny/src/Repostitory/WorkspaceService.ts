import { WorkspaceInterface,VerifyMemberInterface} from "../Types/workspace.types";
import { userWorkspaceSchema } from "../Model/workspaceSchema";

export class workspaceService {
  async createWorspace(detaiils: WorkspaceInterface) {
    try {
      const { workspaceName, masterId, color } = detaiils;
      await userWorkspaceSchema.create({ workspaceName, masterId, color });
      return "Workspace created Succesfully";
    } catch (error: any) {
      throw { message: "Database Error" };
    }
  }

  async findWorkspaceByMasterIdandWorkspaceName(
    masterId: string,
    workspaceName: string
  ) {
    try {
      return await userWorkspaceSchema.find({ masterId, workspaceName });
    } catch (error) {
      console.log(error);
      throw { message: "Database Error" };
    }
  }

  async findAllWorkspace(userId: string) {
    try {
      const response = await userWorkspaceSchema.find({ masterId: userId });
       return response 
    } catch (error:any) {
      throw { message: "Database Error" };
    }
  }

  async insertToWorkspace(details:{workSpaceId:string,updatedMembers:any}) {
    try {
      const workspace = await userWorkspaceSchema.findById({_id:details.workSpaceId});
      const members = workspace?.members ; 
      const membersEmail = members?.map((member)=>{
        return member?.email
      })
      const updatedDetails = details.updatedMembers.filter((obj:any)=>{        
        if(!membersEmail ?.includes(obj.email)) return obj ; 
      })      
       await userWorkspaceSchema.updateOne(
        {_id:details.workSpaceId},
        {$push:{members:{$each:[...updatedDetails]}}}
        )
        return updatedDetails
    } catch (error) {
      console.log(error);
      
    }
  }
  async updateMemberStatus({workspace,choise,email}:VerifyMemberInterface) {
    try {     
      await userWorkspaceSchema.updateOne({ _id: workspace, "members.email": email },{ $set: { "members.$.status": choise } });  
      return       
    } catch (error) {    
      console.error("Error message when member status is updating",error);
    }
  }
  async findWorkspaceById(_id:string){
    try {
      return  await userWorkspaceSchema.findById({_id});
    } catch (error) {
      console.log("its the error from finding workspace by Id",error);
      throw {msg:"Workspace not found"}
    }
  }
}
