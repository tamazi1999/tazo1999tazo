import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:any;

  constructor() { 

    this.students = [

      {
        "name" : "Emzari",
        "lastname" : "Ujirauli",
        "ID" : "08001010101",
      },
      {
        "name" : "Emzari",
        "lastname" : "Ujirauli",
        "ID" : "08001010101",
      },
      {
        "name" : "Emzari",
        "lastname" : "Ujirauli",
        "ID" : "08001010101",
      },

    ]

  }

  ngOnInit(): void {
  }

}
