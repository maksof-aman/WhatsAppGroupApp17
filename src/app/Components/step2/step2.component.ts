import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css',
})
export class Step2Component {
  searchForm: FormGroup;
  filteredUsers: any[] = [];
  selectedUsers: any[] = [];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: [''],
    });
  }

  pakistaniNames = [
    { firstName: 'Ahmed', lastName: 'Khan' },
    { firstName: 'Fatima', lastName: 'Malik' },
    { firstName: 'Mohammad', lastName: 'Riaz' },
    { firstName: 'Aisha', lastName: 'Shah' },
    { firstName: 'Ali', lastName: 'Iqbal' },
    { firstName: 'Sana', lastName: 'Ahmed' },
    { firstName: 'Hassan', lastName: 'Siddiqui' },
    { firstName: 'Zainab', lastName: 'Baig' },
    { firstName: 'Usman', lastName: 'Akhtar' },
    { firstName: 'Mariam', lastName: 'Sheikh' },
    { firstName: 'Bilal', lastName: 'Hussain' },
    { firstName: 'Ayesha', lastName: 'Awan' },
    { firstName: 'Farhan', lastName: 'Abbasi' },
    { firstName: 'Rukhsar', lastName: 'Qureshi' },
    { firstName: 'Omar', lastName: 'Rafique' },
    { firstName: 'Sumaira', lastName: 'Kazmi' },
    { firstName: 'Ibrahim', lastName: 'Chaudhry' },
    { firstName: 'Zahra', lastName: 'Malik' },
    { firstName: 'Nasir', lastName: 'Ahmed' },
    { firstName: 'Fariha', lastName: 'Akram' },
  ];

  searchText: string = '';
  @Input() groupName: string = ''
  

  


  search(): void {
    if (this.searchText.length > 0) {
      const searchTerm = this.searchText.toLowerCase();
      this.filteredUsers = this.pakistaniNames.filter((user) =>
        user.firstName.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredUsers = [];
      this.searchText = '';
    }
  }

  removeUser(i: number): void {
    this.selectedUsers.splice(i, 1);
  }

  selectUser(user: any): void {
    if (!this.selectedUsers.includes(user)) {
      this.selectedUsers.push(user);
      this.filteredUsers = [];
      this.sendMessage();
      this.searchText = '';
    }

    const i = this.selectedUsers.indexOf(user);
    if (i === -1) {
      this.selectedUsers.push(user);
    }
  }

  @Output() dataEvent = new EventEmitter<any>();

  sendMessage() {
    this.dataEvent.emit(this.selectedUsers);
    // console.log(this.selectedUsers)
  }


  
}
