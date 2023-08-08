import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  
  input = '';
  list: { task: string; editMode: boolean }[] = [];
  newTask: string = '';
  index: number = 0;

  addItem() {
    this.list.push({ task: this.input, editMode: false });
    this.input = '';
  }

  deleteItem(index: any) {
    this.list.splice(index, 1);
  }

  changeMode(index: number) {
    this.list[index].editMode = !this.list[index].editMode;
    this.newTask = this.list[index].task;
    this.index = index;
  }

  saveNewTask() {
    this.list[this.index].task = this.newTask;
    this.list[this.index].editMode = !this.list[this.index].editMode;
  }
}
