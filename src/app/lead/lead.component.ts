import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Lead } from '../lead.model';
import { LeadService } from './lead.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css'],
})
export class LeadComponent implements OnInit {
  constructor(private httpClient: HttpClient, private ls: LeadService) {}

  leads: Lead[];
  display = "none";
  displayAdd = "none";
  displayPerson = "none";
  displayLead = "none";
  displayEdit = "none";
  lead_id:any;
  created_at:any;
  created_by:any;
  updated_at:any;
  updated_by:any;
  person_id:any;

  ngOnInit(): void {
    
    this.getallLeads();
    console.log(this.leads);

  }

  getallLeads() {
    this.ls.getLeads().subscribe((data) => this.leads = data);
    console.log(this.leads);
  }

  editLead(created_at:any,created_by:any,updated_at:any,updated_by:any,person_id:any){
    console.log(created_at);
    (<HTMLInputElement>document.getElementById('created_at')).value = created_at;
    (<HTMLInputElement>document.getElementById('created_by')).value = created_by;
    (<HTMLInputElement>document.getElementById('updated_at')).value = updated_at;
    (<HTMLInputElement>document.getElementById('updated_by')).value = updated_by;
    (<HTMLInputElement>document.getElementById('person_id')).value = person_id;
  }

  openModal() {
    this.displayLead = "block";
    // this.editLead(this.lead_id,this.created_at,this.created_by,this.updated_at,this.updated_by,this.person_id);
  }

  addLead(leadData: Lead){
   console.log(leadData);
   this.ls.createLead(leadData)
   .subscribe(
     response => {
       console.log("hi");
       // console.log(gameData);
       // this.submitted = true;
       this.displayLead="none";
       this.getallLeads();
     },
   )
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
    this.display = "none";
    // this.display1 = "none"
  }
}
