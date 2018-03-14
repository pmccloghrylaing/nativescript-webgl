// NativeScript modules
import { GLEnumBufferBit, GLEnumParam } from '../webgl/constants.common';
import { NSWebGLContextAttributes } from '../webgl/context-attributes';
import { NSWebGLRenderingContext } from '../webgl/rendering-context';
import { NSWebGLRenderingContext as NSWebGLRenderingContextImpl } from '../webgl/rendering-context.android';
import { CanvasViewBase } from './canvas-view.common';

const GLES20 = android.opengl.GLES20;

export class CanvasView extends CanvasViewBase {
    private _androidViewId: number;

    public nativeView: android.opengl.GLSurfaceView;
    public renderer: android.opengl.GLSurfaceView.IRenderer;

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        const view = new android.opengl.GLSurfaceView(this._context);
        return view;
    }

    public initNativeView(): void {
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);

        this.nativeView.setEGLContextClientVersion(2);

        this.renderer = new android.opengl.GLSurfaceView.Renderer({
            onSurfaceCreated: (gl, config) => {
                console.log('surface created');
            },
            onDrawFrame: (gl) => {
                console.log('onDrawFrame');
                const clearColor = java.nio.FloatBuffer.allocate(4);
                GLES20.glClearColor(
                    1, 0, 0, float(1));
                GLES20.glClearDepthf(float(1));

                GLES20.glEnable(GLES20.GL_DEPTH_TEST);
                GLES20.glDepthFunc(GLES20.GL_LEQUAL);

                GLES20.glClear(GLEnumBufferBit.GL_COLOR_BUFFER_BIT
                    | GLEnumBufferBit.GL_DEPTH_BUFFER_BIT);
            },
            onSurfaceChanged: (gl, width, height) => {
                console.log('surface changed');
                GLES20.glViewport(0, 0, width, height);
            },
        });
        this.nativeView.setRenderer(this.renderer);
        this.nativeView.setRenderMode(android.opengl.GLSurfaceView.RENDERMODE_WHEN_DIRTY);
    }

    requestAnimationFrame(action: () => void) {
        this.nativeView.queueEvent(new java.lang.Runnable({
            run: action,
        }));
        this.nativeView.requestRender();
    }
}
