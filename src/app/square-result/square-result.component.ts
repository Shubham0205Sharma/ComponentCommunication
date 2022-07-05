import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square-result',
  templateUrl: './square-result.component.html',
  styleUrls: ['./square-result.component.css']
})
export class SquareResultComponent implements OnInit {

  @Input() parentData:string="";
  
  @Output() childEvent=new EventEmitter<string>();
  
  data!:number;
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.data=parseInt(this.parentData)
    this.data= this.data*this.data;
  }
  
  onChange(){
   this.childEvent.emit(this.data.toString());
  }

}
