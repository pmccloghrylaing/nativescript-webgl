import { CanvasView } from '../ui/canvas-view';
import { NSWebGLContextAttributes } from '../webgl/context-attributes';
import {
    GLEnumBlendingMode,
    GLEnumBufferBit,
    GLEnumBufferParam,
    GLEnumBufferType,
    GLEnumBufferUsage,
    GLEnumColorComponent,
    GLEnumDataType,
    GLEnumEnable,
    GLEnumFaceDirection,
    GLEnumFramebuffer,
    GLEnumFramebufferAttachment,
    GLEnumFramebufferAttachmentObjectType,
    GLEnumFramebufferParam,
    GLEnumHintMode,
    GLEnumParam,
    GLEnumPixelFormat,
    GLEnumPixelStore,
    GLEnumPixelType,
    GLEnumProgramParam,
    GLEnumRenderbuffer,
    GLEnumRenderbufferInternalFormat,
    GLEnumRenderbufferParam,
    GLEnumShaderParam,
    GLEnumShaderType,
    GLEnumTexCubeMap,
    GLEnumTexMagFilter,
    GLEnumTexParam,
    GLEnumTexTarget,
    GLEnumTexture,
    GLEnumUniformType,
    GLEnumVertexAttrib,
} from './constants.common';
import {
    NSWebGLBuffer,
    NSWebGLFramebuffer,
    NSWebGLProgram,
    NSWebGLRenderbuffer,
    NSWebGLShader,
    NSWebGLTexture,
    NSWebGLUniformLocation,
} from './wrappers';

export declare class NSWebGLRenderingContext {
    constructor(
        canvas: CanvasView,
        attributes?: Partial<NSWebGLContextAttributes>,
    );

