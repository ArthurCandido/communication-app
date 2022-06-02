import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
@Input() name:string="";
@Input() lastname:string="";
@Input() age:number=0;

clients: Client[];



  constructor() {

    this.clients=[
      {  id:1, name:"Arthur", age:18  },
      {  id:2, name:"Bob", age:32  },
      {  id:3, name:"Joao", age:18  },
      {  id:4, name:"Fausto", age:20  }


    ];

    
   }

  ngOnInit(): void {
  }

}
