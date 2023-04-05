export interface userInterface {
    name     : string;
    email    : string;
    mobile   : number;
    pword    : string;
}

export interface loginInterface {
    credential : string;
    pword      : string;
}

export interface userIdInterface {
    userId : string;
}

export interface veriyCredentialsInterface{
    userId : string;
    verifyToken:string;
} 

export interface googleUserInterface{
    displayName:string,
    email:string
}