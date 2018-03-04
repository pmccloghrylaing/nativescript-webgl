import { GLEnumUniformType } from './constants.common';

export class NSWebGLBuffer implements WebGLBuffer {
    constructor(public readonly _id: number) {}
}

export class NSWebGLFramebuffer {
    constructor(public readonly _id: number) {}
}

export class NSWebGLRenderbuffer {
    constructor(public readonly _id: number) {}
}

export class NSWebGLProgram {
    constructor(public readonly _id: number) {}
}

export class NSWebGLTexture {
    constructor(public readonly _id: number) {}
}

export class NSWebGLUniformLocation {
    constructor(
        public readonly _id: number,
        public readonly _type: GLEnumUniformType,
    ) {}
}

export class NSWebGLShader {
    constructor(public readonly _id: number) {}
}

export function getIdOrZero(obj: { _id: number; } | null | undefined) {
    return obj && obj._id || 0;
}
