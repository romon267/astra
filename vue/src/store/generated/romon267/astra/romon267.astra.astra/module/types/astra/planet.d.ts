import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "romon267.astra.astra";
export interface Planet {
    id: string;
    creator: string;
    name: string;
    biome: string;
}
export declare const Planet: {
    encode(message: Planet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Planet;
    fromJSON(object: any): Planet;
    toJSON(message: Planet): unknown;
    fromPartial(object: DeepPartial<Planet>): Planet;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
