import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [NgFor],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  selectedUsers: any[] = [];

  removeUser(i: number): void {
    this.usersData.splice(i, 1);
  }
  
  @Input() groupName: string =''
  @Input() usersData: any ;
  ngOnInit(){
      console.log(this.usersData)
  }
}
