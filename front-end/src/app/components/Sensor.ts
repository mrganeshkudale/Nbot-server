

export class Sensor
{
    id:string;
    userId:string;
    sensorName:string;
    orgId:string;
    status:Boolean;
    threshold:string;
    
    licenseId:string;
    constructor(id:string,userId:string,sensorName:string,orgId:string,status:Boolean,threshold:string,licenseId:string)
    {
        this.id=id;
        this.userId=userId;
        this.sensorName=sensorName;
        this.orgId=orgId;
        this.status=status;
        this.threshold=threshold;
        
        this.licenseId=licenseId;
    }
}