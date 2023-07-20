import { Component, Input } from '@angular/core';
import { FilterBase } from '../../directives/filter-base';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.css']
})
export class TextFilterComponent<T extends {[key: string]: any}> extends FilterBase<T>{
  term: string = "";
  timeOutKey:NodeJS.Timeout | undefined;
  @Input()
  fieldsNames: string[] = []
  
  predicate(e:T): boolean {
    if(this.fieldsNames.length < 0) return true;

    // @todo: deal with multiple field names
    const temp = e[this.fieldsNames[0]];
    if(typeof temp !== "string") {
      return true;
    }

    return temp.includes(this.term);
  }
  
  onTermChange(e: any) {
    // apply debouncing

    if(this.timeOutKey) {
      clearTimeout(this.timeOutKey);   
    }

    this.timeOutKey = setTimeout(()=> {
      console.log(e.target.value);
      this.term = e.target.value;
    }, 1000);

    this.term = e.target.value;
  }
}
