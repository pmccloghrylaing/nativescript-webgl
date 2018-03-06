import { GLEnumUniformType } from './constants.common';
export declare class NSWebGLBuffer implements WebGLBuffer {
    readonly _id: number;
    constructor(_id: number);
}
export declare class NSWebGLFramebuffer {
    readonly _id: number;
    constructor(_id: number);
}
export declare class NSWebGLRenderbuffer {
    readonly _id: number;
    constructor(_id: number);
}
export declare class NSWebGLProgram {
    readonly _id: number;
    constructor(_id: number);
}
export declare class NSWebGLTexture {
    readonly _id: number;
    constructor(_id: number);
}
export declare class NSWebGLUniformLocation {
    readonly _id: number;
    readonly _type: GLEnumUniformType;
    constructor(_id: number, _type: GLEnumUniformType);
}
export declare class NSWebGLShader {
    readonly _id: number;
    constructor(_id: number);
}
export declare type NSWebGLObject = NSWebGLBuffer | NSWebGLFramebuffer | NSWebGLRenderbuffer | NSWebGLProgram | NSWebGLShader | NSWebGLTexture | NSWebGLUniformLocation;
export declare function getIdOrZero(obj: NSWebGLObject | null | undefined): number;
