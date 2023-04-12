export interface WorkspaceInterface{
    color         ?: string,
    workspaceName : string,
    masterId      :string

}

export interface InviteMembers{
    workSpaceId : string,
    tags: []
}

export interface VerifyMemberInterface {
    workspace: string,
    email: string,
    choise: string
}