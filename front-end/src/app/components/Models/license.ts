export class license{
    licenseId:string;
    orgId:string;
    userId:string;
    licenseStatus:boolean;
    constructor(licenseId:string,orgId:string,userId:string,licenseStatus:boolean)
    {
        this.licenseId = licenseId;
        this.orgId = orgId;
        this.userId = userId;
        this.licenseStatus = licenseStatus;
    }
}