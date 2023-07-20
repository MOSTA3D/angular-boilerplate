import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: "[openMenuDirective]",
})
export class OpenMenuDirective{

    @HostBinding("class.show") isOpen:boolean = false;

    constructor(private renderer:Renderer2, private elementRef:ElementRef) { }

    @HostListener("click") handleMenuClick(_event:MouseEvent){
        this.isOpen = !this.isOpen;
    }
}