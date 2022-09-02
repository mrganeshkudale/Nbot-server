export class organization{
    orgId:string;
    orgName:string;
    orgStatus:boolean;
    creationTime:any;
    constructor(orgId:string,orgName:string,orgStatus:boolean,creationTime:any)
    {
        this.orgId = orgId;
        this.orgName = orgName;
        this.orgStatus = orgStatus;
    }
}