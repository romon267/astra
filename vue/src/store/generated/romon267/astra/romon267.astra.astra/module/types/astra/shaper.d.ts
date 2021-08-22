import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "romon267.astra.astra";
export interface Shaper {
    creator: string;
    /** string index = 2; */
    name: string;
    address: string;
    rank: string;
    planetIds: number[];
    starIds: number[];
}
export declare const Shaper: {
    encode(message: Shaper, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Shaper;
    fromJSON(object: any): Shaper;
    toJSON(message: Shaper): unknown;
    fromPartial(object: DeepPartial<Shaper>): Shaper;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
