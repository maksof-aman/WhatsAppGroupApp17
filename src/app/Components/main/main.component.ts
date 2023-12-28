import { Component, Input } from '@angular/core';
import { Step1Component } from '../step1/step1.component';
import { NgIf } from '@angular/common';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Step1Component, NgIf, Step2Component, Step3Component ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() childMessage: string = '';
  groupName: string =''
  selectedUsers: any[] = [];

  receiveMessage = (message: string)=> {
    this.groupName = message
  }

  usersDitails = ($event: any)=> {
    this.selectedUsers = $event
  }





  count:number = 1;
  increase():void{
    this.count++;
    console.log(this.groupName)

  }

  decrease():void{
    this.count--;
  }
}
