import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { Lead } from '../lead.model';
import { LeadService } from './lead.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css'],
})
export class LeadComponent implements OnInit {
  constructor(private httpClient: HttpClient, private ls: LeadService) { }

  leads: any;
  display = "none";
  displayAdd = "none";
  displayPerson = "none";
  displayLead = "none";
  displayEdit = "none";

  addForm: FormGroup;

  ngOnInit(): void {

    this.getallLeads();
    console.log(this.leads);

    this.addForm = new FormGroup({
      'add_line_1': new FormControl(null),
      'add_line_2': new FormControl(null),
      'city': new FormControl(null),
      'zipcode': new FormControl(null),
      'state': new FormControl(null),
      'country': new FormControl(null),
      'first_name': new FormControl(null),
      'last_name': new FormControl(null),
      'gender': new FormControl(null),
      'date_of_birth': new FormControl(null),
      'email': new FormControl(null),
      'contact_no': new FormControl(null),
      'updated_at': new FormControl(null)

    })
  }

  getallLeads() {
    this.ls.getLeads().subscribe(result => {
      this.leads = result;
      console.log(result);
    }
    );
    console.log(this.leads);
  }

  // openModalEdit(lead_id:any,add_line_1:any,add_line_2:any,city:any,zipcode:any,state:any,country:any,first_name:any,
  //                 last_name:any,gender:any,date_of_birth:any,email:any,contact_no:any){

  openModalEdit(lead_id: any, add_line_1: any, add_line_2: any, city: any, zipcode: any,
    state: any, country: any, first_name: any, last_name: any, gender: any, date_of_birth: any, email: any, contact_no: any) {
    console.log(lead_id, add_line_1);
    this.displayEdit = "block";
    // console.log(emp_id,designation);
    (<HTMLInputElement>document.getElementById("lead_id1")).value = lead_id;
    (<HTMLInputElement>document.getElementById("add_line_11")).value = add_line_1;
    (<HTMLInputElement>document.getElementById("add_line_21")).value = add_line_2;
    (<HTMLInputElement>document.getElementById("city1")).value = city;
    (<HTMLInputElement>document.getElementById("zipcode1")).value = zipcode;
    (<HTMLInputElement>document.getElementById("state1")).value = state;
    (<HTMLInputElement>document.getElementById("country1")).value = country;
    (<HTMLInputElement>document.getElementById("first_name1")).value = first_name;
    (<HTMLInputElement>document.getElementById("last_name1")).value = last_name;
    (<HTMLInputElement>document.getElementById("gender1")).value = gender;
    (<HTMLInputElement>document.getElementById("date_of_birth1")).value = date_of_birth;
    (<HTMLInputElement>document.getElementById("email1")).value = email;
    (<HTMLInputElement>document.getElementById("contact_no1")).value = contact_no;
  }

  openModal() {
    this.displayLead = "block";
    // this.editLead(this.lead_id,this.created_at,this.created_by,this.updated_at,this.updated_by,this.person_id);

  }



  addLead() {
    console.log(this.addForm.value);
    this.ls.createLead(this.addForm.value)
      .subscribe(
        response => {
          console.log("hi");
          this.displayLead = "none";
          this.getallLeads();
        },
      )
  }

  // page2(i:any){
  //     this.ls.getLeads(i);
  // }

  updateLead(leadid: any, leadData: any) {
    this.ls.updateLeads(+leadid.value, leadData)
      .subscribe(
        response => {
          console.log("hi");
          console.log(leadData);
          // this.submitted = true;

        },
      );
    this.displayEdit = "none";
    this.getallLeads();
  }

  // openModalAdd(){
  //   this.displayAdd = "block";
  // }

  // openModelPerson(){
  //   // pushAdd();
  //   this.displayAdd = "none";
  //   this.displayPerson = "block";

  // }

  // openModelLead(){
  //   // pushPerson();
  //   this.displayPerson = "none";
  //   this.displayLead = "block";
  // }


  // openModalEdit(created_at:any,created_by:any,updated_at:any,updated_by:any,person_id:any) {
  //   this.displayEdit = "block";
  //   this.editLead(created_at,created_by,updated_at, updated_by,person_id);
  // }


  onCloseHandled() {
    this.displayLead = "none";
    this.displayEdit = "none";
    // this.display1 = "none"
  }
}
