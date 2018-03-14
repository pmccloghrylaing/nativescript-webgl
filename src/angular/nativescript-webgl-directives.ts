import { Directive } from "@angular/core"; // TODO: check require .Directive without hacks

@Directive({
    selector: "WebGLCanvasView"
})
export class WebGLCanvasViewDirective { }

export const DIRECTIVES = [WebGLCanvasViewDirective];
