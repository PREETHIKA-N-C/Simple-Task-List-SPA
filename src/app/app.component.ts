import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MY TASK LIST';
  taskList: string[] = [];
  
  ngOnInit(): void{
    if(localStorage.getItem('my_tasks')){
    this.taskList = JSON.parse(localStorage.getItem('my_tasks') as string) ; //It parses the data. Here I have given the data as string without type assertion compiler might think it as null value.
    }
  }
  
}
