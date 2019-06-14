import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../model/departmentModel';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  courses: any[];
  constructor() {
    this.courses =[];
    this.courses.push({id:"1",name:"course 1", ratting:"4/5"});
    this.courses.push({id:"2",name:"course 2", ratting:"2/5"});
    this.courses.push({id:"3",name:"course 3", ratting:"3/5"});
   }

  ngOnInit() {
  }
  nationalities = ['Select', 'United States', 'United Kingdom', 'Iceland', 'South Korea'];
  addRattings = ['1/5', '2/5', '3/5', '4/5', '5/5'];
  departmentDetails = new DepartmentModel(1, 'Nagaraj', 'United States', 29);

 
  edit = false;
 
  onSubmit() { 
    this.edit = true; 
  }

}
