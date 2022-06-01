import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  WorkHistory: any[] = [
    {position: 'Software Developer Apprentice',
     employeer: 'Total Quality Logistics',
    timePeriod: 'April 2022 - Current',
    responsibilities: ['Bootcamp','On the Job Training']} ,
    {position: 'Billing & Payment Coordinator',
     employeer: 'Total Quality Logistics',
    timePeriod: 'May 2021 - April 2022',
    responsibilities: ['Paperwork processing', 'Exceptions', 'Billing and Payments']} ,
    {position: 'Conservation Education Coordinator',
     employeer: 'WAVE Foundation at Newport Aquarium',
    timePeriod: 'Dec 2018 - August 2020',
    responsibilities: ['Animal Handling Training', 'Educator Supervisor', 'Curriculum Design']}  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
