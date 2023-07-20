import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custome-input',
  templateUrl: './custome-input.component.html',
  styleUrls: ['./custome-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomeInputComponent),
      multi: true
    }
  ]
})
export class CustomeInputComponent implements ControlValueAccessor {
  value: any;
  disabled = false;


  // @ts-ignore
  onChange: (value: any) => {};

  // @ts-ignore
  onTouch: () => {};

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

}
