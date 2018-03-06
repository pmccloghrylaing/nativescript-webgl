import '../../../node_modules/tns-platform-declarations/android';

import { CanvasViewBase } from './canvas-view-common';
import { NSWebGLContextAttributes } from './webgl/contextAttributes';
import { NSWebGLRenderingContext } from './webgl/renderingcontext.android';

export class CanvasView extends CanvasViewBase {

    public nativeView: android.opengl.GLSurfaceView;

    public createNativeView(): Object {
        const surfaceView = new android.opengl.GLSurfaceView(this._context);

        return surfaceView;
    }

    initNativeView(): void {
        (this.nativeView as any).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (this.nativeView as any).owner = null;
        super.disposeNativeView();
    }

    protected createRenderingContext(
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext | null {
        return new NSWebGLRenderingContext(this, contextAttributes);
    }
}
