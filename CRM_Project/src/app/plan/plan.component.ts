import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { PlanService } from './plan.service';
import { Plan } from '../Plan.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plans: any;
  constructor(private http: HttpClient, private planService: PlanService) { }

  ngOnInit(): void {
  }


}


