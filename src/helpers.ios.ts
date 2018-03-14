
// export function toByteBuffer(buffer: ArrayBuffer | ArrayBufferView) {
//     const objcBuffer = interop.alloc(buffer.byteLength);

//     const byteArray = ArrayBuffer.isView(buffer)
//         ? new Uint8ClampedArray(buffer.buffer, buffer.byteOffset, buffer.byteLength)
//         : new Uint8ClampedArray(buffer);

//     byteArray.forEach((b, i) => {
//         objcBuffer.put(i, b);
//     });

//     return objcBuffer;
// }

// export function fromByteBuffer(src: objc.nio.ByteBuffer): ArrayBuffer;
// export function fromByteBuffer(src: objc.nio.ByteBuffer, dst: ArrayBuffer | ArrayBufferView): void;
// export function fromByteBuffer(src: objc.nio.ByteBuffer, dst?: ArrayBuffer | ArrayBufferView): ArrayBuffer | void {
//     const shouldReturn = !dst;

//     if (!dst) {
//         dst = new ArrayBuffer(src.capacity());
//     }

//     const dataView = ArrayBuffer.isView(dst)
//         ? new DataView(dst.buffer, dst.byteOffset, dst.byteLength)
//         : new DataView(dst);
//     for (let i = 0; i < src.capacity(); i++) {
//         dataView.setUint8(i, src.get(i));
//     }

//     if (shouldReturn) {
//         return dataView.buffer;
//     }
// }

export function toFloatBuffer(buffer: Float32Array | number[]) {
    const arr = Array.isArray(buffer)
        ? new Float32Array(buffer)
        : buffer;

    return interop.handleof(arr);
}

export function fromFloatBuffer(pointer: interop.Pointer): number;
export function fromFloatBuffer(pointer: interop.Pointer, size: number): number[];
export function fromFloatBuffer(pointer: interop.Pointer, size?: number): number | number[];
export function fromFloatBuffer(pointer: interop.Pointer, size?: number) {
    const ref = new interop.Reference(interop.types.float, pointer);

    if (size == null) {
        return ref.value;
    }

    const array: number[] = [];
    for (let i = 0; i < size; i++) {
        array.push(
            ref[i],
        );
    }

    return array;
}

export function toIntBuffer(buffer: Int32Array | number[]) {
    const arr = Array.isArray(buffer)
        ? new Int32Array(buffer)
        : buffer;

    return interop.handleof(arr);
}

export function fromIntBuffer(pointer: interop.Pointer): number;
export function fromIntBuffer(pointer: interop.Pointer, size: number): number[];
export function fromIntBuffer(pointer: interop.Pointer, size?: number): number | number[];
export function fromIntBuffer(pointer: interop.Pointer, size?: number) {
    const ref = new interop.Reference(interop.types.float, pointer);

    if (size == null) {
        return ref.value;
    }

    const array: number[] = [];
    for (let i = 0; i < size; i++) {
        array.push(
            ref[i],
        );
    }

    return array;
}
