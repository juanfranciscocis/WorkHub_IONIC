export interface Business {
  companyName: string;
  price: number;
  image: string;
  description: string;
  contact: number;
}

export interface Products {
  name: string;
  price: number;
  image: string;
}


export interface User {
  companyName: string;
  email: string;
  password: string;
  isCompany: boolean;
  image: string;
}


export interface Login{
  companyName:string;
  password:string;
}



