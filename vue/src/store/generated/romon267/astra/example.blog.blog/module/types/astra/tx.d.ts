import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "romon267.astra.astra";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePlanet {
    creator: string;
    name: string;
    biome: string;
}
export interface MsgCreatePlanetResponse {
}
export declare const MsgCreatePlanet: {
    encode(message: MsgCreatePlanet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePlanet;
    fromJSON(object: any): MsgCreatePlanet;
    toJSON(message: MsgCreatePlanet): unknown;
    fromPartial(object: DeepPartial<MsgCreatePlanet>): MsgCreatePlanet;
};
export declare const MsgCreatePlanetResponse: {
    encode(_: MsgCreatePlanetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePlanetResponse;
    fromJSON(_: any): MsgCreatePlanetResponse;
    toJSON(_: MsgCreatePlanetResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePlanetResponse>): MsgCreatePlanetResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreatePlanet(request: MsgCreatePlanet): Promise<MsgCreatePlanetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePlanet(request: MsgCreatePlanet): Promise<MsgCreatePlanetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
