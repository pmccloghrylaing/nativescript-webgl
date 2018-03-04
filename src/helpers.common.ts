export function assertNever(obj: never): never {
    throw new Error('Expected never');
}
