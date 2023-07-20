import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { flattenObject } from 'src/app/utils/table.utils';
import { RowSpecs } from "../../models/row-specs.model";

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {
  @Input()
  data: { [key: string]: any }[] = [];
  flattenedData: typeof this.data = [];

  @Input()
  mapping: RowSpecs = {};

  headers: string[] = [];
  rows: string[][] = [];

  ngOnInit():void {
    this.headers = Object.values(this.mapping).map(s => s.name);
    this.flattenedData = this.data.map(e => flattenObject(e, this.mapping));
    this.rows = this.flattenedData.map(o => Object.values(o));
  }

  onDataChanged(newDataList: typeof this.data) {
    this.data = newDataList;
    this.ngOnInit();
  }
}
