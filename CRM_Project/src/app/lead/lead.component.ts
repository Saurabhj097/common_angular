import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { LeadService } from './lead.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css'],
})
export class LeadComponent implements OnInit {
  constructor(private httpClient: HttpClient, private ls: LeadService, private fb: FormBuilder) {}

  leads: any;
  data: any;
  leadData: any;
  lead_id: any;
  leadOne:any;
  errors:any;
  status:any; 
  display = "none";
  displayAdd = "none";
  displayPerson = "none";
  displayLead = "none";
  displayEdit = "none";
  isValidationError: any;
  validationError: any;
  choices: any = ['Id', 'Lead', 'City'];
  cname:any;
  cvalue:any;

  event:any;

  addForm:FormGroup;
  editForm: FormGroup;

  ngOnInit(): void {
    
    this.getallLeads();

    // this.getPage(1);
    console.log(this.leads);

    this.addForm = new FormGroup({
      'add_line_1': new FormControl(null),
      'add_line_2': new FormControl(null),
      'city': new FormControl(null),
      'zipcode': new FormControl(null),
      'state': new FormControl(null),
      'country': new FormControl(null),
      'first_name':new FormControl(null),
      'last_name': new FormControl(null),
      'gender': new FormControl(null),
      'date_of_birth': new FormControl(null),
      'email': new FormControl(null),
      'contact_no': new FormControl(null),
      'updated_at': new FormControl(null)
  
    })

    this.editForm = new FormGroup({
      'lead_id': new FormControl(),
      'add_line_1': new FormControl(),
      'add_line_2': new FormControl(),
      'city': new FormControl(),
      'zipcode': new FormControl(),
      'state': new FormControl(),
      'country': new FormControl(),
      'first_name':new FormControl(),
      'last_name': new FormControl(),
      'gender': new FormControl(),
      'date_of_birth': new FormControl(),
      'email': new FormControl(),
      'contact_no': new FormControl()

    })

  }

  selectForm = this.fb.group({
    choiceName: ['', [Validators.required]],
    choiceValue: ['', [Validators.required]],
  })

  getPage(i:any){
    // console.log(this.ls.getPageLeads(+i));
    this.data = this.ls.getPageLeads(+i).subscribe(
      result => {this.leads = result;}
    );
    console.log(this.data);
  }

  getallLeads() {
    this.ls.getLeads().subscribe(result =>
      {
        this.leads = result;
        console.log(result);
      }
    );
    console.log(this.leads);
  }

  getChoice() {

    this.cname = this.selectForm.value['choiceName'];
    this.cvalue = this.selectForm.value['choiceValue'];
    //console.log(this.cname);
    console.log(this.cvalue);
    if (this.cname == "Lead") {
      this.ls.onLeadSearch('first_name', this.cvalue).subscribe(
        result => {
          console.log(result);
          this.leads = result;
        },
        error => {
          this.errors = error
        });

    }
    else if (this.cname == "city") {

      this.ls.onLeadSearch('city', this.cvalue).subscribe(
        result => {
          console.log(result);
          this.leads = result;
        },
        error => {
          this.errors = error
        });

    }

    else {

      this.ls.onLeadSearch('lead_id', this.cvalue).subscribe(
        result => {
          console.log(result);
          this.leads = result;
        },
        error => {
          this.errors = error
        });

    }
  }

  // openModalEdit(lead_id:any,add_line_1:any,add_line_2:any,city:any,zipcode:any,state:any,country:any,first_name:any,
  //                 last_name:any,gender:any,date_of_birth:any,email:any,contact_no:any){
    
