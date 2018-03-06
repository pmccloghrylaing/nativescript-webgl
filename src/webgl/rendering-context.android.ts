import 'tns-platform-declarations/android';

import {
    fromByteBuffer,
    fromFloatBuffer,
    fromIntBuffer,
    toByteBuffer,
    toFloatBuffer,
    toIntBuffer,
} from '../helpers.android';
import {
    GLEnumBlendingEquation,
    GLEnumBlendingFunction,
    GLEnumBlendingMode,
    GLEnumBufferBit,
    GLEnumBufferParam,
    GLEnumBufferType,
    GLEnumBufferUsage,
    GLEnumColorComponent,
    GLEnumEnable,
    GLEnumFaceDirection,
    GLEnumFramebuffer,
    GLEnumFramebufferAttachment,
    GLEnumFramebufferParam,
    GLEnumHintMode,
    GLEnumParam,
    GLEnumPixelFormat,
    GLEnumPixelStore,
    GLEnumPixelType,
    GLEnumPrimitive,
    GLEnumProgramParam,
    GLEnumRenderbuffer,
    GLEnumRenderbufferInternalFormat,
    GLEnumRenderbufferParam,
    GLEnumShaderParam,
    GLEnumShaderType,
    GLEnumTexCubeMap,
    GLEnumTexParam,
    GLEnumTexTarget,
    GLEnumTexture,
    GLEnumUniformType,
    GLEnumVertexAttrib,
} from './constants.common';
import { NSWebGLRenderingContextBase } from './rendering-context-common';
import {
    getIdOrZero,
    NSWebGLBuffer,
    NSWebGLFramebuffer,
    NSWebGLProgram,
    NSWebGLRenderbuffer,
    NSWebGLShader,
    NSWebGLTexture,
    NSWebGLUniformLocation,
} from './wrappers';

const GLES20 = android.opengl.GLES20;

export class NSWebGLRenderingContext extends NSWebGLRenderingContextBase {
    get drawingBufferHeight(): number {
        throw new Error();
    }
    get drawingBufferWidth(): number {
        throw new Error();
    }

