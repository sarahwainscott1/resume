import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-history',
  templateUrl: './education-history.component.html',
  styleUrls: ['./education-history.component.css']
})
export class EducationHistoryComponent implements OnInit {
  EdHistory: any[] = [
    {school: 'Miami University',major:'Masters of Biology',graduated:'Dec 2018',courses: ['Conservation Biology', 'Plants & People', 'Animal Behavior & Conservation']},
    {school:'The Ohio State University',major:'Bachelors of Zoology',graduated:'May 2015',courses:['Zoology', 'Vertebrate Anatomy', 'Marine Biology']}
]
  constructor() { }

  ngOnInit(): void {
  }

}
