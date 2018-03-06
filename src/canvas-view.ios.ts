import '../../../node_modules/tns-platform-declarations/ios';

import { CanvasViewBase } from './canvas-view-common';
import { NSWebGLContextAttributes } from './webgl/context-attributes';
import { NSWebGLRenderingContext } from './webgl/rendering-context.ios';

export class CanvasView extends CanvasViewBase {

    nativeView: UIView;
    context: EAGLContext;

    public createNativeView(): Object {
        const view = UIView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));

        (view.layer as CAEAGLLayer).opaque = true;
        this.context = EAGLContext.alloc()
            .initWithAPI(EAGLRenderingAPI.kEAGLRenderingAPIOpenGLES2);

        return view;
    }

    initNativeView(): void {
        (this.nativeView as any).owner = this;

        EAGLContext.setCurrentContext(this.context);

        super.initNativeView();
    }

    disposeNativeView(): void {
        (this.nativeView as any).owner = null;

        this.context.dealloc();

        super.disposeNativeView();
    }

    createRenderingContext(
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext | null {
        return new NSWebGLRenderingContext(this, contextAttributes);
    }
}
