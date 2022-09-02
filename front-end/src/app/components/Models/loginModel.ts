export class loginModel{
    userId:string;
    usrRoleId:string;
    orgId:string;
    constructor( userId:string, usrRoleId:string, orgId:string)
    {
        this.userId = userId;
        this.usrRoleId = usrRoleId;
        this.orgId = orgId;
    }
}