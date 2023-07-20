import { Directive, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Directive()
export abstract class FilterBase <T> {
    @Input()
    listOfData: T[] = [];
    
    @Input()
    filterSubject$: BehaviorSubject<T[]> | undefined;

    filter():T[] {
        return this.listOfData.filter(this.predicate);
    };

    abstract predicate(e: T):boolean;
}