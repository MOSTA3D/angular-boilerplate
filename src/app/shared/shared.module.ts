import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomeInputComponent } from "./components/custome-input/custome-input.component";
import { FilterFactoryComponent } from "./components/filter-factory/filter-factory.component";
import { GenericTableComponent } from "./components/generic-table/generic-table.component";
import { RangeFilterComponent } from "./components/range-filter/range-filter.component";
import { SelectFilterComponent } from "./components/select-filter/select-filter.component";
import { TextFilterComponent } from "./components/text-filter/text-filter.component";

const common = [
    GenericTableComponent,
    FilterFactoryComponent,
    TextFilterComponent,
    RangeFilterComponent,
    SelectFilterComponent,
    CustomeInputComponent,
]

@NgModule({
    declarations: [...common], imports: [CommonModule], exports: [...common]
})
export default class SharedModule { }