import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { DIRECTIVES } from './webgl.directives';

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class WebGLModule { }

registerElement('CanvasView',
    () => require('../canvas-view').CanvasView);
