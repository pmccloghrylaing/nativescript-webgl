import 'tns-platform-declarations/android';
export declare function toFloatBuffer(buffer: Float32Array | number[]): interop.Pointer;
export declare function fromFloatBuffer(pointer: interop.Pointer): number;
export declare function fromFloatBuffer(pointer: interop.Pointer, size: number): number[];
export declare function fromFloatBuffer(pointer: interop.Pointer, size?: number): number | number[];
export declare function toIntBuffer(buffer: Int32Array | number[]): interop.Pointer;
export declare function fromIntBuffer(pointer: interop.Pointer): number;
export declare function fromIntBuffer(pointer: interop.Pointer, size: number): number[];
export declare function fromIntBuffer(pointer: interop.Pointer, size?: number): number | number[];
