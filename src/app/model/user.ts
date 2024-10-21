export interface IUser
{
    userId : number,
    userName : string,
    userProfileId : number,
    address : string,
    phoneNumber : string
    isActive : boolean
}

export interface ICreateUser
{
    userId : number ,
    userName : string,
    userProfileId : number,
    address : string,
    phoneNumber : string
    isActive : boolean | null
}

export interface IDisplayUser
{
    userId : number ,
    userName : string,
    userProfileId : number,
    address : string,
    phoneNumber : string
    isActive : boolean
}