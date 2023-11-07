import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface todoItems{
  value: string,
  checked:boolean
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
  
export class AppComponent {
  title = 'angularInteview';
  todoForm: FormGroup = new FormGroup({
    item: new FormControl(null),
  });

  items: todoItems[] = [
    { value: 'list1', checked: true },
    { value: 'list2', checked: false }
  ];

  addNewToDoItem() {
    console.log(this.todoForm.value?.item);
    if (
      this.todoForm.value?.item !== null &&
      this.todoForm.value?.item !== ''
    ) {
      this.items.push({ value: this.todoForm.value?.item, checked: false });
    }
  }

}