    openModalEdit(lead_id:any,editForm:any){
    // console.log(lead_id,add_line_1);
    this.displayEdit = "block";
    // console.log(emp_id,designation);
    this.ls.getLeadId(lead_id).subscribe(
      result => {
        console.log(result);
        this.leadOne = result;

        const controls = editForm.controls;

        controls.lead_id.setValue(result.lead_id);
        controls.first_name.setValue(result.person.first_name);
        controls.last_name.setValue(result.person.last_name);
        controls.last_name.setValue(result.person.last_name);
        controls.gender.setValue(result.person.gender);
        controls.date_of_birth.setValue(result.person.date_of_birth);
        controls.email.setValue(result.person.email);
        controls.contact_no.setValue(result.person.contact_no);
        controls.add_line_1.setValue(result.address.add_line_1);
        controls.add_line_2.setValue(result.address.add_line_2);
        controls.city.setValue(result.address.city);
        controls.state.setValue(result.address.state);
        controls.zipcode.setValue(result.address.zipcode);
        controls.country.setValue(result.address.country);
      },
      error => {
        this.errors = error
      }

    );
  }

  openModal() {
    this.displayLead = "block";
    // this.editLead(this.lead_id,this.created_at,this.created_by,this.updated_at,this.updated_by,this.person_id);
    
  }

  

  addLead(){
   console.log(this.addForm.value);
   this.ls.createLead(this.addForm.value)
  //  .catch(this.handleError)
   .subscribe(
     response => {
       console.log("hi");
     },
   )
   
   this.displayLead="none";
   this.getallLeads();
  }

  // updateLead() {
  //   this.leadData = this.editForm.value;
  //   this.lead_id = this.editForm.get('emp_id').value
  //   console.log(this.editForm)
  //   this.employeeService.updateEmployee(this.emp_id, this.empData)
  //     .subscribe(
  //       response => {
  //       },
  //     )
  // }

  handleError(error: Response) {
    if (error.status == 422) {      
      // this.router.navigate(['/login']);
      alert('email already used')
    } else {
      // return Observable.throwError(error);
    }
  }

  deleteLead(leadId:any){
    this.ls.deleteLead(leadId).subscribe(
      result =>{

      }
    )
  }

  onCitySort(){
    this.data = this.ls.getSort().subscribe(
      result => {this.leads = result;}
    )
    console.log(this.data);
  }

  onIdSort(){
    this.data = this.ls.getIdSort().subscribe(
      result => {this.leads = result;}
    )
    console.log(this.data);
  }

  onfNameSort(){
    this.data = this.ls.getfNameSort().subscribe(
      result => {this.leads = result;}
    )
    console.log(this.data);

  }

  convertLead(id:any,pId:any){
    console.log("working");
    this.ls.convertLead(id,pId)
    .subscribe(
      response => {
        console.log("hi");
        // this.displayLead="none";
        // this.getallLeads();
        // <HTMLInputElement><unknown>document.getElementById("convertLead")?.className=btn btn-disabled;
      },
    )
  }



  // page2(i:any){
  //     this.ls.getLeads(i);
  // }

  updateLead(){
    this.leadData = this.editForm.value;
    this.lead_id = this.editForm.value['lead_id'];
    // this.lead_id = this.editForm.get('emp_id').value
    // this.ls.updateLeads(+leadid.value,leadData)
    // console.log(this.editForm.value['add_line_1']);

    this.ls.updateLeads(this.lead_id, this.leadData)
    .subscribe(
      response => {
      },
    )

    // .subscribe(
    //   response => {
    //     console.log("hi");
    //     console.log(leadData);
    //     // this.submitted = true;
        
    //   },
    // );
    this.displayEdit="none";
        this.getallLeads();
  }

  // onSearch(event: { target: { value: any; }; }) {
  //   const inputValue = event.target.value;
  //   this.ls.onSearchId(inputValue).subscribe(
  //     result => {
  //       console.log(result);
  //       this.employees = result;
  //     },
  //     error => {
  //       this.errors = error
  //     }

  //   );

  // }
// }


  onCloseHandled() {
    this.displayLead = "none";
    this.displayEdit = "none";
    // this.display1 = "none"
  }
}
  function openModalEdit(lead_id: any, editForm: any) {
    throw new Error('Function not implemented.');
  }

