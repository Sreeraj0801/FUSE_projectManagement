import {projectDetailsInterface} from '../Types/project.types'
import {ProjectServices} from '../Repostitory/ProjectService';
import {sentMail} from '../Verification/Email/projectInvitation'


const projectServ = new ProjectServices() ; 
const {createProjectService,findProjectByNameandWorkspaceId} = projectServ ;

export class ProjectClass {
async createProjectHelper (details:projectDetailsInterface){
    try {
        const existProject = await  findProjectByNameandWorkspaceId({projectName:details.projectName,workspaceName:details.workspaceName});                
        if(existProject?.length)    throw {msg:"Project name already exist"};
        if(details.members.length) await sentMail(details.projectName , details.members);
        return await createProjectService(details) ; 
    } catch (error) {
        throw { error } 
    }
} 
    
}