import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component {

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.userInput);
  }
  

  userInput: string = '';
  onClick(){
    console.log('User Input:', this.userInput);
  }
}
