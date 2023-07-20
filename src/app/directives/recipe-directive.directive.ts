import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRecipeDirective]'
})
export class RecipeDirectiveDirective implements OnInit{

  @HostBinding("style.backgroundColor") backgroundColor:string = "transparent";
  constructor(private renderer:Renderer2, private elementRef:ElementRef) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
  }

  @HostListener("mouseenter") handleMouseEnter(event:MouseEvent){
    this.backgroundColor = "red";
  }

  @HostListener("mouseleave") handleMouseLeave(event:MouseEvent){
    this.backgroundColor = "blue";
  }

}
