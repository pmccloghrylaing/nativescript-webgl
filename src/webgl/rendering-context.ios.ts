import 'tns-platform-declarations/ios';

import { fromFloatBuffer, fromIntBuffer, toFloatBuffer, toIntBuffer } from '../helpers.ios';
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

export class NSWebGLRenderingContext extends NSWebGLRenderingContextBase {
    get drawingBufferHeight(): number {
        throw new Error();
    }
    get drawingBufferWidth(): number {
        throw new Error();
    }

    activeTexture(texture: GLEnumTexture): void {
        glActiveTexture(texture);
    }
    attachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void {
        glAttachShader(getIdOrZero(program), getIdOrZero(shader));
    }
    bindAttribLocation(program: NSWebGLProgram | null, index: number, name: string): void {
        glBindAttribLocation(getIdOrZero(program), index, name);
    }
    bindBuffer(
        target: GLEnumBufferType,
        buffer: NSWebGLBuffer | null,
    ): void {
        glBindBuffer(target, getIdOrZero(buffer));
    }
    bindFramebuffer(
        target: GLEnumFramebuffer,
        framebuffer: NSWebGLFramebuffer | null,
    ): void {
        glBindFramebuffer(target, getIdOrZero(framebuffer));
    }
    bindRenderbuffer(
        target: GLEnumRenderbuffer,
        renderbuffer: NSWebGLRenderbuffer | null,
    ): void {
        glBindRenderbuffer(target, getIdOrZero(renderbuffer));
    }
    bindTexture(target: GLEnumTexture, texture: NSWebGLTexture | null): void {
        glBindTexture(target, getIdOrZero(texture));
    }
    blendColor(red: number, green: number, blue: number, alpha: number): void {
        glBlendColor(red, green, blue, alpha);
    }
    blendEquation(mode: GLEnumBlendingEquation): void {
        glBlendEquation(mode);
    }
    blendEquationSeparate(modeRGB: GLEnumBlendingEquation, modeAlpha: GLEnumBlendingEquation): void {
        glBlendEquationSeparate(modeRGB, modeAlpha);
    }
    blendFunc(sfactor: GLEnumBlendingMode | GLEnumBlendingFunction, dfactor: GLEnumBlendingMode | GLEnumBlendingFunction): void {
        glBlendFunc(sfactor, dfactor);
    }
    blendFuncSeparate(srcRGB: GLEnumBlendingMode | GLEnumBlendingFunction, dstRGB: GLEnumBlendingMode | GLEnumBlendingFunction, srcAlpha: GLEnumBlendingMode | GLEnumBlendingFunction, dstAlpha: GLEnumBlendingMode | GLEnumBlendingFunction): void {
        glBlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
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
            return glBufferData(
                target, 0,
                interop.alloc(0), usage);
        }

        if (typeof srcDataOrSize === 'number') {
            return glBufferData(
                target, srcDataOrSize,
                interop.alloc(srcDataOrSize),
                usage);
        }