    activeTexture(texture: GLEnumTexture): void;
    attachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void;
    bindAttribLocation(program: NSWebGLProgram | null, index: number, name: string): void;
    bindBuffer(
        target: GLEnumBufferType,
        buffer: NSWebGLBuffer | null,
    ): void;
    bindFramebuffer(
        target: GLEnumFramebuffer,
        framebuffer: NSWebGLFramebuffer | null,
    ): void;
    bindRenderbuffer(
        target: GLEnumRenderbuffer,
        renderbuffer: NSWebGLRenderbuffer | null,
    ): void;
    bindTexture(target: GLEnumTexture, texture: NSWebGLTexture | null): void;
    blendColor(red: number, green: number, blue: number, alpha: number): void;
    blendEquation(mode: number): void;
    blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
    blendFunc(sfactor: GLEnumBlendingMode, dfactor: GLEnumBlendingMode): void;
    blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;
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
    ): void;
    bufferSubData(
        target: GLEnumBufferType,
        offset: number,
        data: ArrayBufferView | ArrayBuffer,
    ): void;
    checkFramebufferStatus(target: GLEnumFramebuffer): number;
    clear(mask: GLEnumBufferBit): void;
    clearColor(red: number, green: number, blue: number, alpha: number): void;
    clearDepth(depth: number): void;
    clearStencil(s: number): void;
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    compileShader(shader: NSWebGLShader | null): void;
    compressedTexImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: number, width: number, height: number,
        border: number, data: ArrayBufferView,
    ): void;
    compressedTexSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        width: number, height: number, format: number, data: ArrayBufferView,
    ): void;
    copyTexImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent,
        x: number, y: number, width: number, height: number, border: number,
    ): void;
    copyTexSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        x: number, y: number, width: number, height: number,
    ): void;
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
    disable(cap: number): void;
    disableVertexAttribArray(index: number): void;
    drawArrays(mode: number, first: number, count: number): void;
    drawElements(mode: number, count: number, type: number, offset: number): void;
    enable(cap: number): void;
    enableVertexAttribArray(index: number): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, renderbuffertarget: GLEnumRenderbuffer,
        renderbuffer: NSWebGLRenderbuffer | null,
    ): void;
    framebufferTexture2D(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, textarget: GLEnumTexTarget | GLEnumTexCubeMap, texture: NSWebGLTexture | null,
        level: number,
    ): void;
    frontFace(mode: GLEnumFaceDirection): void;
    generateMipmap(target: GLEnumTexTarget): void;
    getActiveAttrib(program: NSWebGLProgram | null, index: number): WebGLActiveInfo | null;
    getActiveUniform(
        program: NSWebGLProgram | null, index: number,
    ): { name: string; size: number; type: GLEnumUniformType; } | null;
    getAttachedShaders(program: NSWebGLProgram | null): NSWebGLShader[] | null;
    getAttribLocation(program: NSWebGLProgram | null, name: string): number;
    getBufferParameter(
        target: GLEnumBufferType, pname: GLEnumBufferParam.BUFFER_SIZE,
    ): number;
    getBufferParameter(
        target: GLEnumBufferType, pname: GLEnumBufferParam.BUFFER_USAGE,
    ): GLEnumBufferUsage;
    getError(): number;
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
    getFramebufferAttachmentParameter(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment,
        pname: GLEnumFramebufferParam.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL,
    ): number;
    getFramebufferAttachmentParameter(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment,
        pname: GLEnumFramebufferParam.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE,
    ): GLEnumFramebufferAttachmentObjectType;
    getFramebufferAttachmentParameter(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment,
        pname: GLEnumFramebufferParam.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME,
    ): NSWebGLTexture | NSWebGLRenderbuffer;
    getFramebufferAttachmentParameter(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment,
        pname: GLEnumFramebufferParam.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE,
    ): GLEnumTexCubeMap;
    getParameter(pname:
        | GLEnumParam.DEPTH_WRITEMASK
        | GLEnumParam.SAMPLE_COVERAGE_INVERT
        | GLEnumEnable.BLEND
        | GLEnumEnable.DEPTH_TEST
        | GLEnumEnable.DITHER
        | GLEnumEnable.POLYGON_OFFSET_FILL
        | GLEnumEnable.SAMPLE_ALPHA_TO_COVERAGE
        | GLEnumEnable.SAMPLE_COVERAGE
        | GLEnumEnable.SCISSOR_TEST
        | GLEnumEnable.STENCIL_TEST): boolean;
    getParameter(pname: GLEnumParam.COLOR_WRITEMASK): [boolean, boolean, boolean, boolean];
    getParameter(pname:
        | GLEnumParam.BLEND_DST_ALPHA
        | GLEnumParam.BLEND_DST_RGB
        | GLEnumParam.BLEND_EQUATION_ALPHA
        | GLEnumParam.BLEND_EQUATION_RGB
        | GLEnumParam.BLEND_SRC_ALPHA
        | GLEnumParam.BLEND_SRC_RGB
        | GLEnumParam.CULL_FACE_MODE
        | GLEnumParam.DEPTH_FUNC
        | GLEnumParam.FRONT_FACE
        | GLEnumParam.IMPLEMENTATION_COLOR_READ_FORMAT
        | GLEnumParam.IMPLEMENTATION_COLOR_READ_TYPE
        | GLEnumParam.MAX_TEXTURE_SIZE
        | GLEnumParam.NUM_COMPRESSED_TEXTURE_FORMATS
        | GLEnumParam.PACK_ALIGNMENT
        | GLEnumParam.SAMPLE_BUFFERS
        | GLEnumParam.SAMPLES
        | GLEnumParam.STENCIL_BACK_FAIL
        | GLEnumParam.STENCIL_BACK_FUNC
        | GLEnumParam.STENCIL_BACK_PASS_DEPTH_FAIL
        | GLEnumParam.STENCIL_BACK_PASS_DEPTH_PASS
        | GLEnumParam.STENCIL_BACK_REF
        | GLEnumParam.STENCIL_BACK_VALUE_MASK
        | GLEnumParam.STENCIL_BACK_WRITEMASK
        | GLEnumParam.STENCIL_CLEAR_VALUE
        | GLEnumParam.STENCIL_FAIL
        | GLEnumParam.STENCIL_FUNC
        | GLEnumParam.STENCIL_PASS_DEPTH_FAIL
        | GLEnumParam.STENCIL_PASS_DEPTH_PASS
        | GLEnumParam.STENCIL_REF
        | GLEnumParam.STENCIL_VALUE_MASK
        | GLEnumParam.STENCIL_WRITEMASK
        | GLEnumParam.SUBPIXEL_BITS
        | GLEnumParam.TEXTURE_BINDING_2D
        | GLEnumParam.UNPACK_ALIGNMENT
        | GLEnumParam.LINE_WIDTH
        | GLEnumParam.DEPTH_CLEAR_VALUE
        | GLEnumParam.SAMPLE_COVERAGE_VALUE): number;
    getParameter(pname:
        | GLEnumParam.ALIASED_LINE_WIDTH_RANGE
        | GLEnumParam.ALIASED_POINT_SIZE_RANGE
        | GLEnumParam.DEPTH_RANGE
        | GLEnumParam.MAX_VIEWPORT_DIMS
        | GLEnumParam.POLYGON_OFFSET_FACTOR
        | GLEnumParam.POLYGON_OFFSET_UNITS): [number, number];
    getParameter(pname:
        | GLEnumParam.VIEWPORT
        | GLEnumParam.BLEND_COLOR
        | GLEnumParam.COLOR_CLEAR_VALUE
        | GLEnumParam.SCISSOR_BOX): [number, number, number, number];
    getParameter(pname: GLEnumParam.COMPRESSED_TEXTURE_FORMATS): number[];
    getParameter(pname:
        | GLEnumParam.ARRAY_BUFFER_BINDING
        | GLEnumParam.ELEMENT_ARRAY_BUFFER_BINDING): NSWebGLBuffer;
    getProgramInfoLog(program: NSWebGLProgram | null): string | null;
    getProgramParameter(
        program: NSWebGLProgram | null,
        pname:
            | GLEnumProgramParam.LINK_STATUS
            | GLEnumProgramParam.VALIDATE_STATUS,
    ): boolean | null;
    getProgramParameter(
        program: NSWebGLProgram | null,
        pname:
            | GLEnumProgramParam.ATTACHED_SHADERS
            | GLEnumProgramParam.ACTIVE_ATTRIBUTES
            | GLEnumProgramParam.ACTIVE_UNIFORMS
            | GLEnumProgramParam.MAX_VERTEX_ATTRIBS
            | GLEnumProgramParam.MAX_VERTEX_UNIFORM_VECTORS
            | GLEnumProgramParam.MAX_VARYING_VECTORS
            | GLEnumProgramParam.MAX_COMBINED_TEXTURE_IMAGE_UNITS
            | GLEnumProgramParam.MAX_VERTEX_TEXTURE_IMAGE_UNITS
            | GLEnumProgramParam.MAX_TEXTURE_IMAGE_UNITS
            | GLEnumProgramParam.MAX_FRAGMENT_UNIFORM_VECTORS
            | GLEnumProgramParam.SHADER_TYPE
            | GLEnumProgramParam.SHADING_LANGUAGE_VERSION
            | GLEnumProgramParam.CURRENT_PROGRAM,
    ): number | null;
    getRenderbufferParameter(
        target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam.RENDERBUFFER_INTERNAL_FORMAT,
    ): GLEnumRenderbufferInternalFormat;
    getRenderbufferParameter(
        target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam,
    ): number;
    getShaderInfoLog(shader: NSWebGLShader | null): string | null;
    getShaderParameter(
        shader: NSWebGLShader | null,
        pname:
            | GLEnumShaderParam.DELETE_STATUS
            | GLEnumShaderParam.COMPILE_STATUS): boolean;
    getShaderParameter(
        shader: NSWebGLShader | null,
        pname: GLEnumShaderParam.SHADER_TYPE): GLEnumShaderType;
    getShaderParameter(
        shader: NSWebGLShader | null,
        pname:
            | GLEnumShaderParam.INFO_LOG_LENGTH
            | GLEnumShaderParam.SHADER_SOURCE_LENGTH): number;
    getShaderPrecisionFormat(
        shadertype: number, precisiontype: number,
    ): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: NSWebGLShader | null): string | null;
    // getSupportedExtensions(): string[] | null {
    //     GLES20.glgetSupportedExtensions();
    // }
    getTexParameter(
        target: GLEnumTexTarget,
        pname: GLEnumTexParam.TEXTURE_MAG_FILTER | GLEnumTexParam.TEXTURE_MIN_FILTER,
    ): GLEnumTexMagFilter;
    getTexParameter(
        target: GLEnumTexTarget,
        pname: GLEnumTexParam.TEXTURE_WRAP_S | GLEnumTexParam.TEXTURE_WRAP_T,
    ): GLEnumTexMagFilter;
    getUniform(
        program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null,
    ): number[] | boolean[] | null
    getUniformLocation(program: NSWebGLProgram | null, name: string): NSWebGLUniformLocation | null;
    getVertexAttrib(
        index: number,
        pname:
            | GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_SIZE
            | GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_STRIDE,
    ): number;
    getVertexAttrib(
        index: number,
        pname:
            | GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_ENABLED
            | GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_NORMALIZED,
    ): boolean;
    getVertexAttrib(
        index: number,
        pname: GLEnumVertexAttrib.CURRENT_VERTEX_ATTRIB,
    ): number[];
    getVertexAttrib(
        index: number,
        pname: GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_TYPE,
    ): GLEnumDataType;
    getVertexAttrib(
        index: number,
        pname: GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING,
    ): NSWebGLBuffer;
    getVertexAttribOffset(index: number, pname: GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_POINTER): number;
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
    readPixels(
        x: number, y: number, width: number, height: number, format: GLEnumPixelFormat,
        type: GLEnumPixelType, pixels: ArrayBufferView,
    ): void;
    renderbufferStorage(
        target: GLEnumRenderbuffer, internalformat: GLEnumRenderbufferInternalFormat,
        width: number, height: number,
    ): void;
    sampleCoverage(value: number, invert: boolean): void;
    scissor(x: number, y: number, width: number, height: number): void;
    shaderSource(shader: NSWebGLShader | null, source: string): void;
    stencilFunc(func: number, ref: number, mask: number): void;
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
    stencilMask(mask: number): void;
    stencilMaskSeparate(face: number, mask: number): void;
    stencilOp(fail: number, zfail: number, zpass: number): void;
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
    texImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent,
        width: number, height: number, border: number, format: GLEnumColorComponent, type: GLEnumPixelType,
        pixels: ArrayBufferView,
    ): void;
    texParameterf(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void;
    texParameteri(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void;
    texSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        width: number, height: number, format: GLEnumColorComponent, type: GLEnumPixelType,
        pixels: ArrayBufferView,
    ): void;
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
    uniform3iv(
        location: NSWebGLUniformLocation, v: Int32Array | number[],
    ): void;
    uniform4f(
        location: NSWebGLUniformLocation | null,
        x: number, y: number, z: number, w: number
    ): void;
    uniform4fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    uniform4i(
        location: NSWebGLUniformLocation | null,
        x: number, y: number, z: number, w: number
    ): void;
    uniform4iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void;
    uniformMatrix2fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void;
    uniformMatrix3fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void;
    uniformMatrix4fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void;
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
    vertexAttribPointer(
        indx: number, size: number, type: number, normalized: boolean, stride: number,
        offset: number,
    ): void;
    viewport(x: number, y: number, width: number, height: number): void;
}