    activeTexture(texture: GLEnumTexture): void {
        GLES20.glActiveTexture(texture);
    }
    attachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void {
        GLES20.glAttachShader(getIdOrZero(program), getIdOrZero(shader));
    }
    bindAttribLocation(program: NSWebGLProgram | null, index: number, name: string): void {
        GLES20.glBindAttribLocation(getIdOrZero(program), index, name);
    }
    bindBuffer(
        target: GLEnumBufferType,
        buffer: NSWebGLBuffer | null,
    ): void {
        GLES20.glBindBuffer(target, getIdOrZero(buffer));
    }
    bindFramebuffer(
        target: GLEnumFramebuffer,
        framebuffer: NSWebGLFramebuffer | null,
    ): void {
        GLES20.glBindFramebuffer(target, getIdOrZero(framebuffer));
    }
    bindRenderbuffer(
        target: GLEnumRenderbuffer,
        renderbuffer: NSWebGLRenderbuffer | null,
    ): void {
        GLES20.glBindRenderbuffer(target, getIdOrZero(renderbuffer));
    }
    bindTexture(target: GLEnumTexture, texture: NSWebGLTexture | null): void {
        GLES20.glBindTexture(target, getIdOrZero(texture));
    }
    blendColor(red: number, green: number, blue: number, alpha: number): void {
        GLES20.glBlendColor(red, green, blue, alpha);
    }
    blendEquation(mode: GLEnumBlendingEquation): void {
        GLES20.glBlendEquation(mode);
    }
    blendEquationSeparate(modeRGB: GLEnumBlendingEquation, modeAlpha: GLEnumBlendingEquation): void {
        GLES20.glBlendEquationSeparate(modeRGB, modeAlpha);
    }
    blendFunc(sfactor: GLEnumBlendingMode | GLEnumBlendingFunction, dfactor: GLEnumBlendingMode | GLEnumBlendingFunction): void {
        GLES20.glBlendFunc(sfactor, dfactor);
    }
    blendFuncSeparate(srcRGB: GLEnumBlendingMode | GLEnumBlendingFunction, dstRGB: GLEnumBlendingMode | GLEnumBlendingFunction, srcAlpha: GLEnumBlendingMode | GLEnumBlendingFunction, dstAlpha: GLEnumBlendingMode | GLEnumBlendingFunction): void {
        GLES20.glBlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
    }
    bufferData(
        target: GLEnumBufferType,
        size: number,
        usage: GLEnumBufferUsage,
    ): void;
    bufferData(
        target: GLEnumBufferType,
        srcData: ArrayBuffer,
        usage: GLEnumBufferUsage,
    ): void;
    bufferData(
        target: GLEnumBufferType,
        srcData: ArrayBufferView,
        usage: GLEnumBufferUsage,
    ): void;
    bufferData(
        target: GLEnumBufferType,
        srcData: null,
        usage: GLEnumBufferUsage,
    ): void;
    // NSWebGL2
    // bufferData(
    //     target: GLEnumBufferType, srcData: ArrayBufferView, usage: number,
    //     srcOffset: number, length: number,
    // ): void;
    bufferData(
        target: GLEnumBufferType,
        srcDataOrSize: number | ArrayBufferView | ArrayBuffer | null,
        usage: GLEnumBufferUsage,
        // srcOffset?: number, length?: number,
    ): void {
        if (!srcDataOrSize) {
            return GLES20.glBufferData(
                target, 0,
                java.nio.BaseByteBuffer.allocate(0), usage);
        }

        if (typeof srcDataOrSize === 'number') {
            return GLES20.glBufferData(
                target, srcDataOrSize,
                java.nio.BaseByteBuffer.allocate(srcDataOrSize), usage);
        }

        return GLES20.glBufferData(
            target, srcDataOrSize.byteLength,
            toByteBuffer(srcDataOrSize), usage);
    }
    bufferSubData(
        target: GLEnumBufferType,
        offset: number,
        data: ArrayBufferView | ArrayBuffer,
    ): void {
        return GLES20.glBufferSubData(
            target, offset, data.byteLength,
            toByteBuffer(data));
    }
    checkFramebufferStatus(target: GLEnumFramebuffer): number {
        return GLES20.glCheckFramebufferStatus(target);
    }
    clear(mask: GLEnumBufferBit): void {
        GLES20.glClear(mask);
    }
    clearColor(red: number, green: number, blue: number, alpha: number): void {
        GLES20.glClearColor(red, green, blue, alpha);
    }
    clearDepth(depth: number): void {
        GLES20.glClearDepthf(depth);
    }
    clearStencil(s: number): void {
        GLES20.glClearStencil(s);
    }
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void {
        GLES20.glColorMask(red, green, blue, alpha);
    }
    compileShader(shader: NSWebGLShader | null): void {
        GLES20.glCompileShader(getIdOrZero(shader));
    }
    compressedTexImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: number, width: number, height: number,
        border: number, data: ArrayBufferView,
    ): void {
        GLES20.glCompressedTexImage2D(
            target, level, internalformat, width, height,
            border, data.byteLength, toByteBuffer(data),
        );
    }
    compressedTexSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        width: number, height: number, format: number, data: ArrayBufferView,
    ): void {
        GLES20.glCompressedTexSubImage2D(
            target, level, xoffset, yoffset, width, height,
            format, data.byteLength, toByteBuffer(data),
        );
    }
    copyTexImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent,
        x: number, y: number, width: number, height: number, border: number,
    ): void {
        GLES20.glCopyTexImage2D(
            target, level, internalformat, x, y, width, height, border);
    }
    copyTexSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        x: number, y: number, width: number, height: number,
    ): void {
        GLES20.glCopyTexSubImage2D(
            target, level, xoffset, yoffset, x, y, width, height);
    }
    createBuffer(): NSWebGLBuffer | null {
        const holder = java.nio.IntBuffer.allocate(1);
        GLES20.glGenBuffers(1, holder);

        return new NSWebGLBuffer(holder.get(0));
    }
    createFramebuffer(): NSWebGLFramebuffer | null {
        const holder = java.nio.IntBuffer.allocate(1);
        GLES20.glGenFramebuffers(1, holder);

        return new NSWebGLFramebuffer(holder.get(0));
    }
    createProgram(): NSWebGLProgram | null {
        return new NSWebGLProgram(GLES20.glCreateProgram());
    }
    createRenderbuffer(): NSWebGLRenderbuffer | null {
        const holder = java.nio.IntBuffer.allocate(1);
        GLES20.glGenRenderbuffers(1, holder);

        return new NSWebGLRenderbuffer(holder.get(0));
    }
    createShader(type: GLEnumShaderType): NSWebGLShader | null {
        return new NSWebGLShader(GLES20.glCreateShader(type));
    }
    createTexture(): NSWebGLTexture | null {
        const holder = java.nio.IntBuffer.allocate(1);
        GLES20.glGenTextures(1, holder);

        return new NSWebGLTexture(holder.get(0));
    }
    cullFace(mode: number): void {
        GLES20.glCullFace(mode);
    }
    deleteBuffer(buffer: NSWebGLBuffer | null): void {
        if (!buffer) return;

        const holder = java.nio.IntBuffer.allocate(1);
        holder.put(0, getIdOrZero(buffer));

        GLES20.glDeleteBuffers(0, holder);
    }
    deleteFramebuffer(framebuffer: NSWebGLFramebuffer | null): void {
        if (!framebuffer) return;

        const holder = java.nio.IntBuffer.allocate(1);
        holder.put(0, getIdOrZero(framebuffer));

        GLES20.glDeleteFramebuffers(0, holder);
    }
    deleteProgram(program: NSWebGLProgram | null): void {
        GLES20.glDeleteProgram(getIdOrZero(program));
    }
    deleteRenderbuffer(renderbuffer: NSWebGLRenderbuffer | null): void {
        if (!renderbuffer) return;

        const holder = java.nio.IntBuffer.allocate(1);
        holder.put(0, getIdOrZero(renderbuffer));

        GLES20.glDeleteRenderbuffers(0, holder);
    }
    deleteShader(shader: NSWebGLShader | null): void {
        GLES20.glDeleteShader(getIdOrZero(shader));
    }
    deleteTexture(texture: NSWebGLTexture | null): void {
        if (!texture) return;

        const textureIds = java.nio.IntBuffer.allocate(1);
        textureIds.put(0, getIdOrZero(texture));

        GLES20.glDeleteTextures(1, textureIds);
    }
    depthFunc(func: number): void {
        GLES20.glDepthFunc(func);
    }
    depthMask(flag: boolean): void {
        GLES20.glDepthMask(flag);
    }
    depthRange(zNear: number, zFar: number): void {
        GLES20.glDepthRangef(zNear, zFar);
    }
    detachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void {
        GLES20.glDetachShader(getIdOrZero(program), getIdOrZero(shader));
    }
    disable(cap: GLEnumEnable): void {
        GLES20.glDisable(cap);
    }
    disableVertexAttribArray(index: number): void {
        GLES20.glDisableVertexAttribArray(index);
    }
    drawArrays(mode: GLEnumPrimitive, first: number, count: number): void {
        GLES20.glDrawArrays(mode, first, count);
    }
    drawElements(mode: GLEnumPrimitive, count: number, type: number, offset: number): void {
        GLES20.glDrawElements(mode, count, type, offset);
    }
    enable(cap: GLEnumEnable): void {
        GLES20.glEnable(cap);
    }
    enableVertexAttribArray(index: number): void {
        GLES20.glEnableVertexAttribArray(index);
    }
    finish(): void {
        GLES20.glFinish();
    }
    flush(): void {
        GLES20.glFlush();
    }
    framebufferRenderbuffer(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, renderbuffertarget: GLEnumRenderbuffer,
        renderbuffer: NSWebGLRenderbuffer | null,
    ): void {
        GLES20.glFramebufferRenderbuffer(
            target, attachment, renderbuffertarget, getIdOrZero(renderbuffer),
        );
    }
    framebufferTexture2D(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, textarget: GLEnumTexTarget | GLEnumTexCubeMap, texture: NSWebGLTexture | null,
        level: number,
    ): void {
        GLES20.glFramebufferTexture2D(
            target, attachment, textarget, getIdOrZero(texture), level,
        );
    }
    frontFace(mode: GLEnumFaceDirection): void {
        GLES20.glFrontFace(mode);
    }
    generateMipmap(target: GLEnumTexTarget): void {
        GLES20.glGenerateMipmap(target);
    }
    getActiveAttrib(program: NSWebGLProgram | null, index: number): WebGLActiveInfo | null {
        if (!program) return null;

        const sizeBuffer = java.nio.IntBuffer.allocate(1);
        const typeBuffer = java.nio.IntBuffer.allocate(1);

        const name = GLES20.glGetActiveAttrib(getIdOrZero(program), index,
            sizeBuffer, typeBuffer);

        return {
            name,
            size: sizeBuffer.get(0),
            type: typeBuffer.get(0),
        };
    }
    getActiveUniform(
        program: NSWebGLProgram | null, index: number,
    ): { name: string; size: number; type: GLEnumUniformType; } | null {
        if (!program) return null;

        const sizeBuffer = java.nio.IntBuffer.allocate(1);
        const typeBuffer = java.nio.IntBuffer.allocate(1);

        const name = GLES20.glGetActiveUniform(getIdOrZero(program), index,
            sizeBuffer, typeBuffer);

        return {
            name,
            size: sizeBuffer.get(0),
            type: typeBuffer.get(0),
        };
    }
    getAttachedShaders(program: NSWebGLProgram | null): NSWebGLShader[] | null {
        if (!program) return null;

        const countBuffer = java.nio.IntBuffer.allocate(1);
        const shadersBuffer = java.nio.IntBuffer.allocate(100);
        GLES20.glGetAttachedShaders(getIdOrZero(program),
            100, countBuffer, shadersBuffer);

        const result: NSWebGLShader[] = [];
        for (let i = 0; i < countBuffer.get(0); i++) {
            result[i] = new NSWebGLShader(shadersBuffer.get(i));
        }

        return result;
    }
    getAttribLocation(program: NSWebGLProgram | null, name: string): number {
        if (!program) return -1;

        return GLES20.glGetAttribLocation(getIdOrZero(program), name);
    }
    protected getBufferParameteriv(target: GLEnumBufferType, pname: GLEnumBufferParam): number {
        const buffer = java.nio.IntBuffer.allocate(1);
        GLES20.glGetBufferParameteriv(target, pname, buffer);

        return buffer.get(0);
    }
    getError(): number {
        return GLES20.glGetError();
    }
    // getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    // getExtension(
    //     extensionName: "EXT_texture_filter_anisotropic",
    // ): EXT_texture_filter_anisotropic | null;
    // getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    // getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    // getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    // getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    // getExtension(extensionName: "WEBGL_color_buffer_float"): NSWEBGL_color_buffer_float | null;
    // getExtension(
    //     extensionName: "WEBGL_compressed_texture_astc",
    // ): NSWEBGL_compressed_texture_astc | null;
    // getExtension(
    //     extensionName: "WEBGL_compressed_texture_s3tc_srgb"
    // ): NSWEBGL_compressed_texture_s3tc_srgb | null;
    // getExtension(extensionName: "WEBGL_debug_shaders"): NSWEBGL_debug_shaders | null;
    // getExtension(extensionName: "WEBGL_draw_buffers"): NSWEBGL_draw_buffers | null;
    // getExtension(extensionName: "WEBGL_lose_context"): NSWEBGL_lose_context | null;
    // getExtension(extensionName: "WEBGL_depth_texture"): NSWEBGL_depth_texture | null;
    // getExtension(extensionName: "WEBGL_debug_renderer_info"): NSWEBGL_debug_renderer_info | null;
    // getExtension(
    //     extensionName: "WEBGL_compressed_texture_s3tc",
    // ): NSWEBGL_compressed_texture_s3tc | null;
    // getExtension(
    //     extensionName: "OES_texture_half_float_linear",
    // ): OES_texture_half_float_linear | null;
    // getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    // getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    // getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    // getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    // getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    // getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    // getExtension(extensionName: string): any {
    //     GLES20.glgetExtension();
    // }
    protected getFramebufferAttachmentParameteriv(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment,
        pname: GLEnumFramebufferParam,
    ): number {
        const buffer = java.nio.IntBuffer.allocate(1);
        GLES20.glGetFramebufferAttachmentParameteriv(
            target, attachment, pname, buffer,
        );

        return buffer.get(0);
    }
    protected getParameteriv(pname: GLEnumParam | GLEnumEnable): number;
    protected getParameteriv(pname: GLEnumParam | GLEnumEnable, size: number): number[];
    protected getParameteriv(pname: GLEnumParam | GLEnumEnable, size?: number): number | number[] {
        const buffer = java.nio.IntBuffer.allocate(size != null ? size : 1);
        GLES20.glGetIntegerv(pname, buffer);

        return size != null ? fromIntBuffer(buffer) : buffer.get(0);
    }
    protected getParameterfv(pname: GLEnumParam | GLEnumEnable): number;
    protected getParameterfv(pname: GLEnumParam | GLEnumEnable, size: number): number[];
    protected getParameterfv(pname: GLEnumParam | GLEnumEnable, size?: number): number | number[] {
        const buffer = java.nio.FloatBuffer.allocate(size != null ? size : 1);
        GLES20.glGetFloatv(pname, buffer);

        return size != null ? fromFloatBuffer(buffer) : buffer.get(0);
    }
    getProgramInfoLog(program: NSWebGLProgram | null): string | null {
        return GLES20.glGetProgramInfoLog(getIdOrZero(program));
    }
    protected getProgramParameteriv(program: NSWebGLProgram | null, pname: GLEnumProgramParam): number {
        const buffer = java.nio.IntBuffer.allocate(1);
        GLES20.glGetProgramiv(
            getIdOrZero(program), pname, buffer,
        );

        return buffer.get(0);
    }
    protected getRenderbufferParameteriv(
        target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam,
    ): number {
        const buffer = java.nio.IntBuffer.allocate(1);
        GLES20.glGetRenderbufferParameteriv(target, pname, buffer);

        return buffer.get(0);
    }
    getShaderInfoLog(shader: NSWebGLShader | null): string | null {
        return GLES20.glGetShaderInfoLog(getIdOrZero(shader));
    }
    protected getShaderParameteriv(shader: NSWebGLShader | null, pname: GLEnumShaderParam): any {
        const buffer = java.nio.IntBuffer.allocate(1);
        GLES20.glGetShaderiv(getIdOrZero(shader), pname, buffer);

        return buffer.get(0);
    }
    getShaderPrecisionFormat(
        shadertype: number, precisiontype: number,
    ): WebGLShaderPrecisionFormat | null {
        const rangeBuffer = java.nio.IntBuffer.allocate(2);
        const precisionBuffer = java.nio.IntBuffer.allocate(1);
        GLES20.glGetShaderPrecisionFormat(shadertype, precisiontype,
            rangeBuffer, precisionBuffer);
        return {
            rangeMin: rangeBuffer.get(0),
            rangeMax: rangeBuffer.get(1),
            precision: precisionBuffer.get(0),
        };
    }
    getShaderSource(shader: NSWebGLShader | null): string | null {
        return GLES20.glGetShaderSource(getIdOrZero(shader));
    }
    // getSupportedExtensions(): string[] | null {
    //     GLES20.glgetSupportedExtensions();
    // }
    protected getTexParameteriv(target: GLEnumTexTarget, pname: GLEnumTexParam): number {
        const buffer = java.nio.IntBuffer.allocate(1);
        GLES20.glGetTexParameteriv(target, pname, buffer);

        return buffer.get(0);
    }
    protected getUniformiv(program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null, size: number): number[] {
        const buffer = java.nio.IntBuffer.allocate(size);
        GLES20.glGetUniformiv(getIdOrZero(program), getIdOrZero(location), buffer);

        return fromFloatBuffer(buffer);
    }
    protected getUniformfv(program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null, size: number): number[] {
        const buffer = java.nio.FloatBuffer.allocate(size);
        GLES20.glGetUniformfv(getIdOrZero(program), getIdOrZero(location), buffer);

        return fromFloatBuffer(buffer);
    }
    getUniformLocation(program: NSWebGLProgram | null, name: string): NSWebGLUniformLocation | null {
        if (!program) return null;

        const uniformLocation = GLES20.glGetUniformLocation(getIdOrZero(program), name);

        const sizeBuffer = java.nio.IntBuffer.allocate(1);
        const typeBuffer = java.nio.IntBuffer.allocate(1);
        const length = this.getProgramParameteriv(program, GLEnumProgramParam.ACTIVE_UNIFORMS)!;
        for (let i = 0; i < length; i++) {
            let info = this.getActiveUniform(program, i)!;
            info.name = info.name.replace(/\[0\]$/, '');
            for (let index = 0; index < info.size; index++) {
                const uniformName = `${info.name}[${index}]`;

                if (name === uniformName || name === info.name) {
                    return new NSWebGLUniformLocation(uniformLocation, info.type);
                }
            }
        }
        return null;
    }
    getVertexAttribiv(index: number, pname: GLEnumVertexAttrib): number;
    getVertexAttribiv(index: number, pname: GLEnumVertexAttrib, size: number): number[];
    getVertexAttribiv(index: number, pname: GLEnumVertexAttrib, size?: number): number | number[] {
        const buffer = java.nio.IntBuffer.allocate(size != null ? size : 1);
        GLES20.glGetVertexAttribiv(index, pname, buffer);

        return size != null ? fromIntBuffer(buffer) : buffer.get(0);
    }
    hint(target: number, mode: GLEnumHintMode): void {
        GLES20.glHint(target, mode);
    }
    isBuffer(buffer: NSWebGLBuffer | null): boolean {
        return GLES20.glIsBuffer(getIdOrZero(buffer));
    }
    isEnabled(cap: number): boolean {
        return GLES20.glIsEnabled(cap);
    }
    isFramebuffer(framebuffer: NSWebGLFramebuffer | null): boolean {
        return GLES20.glIsFramebuffer(getIdOrZero(framebuffer));
    }
    isProgram(program: NSWebGLProgram | null): boolean {
        return GLES20.glIsProgram(getIdOrZero(program));
    }
    isRenderbuffer(renderbuffer: NSWebGLRenderbuffer | null): boolean {
        return GLES20.glIsRenderbuffer(getIdOrZero(renderbuffer));
    }
    isShader(shader: NSWebGLShader | null): boolean {
        return GLES20.glIsShader(getIdOrZero(shader));
    }
    isTexture(texture: NSWebGLTexture | null): boolean {
        return GLES20.glIsTexture(getIdOrZero(texture));
    }
    lineWidth(width: number): void {
        GLES20.glLineWidth(width);
    }
    linkProgram(program: NSWebGLProgram | null): void {
        GLES20.glLinkProgram(getIdOrZero(program));
    }
    pixelStorei(pname: GLEnumPixelStore, param: number): void {
        GLES20.glPixelStorei(pname, param);
    }
    polygonOffset(factor: number, units: number): void {
        GLES20.glPolygonOffset(factor, units);
    }
    readPixelsCore(
        x: number, y: number, width: number, height: number, format: GLEnumPixelFormat,
        type: GLEnumPixelType, pixels: ArrayBufferView, bufferSize: number,
    ): void {
        const buffer = java.nio.ByteBuffer.allocate(bufferSize);

        GLES20.glReadPixels(
            x, y, width, height, format, type, buffer,
        );

        fromByteBuffer(buffer, pixels);
    }
    renderbufferStorage(
        target: GLEnumRenderbuffer, internalformat: GLEnumRenderbufferInternalFormat,
        width: number, height: number,
    ): void {
        GLES20.glRenderbufferStorage(
            target, internalformat, width, height,
        );
    }
    sampleCoverage(value: number, invert: boolean): void {
        GLES20.glSampleCoverage(value, invert);
    }
    scissor(x: number, y: number, width: number, height: number): void {
        GLES20.glScissor(x, y, width, height);
    }
    shaderSource(shader: NSWebGLShader | null, source: string): void {
        GLES20.glShaderSource(getIdOrZero(shader), source);
    }
    stencilFunc(func: number, ref: number, mask: number): void {
        GLES20.glStencilFunc(func, ref, mask);
    }
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void {
        GLES20.glStencilFuncSeparate(face, func, ref, mask);
    }
    stencilMask(mask: number): void {
        GLES20.glStencilMask(mask);
    }
    stencilMaskSeparate(face: number, mask: number): void {
        GLES20.glStencilMaskSeparate(face, mask);
    }
    stencilOp(fail: number, zfail: number, zpass: number): void {
        GLES20.glStencilOp(fail, zfail, zpass);
    }
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void {
        GLES20.glStencilOpSeparate(face, fail, zfail, zpass);
    }
    texImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent,
        width: number, height: number, border: number, format: GLEnumColorComponent, type: GLEnumPixelType,
        pixels: ArrayBufferView,
    ): void {
        GLES20.glTexImage2D(
            target, level, internalformat, width, height, border, format, type, toByteBuffer(pixels),
        );
    }
    texParameterf(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void {
        GLES20.glTexParameterf(target, pname, param);
    }
    texParameteri(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void {
        GLES20.glTexParameteri(target, pname, param);
    }
    texSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        width: number, height: number, format: GLEnumColorComponent, type: GLEnumPixelType,
        pixels: ArrayBufferView,
    ) {
        GLES20.glTexSubImage2D(
            target, level, xoffset, yoffset, width, height, format, type, toByteBuffer(pixels),
        );
    }
    uniform1f(location: NSWebGLUniformLocation | null, x: number): void {
        GLES20.glUniform1f(getIdOrZero(location), x);
    }
    uniform1fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void {
        GLES20.glUniform1fv(getIdOrZero(location), v.length, toFloatBuffer(v));
    }
    uniform1i(location: NSWebGLUniformLocation | null, x: number): void {
        GLES20.glUniform1i(getIdOrZero(location), x);
    }
    uniform1iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void {
        GLES20.glUniform1iv(getIdOrZero(location), v.length, toIntBuffer(v));
    }
    uniform2f(location: NSWebGLUniformLocation | null, x: number, y: number): void {
        GLES20.glUniform2f(getIdOrZero(location), x, y);
    }
    uniform2fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void {
        GLES20.glUniform2fv(getIdOrZero(location), v.length, toFloatBuffer(v));
    }
    uniform2i(location: NSWebGLUniformLocation | null, x: number, y: number): void {
        GLES20.glUniform2i(getIdOrZero(location), x, y);
    }
    uniform2iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void {
        GLES20.glUniform2iv(getIdOrZero(location), v.length, toIntBuffer(v));
    }
    uniform3f(location: NSWebGLUniformLocation | null, x: number, y: number, z: number): void {
        GLES20.glUniform3f(getIdOrZero(location), x, y, z);
    }
    uniform3fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void {
        GLES20.glUniform3fv(getIdOrZero(location), v.length, toFloatBuffer(v));
    }
    uniform3i(location: NSWebGLUniformLocation | null, x: number, y: number, z: number): void {
        GLES20.glUniform3i(getIdOrZero(location), x, y, z);
    }
    uniform3iv(
        location: NSWebGLUniformLocation, v: Int32Array | number[],
    ): void {
        GLES20.glUniform3iv(getIdOrZero(location), v.length, toIntBuffer(v));
    }
    uniform4f(location: NSWebGLUniformLocation | null,
        x: number, y: number, z: number, w: number): void {
        GLES20.glUniform4f(getIdOrZero(location), x, y, z, w);
    }
    uniform4fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void {
        GLES20.glUniform4fv(getIdOrZero(location), v.length, toFloatBuffer(v));
    }
    uniform4i(location: NSWebGLUniformLocation | null,
        x: number, y: number, z: number, w: number
    ): void {
        GLES20.glUniform4i(getIdOrZero(location), x, y, z, w);
    }
    uniform4iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void {
        GLES20.glUniform4iv(getIdOrZero(location), v.length, toIntBuffer(v));
    }
    uniformMatrix2fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void {
        GLES20.glUniformMatrix2fv(
            getIdOrZero(location), value.length, transpose, toFloatBuffer(value),
        );
    }
    uniformMatrix3fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void {
        GLES20.glUniformMatrix3fv(
            getIdOrZero(location), value.length, transpose, toFloatBuffer(value));
    }
    uniformMatrix4fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void {
        GLES20.glUniformMatrix4fv(
            getIdOrZero(location), value.length, transpose, toFloatBuffer(value),
        );
    }
    useProgram(program: NSWebGLProgram | null): void {
        GLES20.glUseProgram(getIdOrZero(program));
    }
    validateProgram(program: NSWebGLProgram | null): void {
        GLES20.glValidateProgram(getIdOrZero(program));
    }
    vertexAttrib1f(indx: number, x: number): void {
        GLES20.glVertexAttrib1f(indx, x);
    }
    vertexAttrib1fv(indx: number, values: Float32Array | number[]): void {
        GLES20.glVertexAttrib1fv(indx, toFloatBuffer(values));
    }
    vertexAttrib2f(indx: number, x: number, y: number): void {
        GLES20.glVertexAttrib2f(indx, x, y);
    }
    vertexAttrib2fv(indx: number, values: Float32Array | number[]): void {
        GLES20.glVertexAttrib2fv(indx, toFloatBuffer(values));
    }
    vertexAttrib3f(indx: number, x: number, y: number, z: number): void {
        GLES20.glVertexAttrib3f(indx, x, y, z);
    }
    vertexAttrib3fv(indx: number, values: Float32Array | number[]): void {
        GLES20.glVertexAttrib3fv(indx, toFloatBuffer(values));
    }
    vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void {
        GLES20.glVertexAttrib4f(indx, x, y, z, w);
    }
    vertexAttrib4fv(indx: number, values: Float32Array | number[]): void {
        GLES20.glVertexAttrib4fv(indx, toFloatBuffer(values));
    }
    vertexAttribPointer(
        indx: number, size: number, type: number, normalized: boolean, stride: number,
        offset: number,
    ): void {
        GLES20.glVertexAttribPointer(
            indx, size, type, normalized, stride, offset,
        );
    }
    viewport(x: number, y: number, width: number, height: number): void {
        GLES20.glViewport(x, y, width, height);
    }
}
