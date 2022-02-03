export class Lead {
  constructor(
    public lead_id: number,
    public updated_at: Date,
    public created_at: Date,
    public person_id: any, 

    public first_name: string, 
    public last_name:string, 
    public gender: any,
    public DOB: Date,
    public email: string,
    public contact_no: number,

    public address_id: any,
    public state: any,
    public add_line_1:any, 
    public add_line_2: any,
    public city: any, 
    public zipcode: any, 
    public country: any



    // public lead_id: any , public designation: string, public person_id:any, public created_at: any,
    // public address_id: any , public state: any, public add_line_1:any, public add_line_2: any,
    // public city: any, public zipcode: any, public country: any,
    // public first_name: string, public last_name:string, public gender: any,
    //  public DOB: Date 
  ) {}
}
