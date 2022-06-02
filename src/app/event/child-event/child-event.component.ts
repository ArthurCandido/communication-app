import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-event',
  templateUrl: './child-event.component.html',
  styleUrls: ['./child-event.component.css']
})
export class ChildEventComponent implements OnInit {

  @Input() title: string="";
  @Output() inc = new EventEmitter<number>();



  constructor() { }

  ngOnInit(): void {
  }

   btnClick(n:number){
    this.inc.emit(n);

    
  }

}
function n(n: any) {
  throw new Error('Function not implemented.');
}

