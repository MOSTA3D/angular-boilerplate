import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-factory',
  templateUrl: './filter-factory.component.html',
  styleUrls: ['./filter-factory.component.css']
})
export class FilterFactoryComponent {
  @Input()
  filterType:FilterType = "text";

}

type FilterType = "text" | "range" | "select";
