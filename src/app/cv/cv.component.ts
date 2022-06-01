import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
   name : string= "Sarah Wainscott";
  email:string = "sewainscott@live.com";
  phone: string = "513-405-4292";
  location:string = "Milford, Ohio";

  BootcampClass: string = "text-info";

  Bootcamp : any[][] = [
    ["Git/GitHub", "SQL","HTML", "Javascript"], ["C#", "CSS", "Typescript", "Angular"], ["Entity Framework", "WebApi","JSON", "JQuery"]
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
