export class user{
    id:string;
    name:string;
    username:string;
    password:string;
    status:string;
    creationTime:any;
    usrRole:string;
    orgId:string;
    constructor(id:string,password:string,name:string,status:string,username:string,usrRole:string,orgId:string)
    {
        this.id = id;
        this.username = username;
        this.name = name;
        this.status = status;
        this.usrRole = usrRole;
        this.password = password;
        this.orgId = orgId;
    }
}
