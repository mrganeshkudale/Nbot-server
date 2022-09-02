export class User{
    
    id: string;
    name: string;
    
    username: string;
    password: string;
    constructor(id:string,name: string,username: string,password: string)
    {
       this.id=id;
       this.username=username;
       this.name = name;
       this.password=password;
       
    }
}