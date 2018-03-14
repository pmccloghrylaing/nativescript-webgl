import { View } from 'tns-core-modules/ui/core/view';
import { NSWebGLRenderingContext } from '../webgl/rendering-context';
import { NSWebGLContextAttributes } from '../webgl/context-attributes';

export abstract class CanvasViewBase extends View {

    protected _renderingContext: NSWebGLRenderingContext | null = null;

    abstract requestAnimationFrame(action: () => void): void;

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
                if (!this._renderingContext) {
                    this._renderingContext = new NSWebGLRenderingContext(
                        this, contextAttributes);
                }
                return this._renderingContext;
        }
        return null;
    }
}
