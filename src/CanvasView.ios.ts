import '../../../node_modules/tns-platform-declarations/ios';

import { NSWebGLContextAttributes } from './webgl/contextAttributes';
import { NSWebGLRenderingContext } from './webgl/renderingcontext.ios';

export const platform = 'ios';

declare var HTMLCanvasElement: HTMLCanvasElement;
export class CanvasView extends UIView {

    height: number;
    width: number;

    private get _eaglLayer() {
        return this.layer as CAEAGLLayer;
    }
    private _context?: EAGLContext;
    private _colorRenderBuffer?: number;
    private _renderingContext?: NSWebGLRenderingContext;

    initWithFrame(frame: CGRect) {
        super.initWithFrame(frame);

        this._eaglLayer.opaque = true;
        this._context = EAGLContext.alloc()
            .initWithAPI(EAGLRenderingAPI.kEAGLRenderingAPIOpenGLES2);
        EAGLContext.setCurrentContext(this._context);

        return this;
    }

    dealloc() {
        this._context = undefined;

        super.dealloc();
    }

    getCanvasContext(
        contextId: 'webgl' | 'experimental-webgl',
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext;
    getCanvasContext(
        contextId: string,
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext | null {
        switch (contextId) {
            case 'webgl':
                if (!this._renderingContext) {
                    this._renderingContext = new NSWebGLRenderingContext(this, contextAttributes);
                }
                return this._renderingContext;
            default:
                return null;
        }
    }
}
