import '../../node_modules/tns-platform-declarations/android';

export function toByteBuffer(buffer: ArrayBuffer | ArrayBufferView) {
    const javaBuffer = java.nio.BaseByteBuffer.allocate(buffer.byteLength);

    const byteArray = ArrayBuffer.isView(buffer)
        ? new Uint8ClampedArray(buffer.buffer, buffer.byteOffset, buffer.byteLength)
        : new Uint8ClampedArray(buffer);

    byteArray.forEach((b, i) => {
        javaBuffer.put(i, b);
    });

    return javaBuffer;
}

export function fromByteBuffer(src: java.nio.ByteBuffer): ArrayBuffer;
export function fromByteBuffer(src: java.nio.ByteBuffer, dst: ArrayBuffer | ArrayBufferView): void;
export function fromByteBuffer(src: java.nio.ByteBuffer, dst?: ArrayBuffer | ArrayBufferView): ArrayBuffer | void {
    const shouldReturn = !dst;

    if (!dst) {
        dst = new ArrayBuffer(src.capacity());
    }

    const dataView = ArrayBuffer.isView(dst)
        ? new DataView(dst.buffer, dst.byteOffset, dst.byteLength)
        : new DataView(dst);
    for (let i = 0; i < src.capacity(); i++) {
        dataView.setUint8(i, src.get(i));
    }

    if (shouldReturn) {
        return dataView.buffer;
    }
}

export function toFloatBuffer(buffer: Float32Array | number[]) {
    const javaBuffer = java.nio.FloatBuffer.allocate(buffer.length);
    if (Array.isArray(buffer)) {
        buffer.forEach((v, i) => {
            javaBuffer.put(i, v);
        });
    } else {
        buffer.forEach((v, i) => {
            javaBuffer.put(i, v);
        });
    }

    return javaBuffer;
}

export function fromFloatBuffer(buffer: java.nio.FloatBuffer) {
    const array: number[] = [];
    array.forEach((v, i) => {
        array[i] = buffer.get(i);
    });

    return array;
}

export function toIntBuffer(buffer: Int32Array | number[]) {
    const javaBuffer = java.nio.IntBuffer.allocate(buffer.length);
    if (Array.isArray(buffer)) {
        buffer.forEach((v, i) => {
            javaBuffer.put(i, v);
        });
    } else {
        buffer.forEach((v, i) => {
            javaBuffer.put(i, v);
        });
    }

    return javaBuffer;
}

export function fromIntBuffer(buffer: java.nio.IntBuffer) {
    const array: number[] = [];
    array.forEach((v, i) => {
        array[i] = buffer.get(i);
    });

    return array;
}

export function isArray(obj: object): obj is any[] {
    return 'length' in obj;
}
