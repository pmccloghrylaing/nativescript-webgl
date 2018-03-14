import { screen } from 'tns-core-modules/platform';

import { NSWebGLContextAttributes } from '../webgl/context-attributes';
import { NSWebGLRenderingContext } from '../webgl/rendering-context';
import { CanvasViewBase } from './canvas-view.common';

export class CanvasView extends CanvasViewBase {

    get ios(): any {
        return this.nativeView;
    }
    private context: EAGLContext;

    constructor() {
        super();
        this.nativeView = new UIView({
            frame: CGRectMake(0, 0,
                screen.mainScreen.widthDIPs, screen.mainScreen.heightDIPs),
        });
        (this.nativeView.layer as CAEAGLLayer).opaque = true;
        this.context = EAGLContext.alloc()
            .initWithAPI(EAGLRenderingAPI.kEAGLRenderingAPIOpenGLES2);
    }

    requestAnimationFrame(action: () => void) {
        action();
    }
}