        return glBufferData(
            target, srcDataOrSize.byteLength,
            interop.handleof(srcDataOrSize), usage);
    }
    bufferSubData(
        target: GLEnumBufferType,
        offset: number,
        data: ArrayBufferView | ArrayBuffer,
    ): void {
        return glBufferSubData(
            target, offset, data.byteLength,
            interop.handleof(data));
    }
    checkFramebufferStatus(target: GLEnumFramebuffer): number {
        return glCheckFramebufferStatus(target);
    }
    clear(mask: GLEnumBufferBit): void {
        glClear(mask);
    }
    clearColor(red: number, green: number, blue: number, alpha: number): void {
        glClearColor(red, green, blue, alpha);
    }
    clearDepth(depth: number): void {
        glClearDepthf(depth);
    }
    clearStencil(s: number): void {
        glClearStencil(s);
    }
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void {
        glColorMask(red ? 1 : 0, green ? 1 : 0, blue ? 1 : 0, alpha ? 1 : 0);
    }
    compileShader(shader: NSWebGLShader | null): void {
        glCompileShader(getIdOrZero(shader));
    }
    compressedTexImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: number, width: number, height: number,
        border: number, data: ArrayBufferView,
    ): void {
        glCompressedTexImage2D(
            target, level, internalformat, width, height,
            border, data.byteLength, interop.handleof(data),
        );
    }
    compressedTexSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        width: number, height: number, format: number, data: ArrayBufferView,
    ): void {
        glCompressedTexSubImage2D(
            target, level, xoffset, yoffset, width, height,
            format, data.byteLength, interop.handleof(data),
        );
    }
    copyTexImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent,
        x: number, y: number, width: number, height: number, border: number,
    ): void {
        glCopyTexImage2D(
            target, level, internalformat, x, y, width, height, border);
    }
    copyTexSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        x: number, y: number, width: number, height: number,
    ): void {
        glCopyTexSubImage2D(
            target, level, xoffset, yoffset, x, y, width, height);
    }
    createBuffer(): NSWebGLBuffer | null {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));
        glGenBuffers(1, pointer);

        return new NSWebGLBuffer(new interop.Reference(interop.types.int32, pointer).value);
    }
    createFramebuffer(): NSWebGLFramebuffer | null {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));
        glGenFramebuffers(1, pointer);

        return new NSWebGLFramebuffer(
            new interop.Reference(interop.types.int32, pointer).value,
        );
    }
    createProgram(): NSWebGLProgram | null {
        return new NSWebGLProgram(glCreateProgram());
    }
    createRenderbuffer(): NSWebGLRenderbuffer | null {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));
        glGenRenderbuffers(1, pointer);

        return new NSWebGLRenderbuffer(
            new interop.Reference(interop.types.int32, pointer).value,
        );
    }
    createShader(type: GLEnumShaderType): NSWebGLShader | null {
        return new NSWebGLShader(glCreateShader(type));
    }
    createTexture(): NSWebGLTexture | null {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));
        glGenTextures(1, pointer);

        return new NSWebGLTexture(
            new interop.Reference(interop.types.int32, pointer).value,
        );
    }
    cullFace(mode: number): void {
        glCullFace(mode);
    }
    deleteBuffer(buffer: NSWebGLBuffer | null): void {
        if (!buffer) return;

        const ref = new interop.Reference(interop.types.int32, getIdOrZero(buffer));

        glDeleteBuffers(0, ref);
    }
    deleteFramebuffer(framebuffer: NSWebGLFramebuffer | null): void {
        if (!framebuffer) return;

        const ref = new interop.Reference(interop.types.int32, getIdOrZero(framebuffer));

        glDeleteFramebuffers(0, ref);
    }
    deleteProgram(program: NSWebGLProgram | null): void {
        glDeleteProgram(getIdOrZero(program));
    }
    deleteRenderbuffer(renderbuffer: NSWebGLRenderbuffer | null): void {
        if (!renderbuffer) return;

        const ref = new interop.Reference(interop.types.int32, getIdOrZero(renderbuffer));

        glDeleteRenderbuffers(0, ref);
    }
    deleteShader(shader: NSWebGLShader | null): void {
        glDeleteShader(getIdOrZero(shader));
    }
    deleteTexture(texture: NSWebGLTexture | null): void {
        if (!texture) return;

        const ref = new interop.Reference(interop.types.int32, getIdOrZero(texture));

        glDeleteTextures(1, ref);
    }
    depthFunc(func: number): void {
        glDepthFunc(func);
    }
    depthMask(flag: boolean): void {
        glDepthMask(flag ? 1 : 0);
    }
    depthRange(zNear: number, zFar: number): void {
        glDepthRangef(zNear, zFar);
    }
    detachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void {
        glDetachShader(getIdOrZero(program), getIdOrZero(shader));
    }
    disable(cap: GLEnumEnable): void {
        glDisable(cap);
    }
    disableVertexAttribArray(index: number): void {
        glDisableVertexAttribArray(index);
    }
    drawArrays(mode: GLEnumPrimitive, first: number, count: number): void {
        glDrawArrays(mode, first, count);
    }
    drawElements(mode: GLEnumPrimitive, count: number, type: number, offset: number): void {
        const ref = new interop.Reference(interop.types.int32, offset);

        glDrawElements(mode, count, type, ref);
    }
    enable(cap: GLEnumEnable): void {
        glEnable(cap ? 1 : 0);
    }
    enableVertexAttribArray(index: number): void {
        glEnableVertexAttribArray(index);
    }
    finish(): void {
        glFinish();
    }
    flush(): void {
        glFlush();
    }
    framebufferRenderbuffer(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, renderbuffertarget: GLEnumRenderbuffer,
        renderbuffer: NSWebGLRenderbuffer | null,
    ): void {
        glFramebufferRenderbuffer(
            target, attachment, renderbuffertarget, getIdOrZero(renderbuffer),
        );
    }
    framebufferTexture2D(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, textarget: GLEnumTexTarget | GLEnumTexCubeMap, texture: NSWebGLTexture | null,
        level: number,
    ): void {
        glFramebufferTexture2D(
            target, attachment, textarget, getIdOrZero(texture), level,
        );
    }
    frontFace(mode: GLEnumFaceDirection): void {
        glFrontFace(mode);
    }
    generateMipmap(target: GLEnumTexTarget): void {
        glGenerateMipmap(target);
    }
    getActiveAttrib(program: NSWebGLProgram | null, index: number): WebGLActiveInfo | null {
        if (!program) return null;

        const lengthPointer = interop.alloc(interop.sizeof(interop.types.int32));
        const sizePointer = interop.alloc(interop.sizeof(interop.types.int32));
        const typePointer = interop.alloc(interop.sizeof(interop.types.int32));
        const bufSize = 20;
        const namePointer = interop.alloc(interop.sizeof(interop.types.unichar) * bufSize);

        glGetActiveAttrib(
            getIdOrZero(program), index, bufSize,
            lengthPointer, sizePointer, typePointer,
            new interop.Reference(interop.types.unichar, namePointer).value,
        );

        const length = new interop.Reference(interop.types.int32, lengthPointer).value;

        return {
            name: new interop.Reference(interop.types.unichar, namePointer).value,
            size: new interop.Reference(interop.types.int32, sizePointer).value,
            type: new interop.Reference(interop.types.int32, typePointer).value,
        };
    }
    getActiveUniform(
        program: NSWebGLProgram | null, index: number,
    ): { name: string; size: number; type: GLEnumUniformType; } | null {
        if (!program) return null;

        const lengthPointer = interop.alloc(interop.sizeof(interop.types.int32));
        const sizePointer = interop.alloc(interop.sizeof(interop.types.int32));
        const typePointer = interop.alloc(interop.sizeof(interop.types.int32));
        const bufSize = 50;
        const namePointer = interop.alloc(interop.sizeof(interop.types.unichar) * bufSize);

        glGetActiveUniform(getIdOrZero(program), index, bufSize,
            lengthPointer, sizePointer, typePointer,
            new interop.Reference(interop.types.unichar, namePointer).value,
        );

        const length = new interop.Reference(interop.types.int32, lengthPointer).value;

        return {
            name: NSString.stringWithUTF8String(namePointer as any).toString(),
            size: new interop.Reference(interop.types.int32, sizePointer).value,
            type: new interop.Reference(interop.types.int32, typePointer).value,
        };
    }
    getAttachedShaders(program: NSWebGLProgram | null): NSWebGLShader[] | null {
        if (!program) return null;

        const countPointer = interop.alloc(interop.sizeof(interop.types.int32));
        const shadersPointer = interop.alloc(100 * interop.sizeof(interop.types.int32));

        glGetAttachedShaders(getIdOrZero(program),
            100, countPointer, shadersPointer);

        const count = new interop.Reference(interop.types.int32, countPointer).value;

        const result: NSWebGLShader[] = [];
        for (let i = 0; i < count; i++) {
            result[i] = new NSWebGLShader(
                new interop.Reference(
                    interop.types.int32,
                    shadersPointer.add(i * interop.sizeof(interop.types.int32)),
                ).value);
        }

        return result;
    }
    getAttribLocation(program: NSWebGLProgram | null, name: string): number {
        if (!program) return -1;

        return glGetAttribLocation(getIdOrZero(program), name);
    }
    protected getBufferParameteriv(target: GLEnumBufferType, pname: GLEnumBufferParam): number {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));

        glGetBufferParameteriv(target, pname, pointer);

        return new interop.Reference(interop.types.int32, pointer).value;
    }
    getError(): number {
        return glGetError();
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
    //     glgetExtension();
    // }
    protected getFramebufferAttachmentParameteriv(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment,
        pname: GLEnumFramebufferParam,
    ): number {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));

        glGetFramebufferAttachmentParameteriv(
            target, attachment, pname, pointer,
        );

        return new interop.Reference(interop.types.int32, pointer).value;
    }
    protected getParameteriv(pname: GLEnumParam | GLEnumEnable): number;
    protected getParameteriv(pname: GLEnumParam | GLEnumEnable, size: number): number[];
    protected getParameteriv(pname: GLEnumParam | GLEnumEnable, size?: number): number | number[] {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32)
            * (size != null ? size : 1));
        glGetIntegerv(pname, pointer);

        return fromIntBuffer(pointer, size);
    }
    protected getParameterfv(pname: GLEnumParam | GLEnumEnable): number;
    protected getParameterfv(pname: GLEnumParam | GLEnumEnable, size: number): number[];
    protected getParameterfv(pname: GLEnumParam | GLEnumEnable, size?: number): number | number[] {
        const pointer = interop.alloc(interop.sizeof(interop.types.float)
            * (size != null ? size : 1));

        glGetFloatv(pname, pointer);

        return fromFloatBuffer(pointer, size);
    }
    getProgramInfoLog(program: NSWebGLProgram | null): string | null {
        const lengthPointer = interop.alloc(interop.sizeof(interop.types.int32));
        const bufSize = 200;
        const infoPointer = interop.alloc(interop.sizeof(interop.types.unichar) * bufSize);

        glGetProgramInfoLog(getIdOrZero(program), bufSize, lengthPointer,
            new interop.Reference(interop.types.unichar, infoPointer).value,
        );

        const length = new interop.Reference(interop.types.int32, lengthPointer).value;

        return NSString.stringWithUTF8String(infoPointer as any).toString();
    }
    protected getProgramParameteriv(
        program: NSWebGLProgram | null, pname: GLEnumProgramParam,
    ): number {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));
        glGetProgramiv(
            getIdOrZero(program), pname, pointer,
        );

        return new interop.Reference(interop.types.int32, pointer).value;
    }
    protected getRenderbufferParameteriv(
        target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam,
    ): number {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));
        glGetRenderbufferParameteriv(target, pname, pointer);

        return new interop.Reference(interop.types.int32, pointer).value;
    }
    getShaderInfoLog(shader: NSWebGLShader | null): string | null {
        const lengthPointer = interop.alloc(interop.sizeof(interop.types.int32));
        const bufSize = 200;
        const infoPointer = interop.alloc(interop.sizeof(interop.types.unichar) * bufSize);

        glGetShaderInfoLog(getIdOrZero(shader), bufSize, lengthPointer,
            new interop.Reference(interop.types.unichar, infoPointer).value,
        );

        const length = new interop.Reference(interop.types.int32, lengthPointer).value;

        return NSString.stringWithUTF8String(infoPointer as any).toString();
    }
    protected getShaderParameteriv(shader: NSWebGLShader | null, pname: GLEnumShaderParam): any {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));
        glGetShaderiv(getIdOrZero(shader), pname, pointer);

        return new interop.Reference(interop.types.int32, pointer).value;
    }
    getShaderPrecisionFormat(
        shadertype: number, precisiontype: number,
    ): WebGLShaderPrecisionFormat | null {
        const rangeRef = new interop.Reference(
            interop.types.int32, interop.alloc(2 * interop.sizeof(interop.types.int32)));
        const precisionRef = new interop.Reference(
            interop.types.int32, interop.alloc(interop.sizeof(interop.types.int32)));

        glGetShaderPrecisionFormat(shadertype, precisiontype,
            rangeRef, precisionRef);

        return {
            rangeMin: rangeRef[0],
            rangeMax: rangeRef[interop.sizeof(interop.types.int32)],
            precision: precisionRef.value,
        };
    }
    getShaderSource(shader: NSWebGLShader | null): string | null {
        const lengthRef = new interop.Reference(interop.types.int32,
            interop.alloc(interop.sizeof(interop.types.int32)));
        const bufSize = 200;
        const sourcePointer = interop.alloc(interop.sizeof(interop.types.unichar) * bufSize);

        glGetShaderSource(getIdOrZero(shader), bufSize, lengthRef,
            new interop.Reference(interop.types.unichar, sourcePointer).value,
        );

        return NSString.stringWithUTF8String(sourcePointer as any).toString();
    }
    // getSupportedExtensions(): string[] | null {
    //     glgetSupportedExtensions();
    // }
    protected getTexParameteriv(target: GLEnumTexTarget, pname: GLEnumTexParam): number {
        const pointer = interop.alloc(interop.sizeof(interop.types.int32));
        glGetTexParameteriv(target, pname, pointer);

        return new interop.Reference(interop.types.int32, pointer).value;
    }
    protected getUniformiv(program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null, size: number): number[] {
        const pointer = interop.alloc(size * interop.sizeof(interop.types.int32));
        glGetUniformiv(getIdOrZero(program), getIdOrZero(location), pointer);

        return fromIntBuffer(pointer, size);
    }
    protected getUniformfv(program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null, size: number): number[] {
        const pointer = interop.alloc(size * interop.sizeof(interop.types.float));
        glGetUniformfv(getIdOrZero(program), getIdOrZero(location), pointer);

        return fromFloatBuffer(pointer, size);
    }
    getUniformLocation(program: NSWebGLProgram | null, name: string): NSWebGLUniformLocation | null {
        if (!program) return null;

        const uniformLocation = glGetUniformLocation(getIdOrZero(program), name);

        const sizeBuffer = interop.alloc(1);
        const typeBuffer = interop.alloc(1);
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
        const pointer = interop.alloc((size != null ? size : 1)
            * interop.sizeof(interop.types.int32));
        glGetVertexAttribiv(index, pname, pointer);

        return fromIntBuffer(pointer, size);
    }
    hint(target: number, mode: GLEnumHintMode): void {
        glHint(target, mode);
    }
    isBuffer(buffer: NSWebGLBuffer | null): boolean {
        return !!glIsBuffer(getIdOrZero(buffer));
    }
    isEnabled(cap: number): boolean {
        return !!glIsEnabled(cap);
    }
    isFramebuffer(framebuffer: NSWebGLFramebuffer | null): boolean {
        return !!glIsFramebuffer(getIdOrZero(framebuffer));
    }
    isProgram(program: NSWebGLProgram | null): boolean {
        return !!glIsProgram(getIdOrZero(program));
    }
    isRenderbuffer(renderbuffer: NSWebGLRenderbuffer | null): boolean {
        return !!glIsRenderbuffer(getIdOrZero(renderbuffer));
    }
    isShader(shader: NSWebGLShader | null): boolean {
        return !!glIsShader(getIdOrZero(shader));
    }
    isTexture(texture: NSWebGLTexture | null): boolean {
        return !!glIsTexture(getIdOrZero(texture));
    }
    lineWidth(width: number): void {
        glLineWidth(width);
    }
    linkProgram(program: NSWebGLProgram | null): void {
        glLinkProgram(getIdOrZero(program));
    }
    pixelStorei(pname: GLEnumPixelStore, param: number): void {
        glPixelStorei(pname, param);
    }
    polygonOffset(factor: number, units: number): void {
        glPolygonOffset(factor, units);
    }
    readPixelsCore(
        x: number, y: number, width: number, height: number, format: GLEnumPixelFormat,
        type: GLEnumPixelType, pixels: ArrayBufferView, bufferSize: number,
    ): void {
        const pointer = interop.handleof(pixels);

        glReadPixels(
            x, y, width, height, format, type, pointer,
        );
    }
    renderbufferStorage(
        target: GLEnumRenderbuffer, internalformat: GLEnumRenderbufferInternalFormat,
        width: number, height: number,
    ): void {
        glRenderbufferStorage(
            target, internalformat, width, height,
        );
    }
    sampleCoverage(value: number, invert: boolean): void {
        glSampleCoverage(value, invert ? 1 : 0);
    }
    scissor(x: number, y: number, width: number, height: number): void {
        glScissor(x, y, width, height);
    }
    shaderSource(shader: NSWebGLShader | null, source: string): void {
        glShaderSource(getIdOrZero(shader), 1,
            new interop.Reference(interop.types.unichar, source),
            new interop.Reference(interop.types.uint32, source.length),
        );
    }
    stencilFunc(func: number, ref: number, mask: number): void {
        glStencilFunc(func, ref, mask);
    }
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void {
        glStencilFuncSeparate(face, func, ref, mask);
    }
    stencilMask(mask: number): void {
        glStencilMask(mask);
    }
    stencilMaskSeparate(face: number, mask: number): void {
        glStencilMaskSeparate(face, mask);
    }
    stencilOp(fail: number, zfail: number, zpass: number): void {
        glStencilOp(fail, zfail, zpass);
    }
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void {
        glStencilOpSeparate(face, fail, zfail, zpass);
    }
    texImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent,
        width: number, height: number, border: number, format: GLEnumColorComponent, type: GLEnumPixelType,
        pixels: ArrayBufferView,
    ): void {
        glTexImage2D(
            target, level, internalformat, width, height, border, format, type, interop.handleof(pixels),
        );
    }
    texParameterf(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void {
        glTexParameterf(target, pname, param);
    }
    texParameteri(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void {
        glTexParameteri(target, pname, param);
    }
    texSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        width: number, height: number, format: GLEnumColorComponent, type: GLEnumPixelType,
        pixels: ArrayBufferView,
    ) {
        glTexSubImage2D(
            target, level, xoffset, yoffset, width, height, format, type, interop.handleof(pixels),
        );
    }
    uniform1f(location: NSWebGLUniformLocation | null, x: number): void {
        glUniform1f(getIdOrZero(location), x);
    }
    uniform1fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void {
        glUniform1fv(getIdOrZero(location), v.length, toFloatBuffer(v));
    }
    uniform1i(location: NSWebGLUniformLocation | null, x: number): void {
        glUniform1i(getIdOrZero(location), x);
    }
    uniform1iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void {
        glUniform1iv(getIdOrZero(location), v.length, toIntBuffer(v));
    }
    uniform2f(location: NSWebGLUniformLocation | null, x: number, y: number): void {
        glUniform2f(getIdOrZero(location), x, y);
    }
    uniform2fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void {
        glUniform2fv(getIdOrZero(location), v.length, toFloatBuffer(v));
    }
    uniform2i(location: NSWebGLUniformLocation | null, x: number, y: number): void {
        glUniform2i(getIdOrZero(location), x, y);
    }
    uniform2iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void {
        glUniform2iv(getIdOrZero(location), v.length, toIntBuffer(v));
    }
    uniform3f(location: NSWebGLUniformLocation | null, x: number, y: number, z: number): void {
        glUniform3f(getIdOrZero(location), x, y, z);
    }
    uniform3fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void {
        glUniform3fv(getIdOrZero(location), v.length, toFloatBuffer(v));
    }
    uniform3i(location: NSWebGLUniformLocation | null, x: number, y: number, z: number): void {
        glUniform3i(getIdOrZero(location), x, y, z);
    }
    uniform3iv(
        location: NSWebGLUniformLocation, v: Int32Array | number[],
    ): void {
        glUniform3iv(getIdOrZero(location), v.length, toIntBuffer(v));
    }
    uniform4f(location: NSWebGLUniformLocation | null,
        x: number, y: number, z: number, w: number): void {
        glUniform4f(getIdOrZero(location), x, y, z, w);
    }
    uniform4fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void {
        glUniform4fv(getIdOrZero(location), v.length, toFloatBuffer(v));
    }
    uniform4i(location: NSWebGLUniformLocation | null,
        x: number, y: number, z: number, w: number
    ): void {
        glUniform4i(getIdOrZero(location), x, y, z, w);
    }
    uniform4iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void {
        glUniform4iv(getIdOrZero(location), v.length, toIntBuffer(v));
    }
    uniformMatrix2fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void {
        glUniformMatrix2fv(
            getIdOrZero(location), value.length, transpose ? 1 : 0, toFloatBuffer(value),
        );
    }
    uniformMatrix3fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void {
        glUniformMatrix3fv(
            getIdOrZero(location), value.length, transpose ? 1 : 0, toFloatBuffer(value));
    }
    uniformMatrix4fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void {
        glUniformMatrix4fv(
            getIdOrZero(location), value.length, transpose ? 1 : 0, toFloatBuffer(value),
        );
    }
    useProgram(program: NSWebGLProgram | null): void {
        glUseProgram(getIdOrZero(program));
    }
    validateProgram(program: NSWebGLProgram | null): void {
        glValidateProgram(getIdOrZero(program));
    }
    vertexAttrib1f(indx: number, x: number): void {
        glVertexAttrib1f(indx, x);
    }
    vertexAttrib1fv(indx: number, values: Float32Array | number[]): void {
        glVertexAttrib1fv(indx, toFloatBuffer(values));
    }
    vertexAttrib2f(indx: number, x: number, y: number): void {
        glVertexAttrib2f(indx, x, y);
    }
    vertexAttrib2fv(indx: number, values: Float32Array | number[]): void {
        glVertexAttrib2fv(indx, toFloatBuffer(values));
    }
    vertexAttrib3f(indx: number, x: number, y: number, z: number): void {
        glVertexAttrib3f(indx, x, y, z);
    }
    vertexAttrib3fv(indx: number, values: Float32Array | number[]): void {
        glVertexAttrib3fv(indx, toFloatBuffer(values));
    }
    vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void {
        glVertexAttrib4f(indx, x, y, z, w);
    }
    vertexAttrib4fv(indx: number, values: Float32Array | number[]): void {
        glVertexAttrib4fv(indx, toFloatBuffer(values));
    }
    vertexAttribPointer(
        indx: number, size: number, type: number, normalized: boolean, stride: number,
        offset: number,
    ): void {
        glVertexAttribPointer(
            indx, size, type, normalized ? 1 : 0, stride, new interop.Pointer(offset),
        );
    }
    viewport(x: number, y: number, width: number, height: number): void {
        glViewport(x, y, width, height);
    }
}
