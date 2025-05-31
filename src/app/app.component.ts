import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

type forTask ={
  status: string;
  task: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To do with angular';
  todos: forTask[] = [
       {
        status: 'done',
        task: 'Learn Angular'
       }
  ];
  task: string = '';

  addTodo() {
    const trimmedTask = this.task.trim();
    if (trimmedTask !== '') {
      let processed = {

        status:"waiting",
        task : this.task
      };

      this.todos.push(processed);
      this.task = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}