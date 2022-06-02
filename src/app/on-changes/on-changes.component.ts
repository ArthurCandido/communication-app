import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnCHangesComponent implements OnInit {

  name ="";
  newName="";
  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.newName = this.name;
  }

}
