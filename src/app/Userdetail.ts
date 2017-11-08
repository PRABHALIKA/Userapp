export class Userdetail{
    
    id: number;
    name: string;
    username: string;
    email: string;
    address:{street: string, city: string, zipcode: number, geo:{ lat: number,lng: number}};
    phone: number;
    Website: string;
    company:{name: string, catchprase: string, bs: string} ;
    isDone: boolean;
}