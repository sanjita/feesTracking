export interface LoginRequest {

userName:string;
password: any;
}

export interface LoginResponse{

    userName:string;
    token:string;
    role?:string;
    exparesIn?:number;
}