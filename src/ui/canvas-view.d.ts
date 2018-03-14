import { View } from 'tns-core-modules/ui/core/view';

import { NSWebGLContextAttributes } from '../webgl/context-attributes';
import { NSWebGLRenderingContext } from '../webgl/rendering-context';

export declare class CanvasView extends View {
    requestAnimationFrame(action: () => void): void;

    getContext(
        contextId: 'webgl',
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext;
    getContext(
        contextId: string,
        contextAttributes?: Partial<NSWebGLContextAttributes>,
    ): NSWebGLRenderingContext | null;
}
