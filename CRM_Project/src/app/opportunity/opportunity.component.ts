import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpportunityService } from './opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
  errors: any;


  constructor(private os: OpportunityService, private fb: FormBuilder) { }

  opps: any;
  // selectForm: FormGroup;
  cname: any;
  cvalue: any;

  choices: any = ['Id', 'Name', 'Email'];

  ngOnInit(): void {
    this.getallOpps();

  }

  selectForm = this.fb.group({
    choiceName: ['', [Validators.required]],
    choiceValue: ['', [Validators.required]],
  })

  getChoice() {

    this.cname = this.selectForm.value['choiceName'];
    this.cvalue = this.selectForm.value['choiceValue'];
    //console.log(this.cname);
    console.log(this.cvalue);
    if (this.cname == "Email") {
      this.os.onLeadSearch('email', this.cvalue).subscribe(
        result => {
          console.log(result);
          this.opps = result;
        },
        error => {
          this.errors = error
        });

    }
    else if (this.cname == "name") {

      this.os.onLeadSearch('first_name', this.cvalue).subscribe(
        result => {
          console.log(result);
          this.opps = result;
        },
        error => {
          this.errors = error
        });

    }

    else {

      this.os.onLeadSearch('lead_id', this.cvalue).subscribe(
        result => {
          console.log(result);
          this.opps = result;
        },
        error => {
          this.errors = error
        });

    }
  }

  convertOpp(id: any, pId: any) {
    console.log("working");
    this.os.convertOpp(id, pId)
      .subscribe(
        response => {
          console.log("hi");
          // this.displayLead="none";
          // this.getallLeads();
          // <HTMLInputElement><unknown>document.getElementById("convertLead")?.className=btn btn-disabled;
        },
      )
  }

  getallOpps() {
    this.os.getOpps().subscribe(result => {
      this.opps = result;
      console.log(result);
    }
    );
    console.log(this.opps);
  }

  onIdSort() {
    this.os.onIdSort().subscribe(
      result => {
        this.opps = result;
      }
    )
  }

  onNameSort() {
    this.os.onNameSort().subscribe(
      result => {
        this.opps = result;
      }
    )
  }

  onDateSort() {
    this.os.onDateSort().subscribe(
      result => {
        this.opps = result;
      }
    )
  }

  openModalEdit(i: any,) {

  }

  onCloseHandled() {

  }

}
