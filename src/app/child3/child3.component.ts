import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp.model';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  emps:Array<Emp>=[];
  constructor(public ser:SharedService) { }

  ngOnInit(): void {
  }
  storeData(idRef:any,nameRef:any,taskRef:any,deadlineRef:any){
    let emp1:Emp={id:idRef.value,name:nameRef.value,task:taskRef.value,DeadLine:deadlineRef.value};
    this.emps.push(emp1);
    this.ser.setEmpArray(this.emps);
console.log(this.emps);
  }
}
