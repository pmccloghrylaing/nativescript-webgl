import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HomeViewModel } from './home-view-model';
import { CanvasView } from 'nativescript-webgl';
import { GLEnumBufferBit, GLEnumColorComponent, GLEnumParam } from 'nativescript-webgl/webgl/constants.common';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    const page = args.object as Page;
    const view = page.getViewById('canvas') as CanvasView;

    const gl = view.getContext('webgl');

    console.log(gl ? 'gl exists' : 'no gl');

    if (gl) {
        setTimeout(() => {
            view.requestAnimationFrame(() => {
                console.log('animationFrame');
                gl.clearColor(1, 1, 1, 1);
                gl.clear(GLEnumBufferBit.GL_COLOR_BUFFER_BIT | GLEnumBufferBit.GL_DEPTH_BUFFER_BIT);

                console.log('clear 1');
                const clearColor = gl.getParameter(GLEnumParam.COLOR_CLEAR_VALUE);
                console.log('clear 2');
                console.log('clear length', clearColor && clearColor.length);
                console.log('clear 3');
                console.log('clear', clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
            });
        }, 1000);
    }

    // const vertexShader = GLES20.glCreateShader(GLEnumShaderType.VERTEX_SHADER);
    // GLES20.glShaderSource(vertexShader, `
    //     attribute vec4 aVertexPosition;

    //     uniform mat4 uModelViewMatrix;
    //     uniform mat4 uProjectionMatrix;

    //     void main() {
    //         gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    //     }
    // `);
    // GLES20.glCompileShader(vertexShader);
    // const fragmentShader = GLES20.glCreateShader(GLEnumShaderType.FRAGMENT_SHADER);
    // GLES20.glShaderSource(vertexShader, `
    //     void main() {
    //         gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    //     }
    // `);
    // GLES20.glCompileShader(fragmentShader);
    // const shaderProgram = GLES20.glCreateProgram();
    // GLES20.glAttachShader(shaderProgram, vertexShader);
    // GLES20.glAttachShader(shaderProgram, fragmentShader);
    // const programInfo = {
    //     program: shaderProgram,
    //     attribLocations: {
    //         vertexPosition: GLES20.glGetAttribLocation(shaderProgram, 'aVertexPosition'),
    //     },
    //     uniformLocations: {
    //         projectionMatrix: GLES20.glGetUniformLocation(shaderProgram, 'uProjectionMatrix'),
    //         modelViewMatrix: GLES20.glGetUniformLocation(shaderProgram, 'uModelViewMatrix'),
    //     },
    // };

    // const buffers = java.nio.IntBuffer.allocate(1);
    // GLES20.glGenBuffers(1, buffers);
    // const positionBuffer = buffers.get(0);
    // GLES20.glBindBuffer(GLES20.GL_ARRAY_BUFFER, positionBuffer);

    // const positions = java.nio.FloatBuffer.allocate(16);
    // for (let i = 0; i < 16; i++) {
    //     positions.put(i, i % 2 === 0 ? (i % 4 === 0 ? 1 : -1) : (i < 8 ? 1 : -1));
    // }
    // GLES20.glBufferData(
    //     GLES20.GL_ARRAY_BUFFER,
    //     16, positions,
    //     GLES20.GL_STATIC_DRAW);

}
