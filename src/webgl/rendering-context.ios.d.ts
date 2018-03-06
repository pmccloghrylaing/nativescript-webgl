import 'tns-platform-declarations/ios';
import { GLEnumBlendingEquation, GLEnumBlendingFunction, GLEnumBlendingMode, GLEnumBufferBit, GLEnumBufferParam, GLEnumBufferType, GLEnumBufferUsage, GLEnumColorComponent, GLEnumEnable, GLEnumFaceDirection, GLEnumFramebuffer, GLEnumFramebufferAttachment, GLEnumFramebufferParam, GLEnumHintMode, GLEnumParam, GLEnumPixelFormat, GLEnumPixelStore, GLEnumPixelType, GLEnumPrimitive, GLEnumProgramParam, GLEnumRenderbuffer, GLEnumRenderbufferInternalFormat, GLEnumRenderbufferParam, GLEnumShaderParam, GLEnumShaderType, GLEnumTexCubeMap, GLEnumTexParam, GLEnumTexTarget, GLEnumTexture, GLEnumUniformType, GLEnumVertexAttrib } from './constants.common';
import { NSWebGLRenderingContextBase } from './rendering-context-common';
import { NSWebGLBuffer, NSWebGLFramebuffer, NSWebGLProgram, NSWebGLRenderbuffer, NSWebGLShader, NSWebGLTexture, NSWebGLUniformLocation } from './wrappers';
export declare class NSWebGLRenderingContext extends NSWebGLRenderingContextBase {
    readonly drawingBufferHeight: number;
    readonly drawingBufferWidth: number;
    activeTexture(texture: GLEnumTexture): void;
    attachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void;
    bindAttribLocation(program: NSWebGLProgram | null, index: number, name: string): void;
    bindBuffer(target: GLEnumBufferType, buffer: NSWebGLBuffer | null): void;
    bindFramebuffer(target: GLEnumFramebuffer, framebuffer: NSWebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLEnumRenderbuffer, renderbuffer: NSWebGLRenderbuffer | null): void;
    bindTexture(target: GLEnumTexture, texture: NSWebGLTexture | null): void;
    blendColor(red: number, green: number, blue: number, alpha: number): void;
    blendEquation(mode: GLEnumBlendingEquation): void;
    blendEquationSeparate(modeRGB: GLEnumBlendingEquation, modeAlpha: GLEnumBlendingEquation): void;
    blendFunc(sfactor: GLEnumBlendingMode | GLEnumBlendingFunction, dfactor: GLEnumBlendingMode | GLEnumBlendingFunction): void;
    blendFuncSeparate(srcRGB: GLEnumBlendingMode | GLEnumBlendingFunction, dstRGB: GLEnumBlendingMode | GLEnumBlendingFunction, srcAlpha: GLEnumBlendingMode | GLEnumBlendingFunction, dstAlpha: GLEnumBlendingMode | GLEnumBlendingFunction): void;
    bufferData(target: GLEnumBufferType, size: number, usage: GLEnumBufferUsage): void;
    bufferData(target: GLEnumBufferType, srcData: ArrayBuffer, usage: GLEnumBufferUsage): void;
    bufferData(target: GLEnumBufferType, srcData: ArrayBufferView, usage: GLEnumBufferUsage): void;
    bufferData(target: GLEnumBufferType, srcData: null, usage: GLEnumBufferUsage): void;
    bufferSubData(target: GLEnumBufferType, offset: number, data: ArrayBufferView | ArrayBuffer): void;
    checkFramebufferStatus(target: GLEnumFramebuffer): number;
    clear(mask: GLEnumBufferBit): void;
    clearColor(red: number, green: number, blue: number, alpha: number): void;
    clearDepth(depth: number): void;
    clearStencil(s: number): void;
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    compileShader(shader: NSWebGLShader | null): void;
    compressedTexImage2D(target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: number, width: number, height: number, border: number, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: ArrayBufferView): void;
    copyTexImage2D(target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent, x: number, y: number, width: number, height: number, border: number): void;
    copyTexSubImage2D(target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;
    createBuffer(): NSWebGLBuffer | null;
    createFramebuffer(): NSWebGLFramebuffer | null;
    createProgram(): NSWebGLProgram | null;
    createRenderbuffer(): NSWebGLRenderbuffer | null;
    createShader(type: GLEnumShaderType): NSWebGLShader | null;
    createTexture(): NSWebGLTexture | null;
    cullFace(mode: number): void;
    deleteBuffer(buffer: NSWebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: NSWebGLFramebuffer | null): void;
    deleteProgram(program: NSWebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: NSWebGLRenderbuffer | null): void;
    deleteShader(shader: NSWebGLShader | null): void;
    deleteTexture(texture: NSWebGLTexture | null): void;
    depthFunc(func: number): void;
    depthMask(flag: boolean): void;
    depthRange(zNear: number, zFar: number): void;
    detachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void;
    disable(cap: GLEnumEnable): void;
    disableVertexAttribArray(index: number): void;
    drawArrays(mode: GLEnumPrimitive, first: number, count: number): void;
    drawElements(mode: GLEnumPrimitive, count: number, type: number, offset: number): void;
    enable(cap: GLEnumEnable): void;
    enableVertexAttribArray(index: number): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, renderbuffertarget: GLEnumRenderbuffer, renderbuffer: NSWebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, textarget: GLEnumTexTarget | GLEnumTexCubeMap, texture: NSWebGLTexture | null, level: number): void;
    frontFace(mode: GLEnumFaceDirection): void;
    generateMipmap(target: GLEnumTexTarget): void;
    getActiveAttrib(program: NSWebGLProgram | null, index: number): WebGLActiveInfo | null;
    getActiveUniform(program: NSWebGLProgram | null, index: number): {
        name: string;
        size: number;
        type: GLEnumUniformType;
    } | null;
    getAttachedShaders(program: NSWebGLProgram | null): NSWebGLShader[] | null;
    getAttribLocation(program: NSWebGLProgram | null, name: string): number;
    protected getBufferParameteriv(target: GLEnumBufferType, pname: GLEnumBufferParam): number;
    getError(): number;
    protected getFramebufferAttachmentParameteriv(target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, pname: GLEnumFramebufferParam): number;
    protected getParameteriv(pname: GLEnumParam | GLEnumEnable): number;
    protected getParameteriv(pname: GLEnumParam | GLEnumEnable, size: number): number[];
    protected getParameterfv(pname: GLEnumParam | GLEnumEnable): number;
    protected getParameterfv(pname: GLEnumParam | GLEnumEnable, size: number): number[];
    getProgramInfoLog(program: NSWebGLProgram | null): string | null;
    protected getProgramParameteriv(program: NSWebGLProgram | null, pname: GLEnumProgramParam): number;
    protected getRenderbufferParameteriv(target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam): number;
    getShaderInfoLog(shader: NSWebGLShader | null): string | null;
    protected getShaderParameteriv(shader: NSWebGLShader | null, pname: GLEnumShaderParam): any;
    getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: NSWebGLShader | null): string | null;
    protected getTexParameteriv(target: GLEnumTexTarget, pname: GLEnumTexParam): number;
    protected getUniformiv(program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null, size: number): number[];
    protected getUniformfv(program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null, size: number): number[];
    getUniformLocation(program: NSWebGLProgram | null, name: string): NSWebGLUniformLocation | null;
    getVertexAttribiv(index: number, pname: GLEnumVertexAttrib): number;
    getVertexAttribiv(index: number, pname: GLEnumVertexAttrib, size: number): number[];
    hint(target: number, mode: GLEnumHintMode): void;
    isBuffer(buffer: NSWebGLBuffer | null): boolean;
    isEnabled(cap: number): boolean;
    isFramebuffer(framebuffer: NSWebGLFramebuffer | null): boolean;
    isProgram(program: NSWebGLProgram | null): boolean;
    isRenderbuffer(renderbuffer: NSWebGLRenderbuffer | null): boolean;
    isShader(shader: NSWebGLShader | null): boolean;
    isTexture(texture: NSWebGLTexture | null): boolean;
    lineWidth(width: number): void;
    linkProgram(program: NSWebGLProgram | null): void;
    pixelStorei(pname: GLEnumPixelStore, param: number): void;
    polygonOffset(factor: number, units: number): void;
    readPixelsCore(x: number, y: number, width: number, height: number, format: GLEnumPixelFormat, type: GLEnumPixelType, pixels: ArrayBufferView, bufferSize: number): void;
    renderbufferStorage(target: GLEnumRenderbuffer, internalformat: GLEnumRenderbufferInternalFormat, width: number, height: number): void;
    sampleCoverage(value: number, invert: boolean): void;
    scissor(x: number, y: number, width: number, height: number): void;
    shaderSource(shader: NSWebGLShader | null, source: string): void;
    stencilFunc(func: number, ref: number, mask: number): void;
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
    stencilMask(mask: number): void;
    stencilMaskSeparate(face: number, mask: number): void;
    stencilOp(fail: number, zfail: number, zpass: number): void;
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
    texImage2D(target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent, width: number, height: number, border: number, format: GLEnumColorComponent, type: GLEnumPixelType, pixels: ArrayBufferView): void;
    texParameterf(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void;
    texParameteri(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void;
    texSubImage2D(target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number, width: number, height: number, format: GLEnumColorComponent, type: GLEnumPixelType, pixels: ArrayBufferView): void;
    uniform1f(location: NSWebGLUniformLocation | null, x: number): void;
    uniform1fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    uniform1i(location: NSWebGLUniformLocation | null, x: number): void;
    uniform1iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void;
    uniform2f(location: NSWebGLUniformLocation | null, x: number, y: number): void;
    uniform2fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    uniform2i(location: NSWebGLUniformLocation | null, x: number, y: number): void;
    uniform2iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void;
    uniform3f(location: NSWebGLUniformLocation | null, x: number, y: number, z: number): void;
    uniform3fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    uniform3i(location: NSWebGLUniformLocation | null, x: number, y: number, z: number): void;
    uniform3iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void;
    uniform4f(location: NSWebGLUniformLocation | null, x: number, y: number, z: number, w: number): void;
    uniform4fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    uniform4i(location: NSWebGLUniformLocation | null, x: number, y: number, z: number, w: number): void;
    uniform4iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void;
    uniformMatrix2fv(location: NSWebGLUniformLocation, transpose: boolean, value: Float32Array | number[]): void;
    uniformMatrix3fv(location: NSWebGLUniformLocation, transpose: boolean, value: Float32Array | number[]): void;
    uniformMatrix4fv(location: NSWebGLUniformLocation, transpose: boolean, value: Float32Array | number[]): void;
    useProgram(program: NSWebGLProgram | null): void;
    validateProgram(program: NSWebGLProgram | null): void;
    vertexAttrib1f(indx: number, x: number): void;
    vertexAttrib1fv(indx: number, values: Float32Array | number[]): void;
    vertexAttrib2f(indx: number, x: number, y: number): void;
    vertexAttrib2fv(indx: number, values: Float32Array | number[]): void;
    vertexAttrib3f(indx: number, x: number, y: number, z: number): void;
    vertexAttrib3fv(indx: number, values: Float32Array | number[]): void;
    vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void;
    vertexAttrib4fv(indx: number, values: Float32Array | number[]): void;
    vertexAttribPointer(indx: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;
    viewport(x: number, y: number, width: number, height: number): void;
}
