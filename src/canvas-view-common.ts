import '../../../node_modules/tns-platform-declarations/android';

import { View } from 'tns-core-modules/ui/core/view';

import { CanvasView as CanvasViewDeclaration } from './canvas-view';
import { NSWebGLContextAttributes } from './webgl/context-attributes';
import { NSWebGLRenderingContext } from './webgl/rendering-context';

export abstract class CanvasViewBase extends View implements CanvasViewDeclaration {

    get height(): number {
        return super.getMeasuredHeight();
    }
    get width(): number {
        return super.getMeasuredWidth();
    }

    protected _renderingContext: NSWebGLRenderingContext | null = null;

    getContext(
        contextId: 'webgl',
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext;
    getContext(
        contextId: string,
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext | null {
        switch (contextId) {
            case 'webgl':
                {
                    if (!this._renderingContext) {
                        this._renderingContext = this.createRenderingContext(contextAttributes);
                    }
                    return this._renderingContext;
                }
        }
        return null;
    }

    protected abstract createRenderingContext(
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext | null;
}
