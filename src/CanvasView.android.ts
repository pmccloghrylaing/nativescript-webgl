import '../../../node_modules/tns-platform-declarations/android';

import { NSWebGLContextAttributes } from './webgl/contextAttributes';
import { NSWebGLRenderingContext } from './webgl/renderingcontext.android';

export const platform = 'android';

declare var HTMLCanvasElement: HTMLCanvasElement;
export class CanvasView extends android.opengl.GLSurfaceView {

    height: number;
    width: number;

    private _renderingContext?: NSWebGLRenderingContext;

    constructor(
        context: android.content.Context,
    ) {
        super(context);

        global.__native(this);
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
