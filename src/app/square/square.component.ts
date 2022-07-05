import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  childValue:string[]=[];
  
  catchChildEvent(event:string){
    this.childValue.push(event);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
