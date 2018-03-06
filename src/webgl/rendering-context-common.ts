import { NSWebGLRenderingContext as NSWebGLRenderingContextDeclaration } from './rendering-context';
import { assertNever } from '../helpers.common';
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
    GLEnumShaderType,
    GLEnumTexCubeMap,
    GLEnumTexMagFilter,
    GLEnumTexParam,
    GLEnumTexTarget,
    GLEnumTexture,
    GLEnumUniformType,
    GLEnumVertexAttrib,
    GLEnumShaderParam,
} from './constants.common';
import { NSWebGLContextAttributes } from './context-attributes';
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
import { CanvasView } from '../canvas-view';

declare var WebGLRenderingContext: WebGLRenderingContext;
export abstract class NSWebGLRenderingContextBase implements NSWebGLRenderingContextDeclaration {
    abstract get drawingBufferHeight(): number;
    abstract get drawingBufferWidth(): number;

    protected _attributes: NSWebGLContextAttributes;

    constructor(
        public canvas: CanvasView,
        attributes?: Partial<NSWebGLContextAttributes>,
    ) {
        this._attributes = {
            alpha: true,
            depth: true,
            stencil: false,
            antialias: true,
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            failIfMajorPerformanceCaveat: false,
            ...attributes
        };
    }

    abstract activeTexture(texture: GLEnumTexture): void;
    abstract attachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void;
    abstract bindAttribLocation(program: NSWebGLProgram | null, index: number, name: string): void;
    abstract bindBuffer(
        target: GLEnumBufferType,
        buffer: NSWebGLBuffer | null,
    ): void;
    abstract bindFramebuffer(
        target: GLEnumFramebuffer,
        framebuffer: NSWebGLFramebuffer | null,
    ): void;
    abstract bindRenderbuffer(
        target: GLEnumRenderbuffer,
        renderbuffer: NSWebGLRenderbuffer | null,
    ): void;
    abstract bindTexture(target: GLEnumTexture, texture: NSWebGLTexture | null): void;
    abstract blendColor(red: number, green: number, blue: number, alpha: number): void;
    abstract blendEquation(mode: number): void;
    abstract blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
    abstract blendFunc(sfactor: GLEnumBlendingMode, dfactor: GLEnumBlendingMode): void;
    abstract blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;
    abstract bufferData(
        target: GLEnumBufferType,
        size: number,
        usage: GLEnumBufferUsage,
    ): void;
    abstract bufferData(
        target: GLEnumBufferType,
        srcData: ArrayBuffer,
        usage: GLEnumBufferUsage,
    ): void;
    abstract bufferData(
        target: GLEnumBufferType,
        srcData: ArrayBufferView,
        usage: GLEnumBufferUsage,
    ): void;
    abstract bufferData(
        target: GLEnumBufferType,
        srcData: null,
        usage: GLEnumBufferUsage,
    ): void;
    // NSWebGL2
    // bufferData(
    //     target: GLEnumBufferType, srcData: ArrayBufferView, usage: number,
    //     srcOffset: number, length: number,
    // ): void;
    abstract bufferData(
        target: GLEnumBufferType,
        srcDataOrSize: number | ArrayBufferView | ArrayBuffer | null,
        usage: GLEnumBufferUsage,
        // srcOffset?: number, length?: number,
    ): void;
    abstract bufferSubData(
        target: GLEnumBufferType,
        offset: number,
        data: ArrayBufferView | ArrayBuffer,
    ): void;
    abstract checkFramebufferStatus(target: GLEnumFramebuffer): number;
    abstract clear(mask: GLEnumBufferBit): void;
    abstract clearColor(red: number, green: number, blue: number, alpha: number): void;
    abstract clearDepth(depth: number): void;
    abstract clearStencil(s: number): void;
    abstract colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    abstract compileShader(shader: NSWebGLShader | null): void;
    abstract compressedTexImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: number, width: number, height: number,
        border: number, data: ArrayBufferView,
    ): void;
    abstract compressedTexSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        width: number, height: number, format: number, data: ArrayBufferView,
    ): void;
    abstract copyTexImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent,
        x: number, y: number, width: number, height: number, border: number,
    ): void;
    abstract copyTexSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        x: number, y: number, width: number, height: number,
    ): void;
    abstract createBuffer(): NSWebGLBuffer | null;
    abstract createFramebuffer(): NSWebGLFramebuffer | null;
    abstract createProgram(): NSWebGLProgram | null;
    abstract createRenderbuffer(): NSWebGLRenderbuffer | null;
    abstract createShader(type: GLEnumShaderType): NSWebGLShader | null;
    abstract createTexture(): NSWebGLTexture | null;
    abstract cullFace(mode: number): void;
    abstract deleteBuffer(buffer: NSWebGLBuffer | null): void;
    abstract deleteFramebuffer(framebuffer: NSWebGLFramebuffer | null): void;
    abstract deleteProgram(program: NSWebGLProgram | null): void;
    abstract deleteRenderbuffer(renderbuffer: NSWebGLRenderbuffer | null): void;
    abstract deleteShader(shader: NSWebGLShader | null): void;
    abstract deleteTexture(texture: NSWebGLTexture | null): void;
    abstract depthFunc(func: number): void;
    abstract depthMask(flag: boolean): void;
    abstract depthRange(zNear: number, zFar: number): void;
    abstract detachShader(program: NSWebGLProgram | null, shader: NSWebGLShader | null): void;
    abstract disable(cap: number): void;
    abstract disableVertexAttribArray(index: number): void;
    abstract drawArrays(mode: number, first: number, count: number): void;
    abstract drawElements(mode: number, count: number, type: number, offset: number): void;
    abstract enable(cap: number): void;
    abstract enableVertexAttribArray(index: number): void;
    abstract finish(): void;
    abstract flush(): void;
    abstract framebufferRenderbuffer(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, renderbuffertarget: GLEnumRenderbuffer,
        renderbuffer: NSWebGLRenderbuffer | null,
    ): void;
    abstract framebufferTexture2D(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment, textarget: GLEnumTexTarget | GLEnumTexCubeMap, texture: NSWebGLTexture | null,
        level: number,
    ): void;
    abstract frontFace(mode: GLEnumFaceDirection): void;
    abstract generateMipmap(target: GLEnumTexTarget): void;
    abstract getActiveAttrib(program: NSWebGLProgram | null, index: number): WebGLActiveInfo | null;
    abstract getActiveUniform(
        program: NSWebGLProgram | null, index: number,
    ): { name: string; size: number; type: GLEnumUniformType; } | null;
    abstract getAttachedShaders(program: NSWebGLProgram | null): NSWebGLShader[] | null;
    abstract getAttribLocation(program: NSWebGLProgram | null, name: string): number;
    getBufferParameter(
        target: GLEnumBufferType, pname: GLEnumBufferParam.BUFFER_SIZE,
    ): number;
    getBufferParameter(
        target: GLEnumBufferType, pname: GLEnumBufferParam.BUFFER_USAGE,
    ): GLEnumBufferUsage;
    getBufferParameter(target: GLEnumBufferType, pname: GLEnumBufferParam): number {
        switch (pname) {
            case GLEnumBufferParam.BUFFER_SIZE:
            case GLEnumBufferParam.BUFFER_USAGE:
                return this.getBufferParameteriv(target, pname);
            default:
                return assertNever(pname);
        }
    }
    protected abstract getBufferParameteriv(target: GLEnumBufferType, pname: GLEnumBufferParam): number;
    abstract getError(): number;
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
    getFramebufferAttachmentParameter(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment,
        pname: GLEnumFramebufferParam,
    ): any {
        switch (pname) {
            case GLEnumFramebufferParam.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:
            case GLEnumFramebufferParam.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:
            case GLEnumFramebufferParam.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:
                return this.getFramebufferAttachmentParameteriv(
                    target, attachment, pname);
            case GLEnumFramebufferParam.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:
                return new NSWebGLRenderbuffer(
                    this.getFramebufferAttachmentParameteriv(
                        target, attachment, pname),
                );
            default:
                return assertNever(pname);
        }
    }
    protected abstract getFramebufferAttachmentParameteriv(
        target: GLEnumFramebuffer, attachment: GLEnumFramebufferAttachment,
        pname: GLEnumFramebufferParam,
    ): number;
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
    getParameter(pname: GLEnumParam | GLEnumEnable): any {
        switch (pname) {
            // case GLEnumParam.CULL_FACE:
            // case GLEnumParam.LINE_SMOOTH:
            case GLEnumParam.DEPTH_WRITEMASK:
            case GLEnumParam.SAMPLE_COVERAGE_INVERT:
            case GLEnumEnable.BLEND:
            case GLEnumEnable.DEPTH_TEST:
            case GLEnumEnable.DITHER:
            case GLEnumEnable.POLYGON_OFFSET_FILL:
            case GLEnumEnable.SAMPLE_ALPHA_TO_COVERAGE:
            case GLEnumEnable.SAMPLE_COVERAGE:
            case GLEnumEnable.SCISSOR_TEST:
            case GLEnumEnable.STENCIL_TEST:
                return !!this.getParameteriv(pname);
            case GLEnumParam.COLOR_WRITEMASK:
                return this.getParameteriv(pname, 4)
                    .map(x => !!x);
            case GLEnumParam.BLEND_DST_ALPHA:
            case GLEnumParam.BLEND_DST_RGB:
            case GLEnumParam.BLEND_EQUATION_ALPHA:
            case GLEnumParam.BLEND_EQUATION_RGB:
            case GLEnumParam.BLEND_SRC_ALPHA:
            case GLEnumParam.BLEND_SRC_RGB:
            case GLEnumParam.CULL_FACE_MODE:
            case GLEnumParam.DEPTH_FUNC:
            case GLEnumParam.FRONT_FACE:
            case GLEnumParam.IMPLEMENTATION_COLOR_READ_FORMAT:
            case GLEnumParam.IMPLEMENTATION_COLOR_READ_TYPE:
            case GLEnumParam.MAX_TEXTURE_SIZE:
            case GLEnumParam.NUM_COMPRESSED_TEXTURE_FORMATS:
            case GLEnumParam.PACK_ALIGNMENT:
            case GLEnumParam.SAMPLE_BUFFERS:
            case GLEnumParam.SAMPLES:
            case GLEnumParam.STENCIL_BACK_FAIL:
            case GLEnumParam.STENCIL_BACK_FUNC:
            case GLEnumParam.STENCIL_BACK_PASS_DEPTH_FAIL:
            case GLEnumParam.STENCIL_BACK_PASS_DEPTH_PASS:
            case GLEnumParam.STENCIL_BACK_REF:
            case GLEnumParam.STENCIL_BACK_VALUE_MASK:
            case GLEnumParam.STENCIL_BACK_WRITEMASK:
            case GLEnumParam.STENCIL_CLEAR_VALUE:
            case GLEnumParam.STENCIL_FAIL:
            case GLEnumParam.STENCIL_FUNC:
            case GLEnumParam.STENCIL_PASS_DEPTH_FAIL:
            case GLEnumParam.STENCIL_PASS_DEPTH_PASS:
            case GLEnumParam.STENCIL_REF:
            case GLEnumParam.STENCIL_VALUE_MASK:
            case GLEnumParam.STENCIL_WRITEMASK:
            case GLEnumParam.SUBPIXEL_BITS:
            case GLEnumParam.TEXTURE_BINDING_2D:
            case GLEnumParam.UNPACK_ALIGNMENT:
                return this.getParameteriv(pname);
            case GLEnumParam.VIEWPORT:
                return this.getParameteriv(pname, 4);
            case GLEnumParam.COMPRESSED_TEXTURE_FORMATS:
                {
                    const size = this.getParameteriv(GLEnumParam.NUM_COMPRESSED_TEXTURE_FORMATS);

                    return this.getParameteriv(pname, size);
                }
            case GLEnumParam.LINE_WIDTH:
            case GLEnumParam.DEPTH_CLEAR_VALUE:
            case GLEnumParam.SAMPLE_COVERAGE_VALUE:
                return this.getParameterfv(pname);
            case GLEnumParam.ALIASED_LINE_WIDTH_RANGE:
            case GLEnumParam.ALIASED_POINT_SIZE_RANGE:
            case GLEnumParam.DEPTH_RANGE:
            case GLEnumParam.MAX_VIEWPORT_DIMS:
            case GLEnumParam.POLYGON_OFFSET_FACTOR:
            case GLEnumParam.POLYGON_OFFSET_UNITS:
                return this.getParameterfv(pname, 2);
            case GLEnumParam.BLEND_COLOR:
            case GLEnumParam.COLOR_CLEAR_VALUE:
            case GLEnumParam.SCISSOR_BOX:
                return this.getParameterfv(pname, 4);
            case GLEnumParam.ARRAY_BUFFER_BINDING:
            case GLEnumParam.ELEMENT_ARRAY_BUFFER_BINDING:
                return new NSWebGLBuffer(this.getParameteriv(pname));
            default:
                return assertNever(pname);
        }
    }
    protected abstract getParameteriv(pname: GLEnumParam | GLEnumEnable): number;
    protected abstract getParameteriv(pname: GLEnumParam | GLEnumEnable, size: number): number[];
    protected abstract getParameterfv(pname: GLEnumParam | GLEnumEnable): number;
    protected abstract getParameterfv(pname: GLEnumParam | GLEnumEnable, size: number): number[];
    abstract getProgramInfoLog(program: NSWebGLProgram | null): string | null;
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
    getProgramParameter(program: NSWebGLProgram | null, pname: GLEnumProgramParam): number | boolean | null {
        if (!program) return null;

        switch (pname) {
            case GLEnumProgramParam.DELETE_STATUS:
            case GLEnumProgramParam.LINK_STATUS:
            case GLEnumProgramParam.VALIDATE_STATUS:
                return !!this.getProgramParameteriv(program, pname);
            case GLEnumProgramParam.ATTACHED_SHADERS:
            case GLEnumProgramParam.ACTIVE_ATTRIBUTES:
            case GLEnumProgramParam.ACTIVE_ATTRIBUTE_MAX_LENGTH:
            case GLEnumProgramParam.ACTIVE_UNIFORMS:
            case GLEnumProgramParam.ACTIVE_UNIFORM_MAX_LENGTH:
            case GLEnumProgramParam.MAX_VERTEX_ATTRIBS:
            case GLEnumProgramParam.MAX_VERTEX_UNIFORM_VECTORS:
            case GLEnumProgramParam.MAX_VARYING_VECTORS:
            case GLEnumProgramParam.MAX_COMBINED_TEXTURE_IMAGE_UNITS:
            case GLEnumProgramParam.MAX_VERTEX_TEXTURE_IMAGE_UNITS:
            case GLEnumProgramParam.MAX_TEXTURE_IMAGE_UNITS:
            case GLEnumProgramParam.MAX_FRAGMENT_UNIFORM_VECTORS:
            case GLEnumProgramParam.SHADER_TYPE:
            case GLEnumProgramParam.SHADING_LANGUAGE_VERSION:
            case GLEnumProgramParam.CURRENT_PROGRAM:
                return this.getProgramParameteriv(program, pname);
            default:
                return assertNever(pname);
        }
    }
    protected abstract getProgramParameteriv(program: NSWebGLProgram | null, pname: GLEnumProgramParam): number;
    getRenderbufferParameter(
        target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam.RENDERBUFFER_INTERNAL_FORMAT,
    ): GLEnumRenderbufferInternalFormat;
    getRenderbufferParameter(
        target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam,
    ): number;
    getRenderbufferParameter(
        target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam,
    ): any {
        switch (pname) {
            case GLEnumRenderbufferParam.RENDERBUFFER_WIDTH:
            case GLEnumRenderbufferParam.RENDERBUFFER_HEIGHT:
            case GLEnumRenderbufferParam.RENDERBUFFER_INTERNAL_FORMAT:
            case GLEnumRenderbufferParam.RENDERBUFFER_RED_SIZE:
            case GLEnumRenderbufferParam.RENDERBUFFER_GREEN_SIZE:
            case GLEnumRenderbufferParam.RENDERBUFFER_BLUE_SIZE:
            case GLEnumRenderbufferParam.RENDERBUFFER_ALPHA_SIZE:
            case GLEnumRenderbufferParam.RENDERBUFFER_DEPTH_SIZE:
            case GLEnumRenderbufferParam.RENDERBUFFER_STENCIL_SIZE:
                return this.getRenderbufferParameteriv(target, pname);
            default:
                return assertNever(pname);
        }
    }
    protected abstract getRenderbufferParameteriv(target: GLEnumRenderbuffer.RENDERBUFFER, pname: GLEnumRenderbufferParam): number;
    abstract getShaderInfoLog(shader: NSWebGLShader | null): string | null;
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
    getShaderParameter(shader: NSWebGLShader | null, pname: GLEnumShaderParam): number | boolean {
        switch (pname) {
            case GLEnumShaderParam.DELETE_STATUS:
            case GLEnumShaderParam.COMPILE_STATUS:
                return !!this.getShaderParameteriv(shader, pname);
            case GLEnumShaderParam.SHADER_TYPE:
            case GLEnumShaderParam.INFO_LOG_LENGTH:
            case GLEnumShaderParam.SHADER_SOURCE_LENGTH:
                return this.getShaderParameteriv(shader, pname);
            default:
                return assertNever(pname);
        }
    }
    protected abstract getShaderParameteriv(shader: NSWebGLShader | null, pname: GLEnumShaderParam): number;
    abstract getShaderPrecisionFormat(
        shadertype: number, precisiontype: number,
    ): WebGLShaderPrecisionFormat | null;
    abstract getShaderSource(shader: NSWebGLShader | null): string | null;
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
    getTexParameter(target: GLEnumTexTarget, pname: GLEnumTexParam): number {
        switch (pname) {
            case GLEnumTexParam.TEXTURE_MAG_FILTER:
            case GLEnumTexParam.TEXTURE_MIN_FILTER:
            case GLEnumTexParam.TEXTURE_WRAP_S:
            case GLEnumTexParam.TEXTURE_WRAP_T:
                return this.getTexParameteriv(target, pname);
            default:
                return assertNever(pname);
        }
    }
    protected abstract getTexParameteriv(target: GLEnumTexTarget, pname: GLEnumTexParam): number;
    getUniform(
        program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null,
    ): number[] | boolean[] | null {
        if (!program || !location) return null;

        let baseType: GLEnumUniformType.BOOL | GLEnumUniformType.FLOAT | GLEnumUniformType.INT;
        let length: number;
        switch (location._type) {
            case GLEnumUniformType.BOOL:
                baseType = GLEnumUniformType.BOOL;
                length = 1;
                break;
            case GLEnumUniformType.BOOL_VEC2:
                baseType = GLEnumUniformType.BOOL;
                length = 2;
                break;
            case GLEnumUniformType.BOOL_VEC3:
                baseType = GLEnumUniformType.BOOL;
                length = 3;
                break;
            case GLEnumUniformType.BOOL_VEC4:
                baseType = GLEnumUniformType.BOOL;
                length = 4;
                break;
            case GLEnumUniformType.FLOAT:
                baseType = GLEnumUniformType.FLOAT;
                length = 1;
                break;
            case GLEnumUniformType.FLOAT_VEC2:
                baseType = GLEnumUniformType.FLOAT;
                length = 2;
                break;
            case GLEnumUniformType.FLOAT_VEC3:
                baseType = GLEnumUniformType.FLOAT;
                length = 3;
                break;
            case GLEnumUniformType.FLOAT_VEC4:
                baseType = GLEnumUniformType.FLOAT;
                length = 4;
                break;
            case GLEnumUniformType.INT:
                baseType = GLEnumUniformType.INT;
                length = 1;
                break;
            case GLEnumUniformType.INT_VEC2:
                baseType = GLEnumUniformType.INT;
                length = 2;
                break;
            case GLEnumUniformType.INT_VEC3:
                baseType = GLEnumUniformType.INT;
                length = 3;
                break;
            case GLEnumUniformType.INT_VEC4:
                baseType = GLEnumUniformType.INT;
                length = 4;
                break;
            case GLEnumUniformType.FLOAT_MAT2:
                baseType = GLEnumUniformType.FLOAT;
                length = 4;
                break;
            case GLEnumUniformType.FLOAT_MAT3:
                baseType = GLEnumUniformType.FLOAT;
                length = 9;
                break;
            case GLEnumUniformType.FLOAT_MAT4:
                baseType = GLEnumUniformType.FLOAT;
                length = 16;
                break;
            case GLEnumUniformType.SAMPLER_2D:
            case GLEnumUniformType.SAMPLER_CUBE:
                baseType = GLEnumUniformType.INT;
                length = 1;
                break;
            default:
                return assertNever(location._type);
        }
        switch (baseType) {
            case GLEnumUniformType.BOOL:
                return this.getUniformiv(program, location, length)
                    .map(x => !!x);
            case GLEnumUniformType.FLOAT:
                return this.getUniformfv(program, location, length);
            case GLEnumUniformType.INT:
                return this.getUniformiv(program, location, length);
            default:
                return assertNever(baseType);
        }
    }
    protected abstract getUniformiv(
        program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null, length: number,
    ): number[];
    protected abstract getUniformfv(
        program: NSWebGLProgram | null, location: NSWebGLUniformLocation | null, length: number,
    ): number[];
    abstract getUniformLocation(program: NSWebGLProgram | null, name: string): NSWebGLUniformLocation | null;
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
    getVertexAttrib(index: number, pname: GLEnumVertexAttrib): any {
        switch (pname) {
            case GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_SIZE:
            case GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_STRIDE:
            case GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_TYPE:
                return this.getVertexAttribiv(index, pname);
            case GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_ENABLED:
            case GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                return !!this.getVertexAttribiv(index, pname);
            case GLEnumVertexAttrib.CURRENT_VERTEX_ATTRIB:
                return this.getVertexAttribiv(index, pname, 4);
            case GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                return new NSWebGLBuffer(this.getVertexAttribiv(index, pname));
            case GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_POINTER:
                throw new Error('VERTEX_ATTRIB_ARRAY_POINTER is not a valid pname');
            default:
                return assertNever(pname);
        }
    }
    getVertexAttribOffset(index: number, pname: GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_POINTER): number {
        switch (pname) {
            case GLEnumVertexAttrib.VERTEX_ATTRIB_ARRAY_POINTER:
                return this.getVertexAttribiv(index, pname);
            default:
                return assertNever(pname);
        }
    }
    protected abstract getVertexAttribiv(index: number, pname: GLEnumVertexAttrib): number;
    protected abstract getVertexAttribiv(index: number, pname: GLEnumVertexAttrib, size: number): number[];
    abstract hint(target: number, mode: GLEnumHintMode): void;
    abstract isBuffer(buffer: NSWebGLBuffer | null): boolean;
    abstract isEnabled(cap: number): boolean;
    abstract isFramebuffer(framebuffer: NSWebGLFramebuffer | null): boolean;
    abstract isProgram(program: NSWebGLProgram | null): boolean;
    abstract isRenderbuffer(renderbuffer: NSWebGLRenderbuffer | null): boolean;
    abstract isShader(shader: NSWebGLShader | null): boolean;
    abstract isTexture(texture: NSWebGLTexture | null): boolean;
    abstract lineWidth(width: number): void;
    abstract linkProgram(program: NSWebGLProgram | null): void;
    abstract pixelStorei(pname: GLEnumPixelStore, param: number): void;
    abstract polygonOffset(factor: number, units: number): void;
    readPixels(
        x: number, y: number, width: number, height: number, format: GLEnumPixelFormat,
        type: GLEnumPixelType, pixels: ArrayBufferView,
    ): void {
        let componentsPerPixel: number;
        let bytesPerComponent: number;
        switch (format) {
            case GLEnumPixelFormat.ALPHA:
            case GLEnumPixelFormat.DEPTH_COMPONENT:
            case GLEnumPixelFormat.LUMINANCE:
                componentsPerPixel = 1;
                break;
            case GLEnumPixelFormat.LUMINANCE_ALPHA:
                componentsPerPixel = 2;
                break;
            case GLEnumPixelFormat.RGB:
                componentsPerPixel = 3;
                break;
            case GLEnumPixelFormat.RGBA:
                componentsPerPixel = 4;
                break;
            default:
                return assertNever(format);
        }
        switch (type) {
            case GLEnumPixelType.BYTE:
            case GLEnumPixelType.UNSIGNED_BYTE:
                bytesPerComponent = 1;
                break;
            case GLEnumPixelType.SHORT:
            case GLEnumPixelType.UNSIGNED_SHORT:
                bytesPerComponent = 2;
                break;
            case GLEnumPixelType.INT:
            case GLEnumPixelType.UNSIGNED_INT:
                bytesPerComponent = 4;
                break;
            case GLEnumPixelType.FLOAT:
                bytesPerComponent = 4;
                break;
            case GLEnumPixelType.UNSIGNED_SHORT_4_4_4_4:
            case GLEnumPixelType.UNSIGNED_SHORT_5_5_5_1:
            case GLEnumPixelType.UNSIGNED_SHORT_5_6_5:
                componentsPerPixel = 1;
                bytesPerComponent = 2;
                break;
            default:
                return assertNever(type);
        }

        const unpackAlignment = this.getParameteriv(GLEnumParam.UNPACK_ALIGNMENT);
        const rowSize = width * componentsPerPixel * bytesPerComponent;
        const alignedSize = rowSize + (unpackAlignment - rowSize % unpackAlignment) % unpackAlignment;

        this.readPixelsCore(
            x, y, width, height, format, type, pixels,
            alignedSize * (height - 1) + rowSize);
    }
    protected abstract readPixelsCore(
        x: number, y: number, width: number, height: number, format: GLEnumPixelFormat,
        type: GLEnumPixelType, pixels: ArrayBufferView, bufferSize: number,
    );
    abstract renderbufferStorage(
        target: GLEnumRenderbuffer, internalformat: GLEnumRenderbufferInternalFormat,
        width: number, height: number,
    ): void;
    abstract sampleCoverage(value: number, invert: boolean): void;
    abstract scissor(x: number, y: number, width: number, height: number): void;
    abstract shaderSource(shader: NSWebGLShader | null, source: string): void;
    abstract stencilFunc(func: number, ref: number, mask: number): void;
    abstract stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
    abstract stencilMask(mask: number): void;
    abstract stencilMaskSeparate(face: number, mask: number): void;
    abstract stencilOp(fail: number, zfail: number, zpass: number): void;
    abstract stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
    abstract texImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, internalformat: GLEnumColorComponent,
        width: number, height: number, border: number, format: GLEnumColorComponent, type: GLEnumPixelType,
        pixels: ArrayBufferView,
    ): void;
    abstract texParameterf(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void;
    abstract texParameteri(target: GLEnumTexTarget, pname: GLEnumTexParam, param: number): void;
    abstract texSubImage2D(
        target: GLEnumTexTarget | GLEnumTexCubeMap, level: number, xoffset: number, yoffset: number,
        width: number, height: number, format: GLEnumColorComponent, type: GLEnumPixelType,
        pixels: ArrayBufferView,
    ): void;
    abstract uniform1f(location: NSWebGLUniformLocation | null, x: number): void;
    abstract uniform1fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    abstract uniform1i(location: NSWebGLUniformLocation | null, x: number): void;
    abstract uniform1iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void;
    abstract uniform2f(location: NSWebGLUniformLocation | null, x: number, y: number): void;
    abstract uniform2fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    abstract uniform2i(location: NSWebGLUniformLocation | null, x: number, y: number): void;
    abstract uniform2iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void;
    abstract uniform3f(location: NSWebGLUniformLocation | null, x: number, y: number, z: number): void;
    abstract uniform3fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    abstract uniform3i(location: NSWebGLUniformLocation | null, x: number, y: number, z: number): void;
    abstract uniform3iv(
        location: NSWebGLUniformLocation, v: Int32Array | number[],
    ): void;
    abstract uniform4f(
        location: NSWebGLUniformLocation | null,
        x: number, y: number, z: number, w: number
    ): void;
    abstract uniform4fv(location: NSWebGLUniformLocation, v: Float32Array | number[]): void;
    abstract uniform4i(
        location: NSWebGLUniformLocation | null,
        x: number, y: number, z: number, w: number
    ): void;
    abstract uniform4iv(location: NSWebGLUniformLocation, v: Int32Array | number[]): void;
    abstract uniformMatrix2fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void;
    abstract uniformMatrix3fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void;
    abstract uniformMatrix4fv(
        location: NSWebGLUniformLocation, transpose: boolean,
        value: Float32Array | number[],
    ): void;
    abstract useProgram(program: NSWebGLProgram | null): void;
    abstract validateProgram(program: NSWebGLProgram | null): void;
    abstract vertexAttrib1f(indx: number, x: number): void;
    abstract vertexAttrib1fv(indx: number, values: Float32Array | number[]): void;
    abstract vertexAttrib2f(indx: number, x: number, y: number): void;
    abstract vertexAttrib2fv(indx: number, values: Float32Array | number[]): void;
    abstract vertexAttrib3f(indx: number, x: number, y: number, z: number): void;
    abstract vertexAttrib3fv(indx: number, values: Float32Array | number[]): void;
    abstract vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void;
    abstract vertexAttrib4fv(indx: number, values: Float32Array | number[]): void;
    abstract vertexAttribPointer(
        indx: number, size: number, type: number, normalized: boolean, stride: number,
        offset: number,
    ): void;
    abstract viewport(x: number, y: number, width: number, height: number): void;
}
