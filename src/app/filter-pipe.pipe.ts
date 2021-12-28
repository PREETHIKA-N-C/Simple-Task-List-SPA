import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(tasks:[], searchText:string): any[] {
    if(!tasks) return [];
    if(!searchText) return tasks;
    searchText = searchText.toLowerCase();
    return tasks.filter((tasks:string) =>{
       return tasks.toLowerCase().includes(searchText);
    })
  }

}
