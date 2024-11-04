export interface Utakmica {
    id: number;
    datum: Date;
    domacin: string;
    gost: string;
}

export interface Tim{
    id:number;
    naziv:string;
}

export interface Igrac{
    id:number;
    ime:string;
    timId:number;
}