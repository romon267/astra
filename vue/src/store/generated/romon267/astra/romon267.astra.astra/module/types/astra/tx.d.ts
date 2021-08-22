import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "romon267.astra.astra";
export interface MsgUpdateShaperPlanets {
    creator: string;
    address: string;
    planetIds: number[];
}
export interface MsgUpdateShaperPlanetsResponse {
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateShaper {
    creator: string;
    /** string index = 2; */
    name: string;
    address: string;
    /** repeated int64 planetIds = 6; */
    rank: string;
}
export interface MsgCreateShaperResponse {
}
export interface MsgUpdateShaper {
    creator: string;
    /** string id = 2; */
    name: string;
    address: string;
    rank: string;
    planetIds: number[];
    starIds: number[];
}
export interface MsgUpdateShaperResponse {
}
export interface MsgDeleteShaper {
    creator: string;
    address: string;
}
export interface MsgDeleteShaperResponse {
}
export interface MsgCreatePlanet {
    creator: string;
    name: string;
    biome: string;
}
export interface MsgCreatePlanetResponse {
}
export declare const MsgUpdateShaperPlanets: {
    encode(message: MsgUpdateShaperPlanets, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateShaperPlanets;
    fromJSON(object: any): MsgUpdateShaperPlanets;
    toJSON(message: MsgUpdateShaperPlanets): unknown;
    fromPartial(object: DeepPartial<MsgUpdateShaperPlanets>): MsgUpdateShaperPlanets;
};
export declare const MsgUpdateShaperPlanetsResponse: {
    encode(_: MsgUpdateShaperPlanetsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateShaperPlanetsResponse;
    fromJSON(_: any): MsgUpdateShaperPlanetsResponse;
    toJSON(_: MsgUpdateShaperPlanetsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateShaperPlanetsResponse>): MsgUpdateShaperPlanetsResponse;
};
export declare const MsgCreateShaper: {
    encode(message: MsgCreateShaper, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateShaper;
    fromJSON(object: any): MsgCreateShaper;
    toJSON(message: MsgCreateShaper): unknown;
    fromPartial(object: DeepPartial<MsgCreateShaper>): MsgCreateShaper;
};
export declare const MsgCreateShaperResponse: {
    encode(_: MsgCreateShaperResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateShaperResponse;
    fromJSON(_: any): MsgCreateShaperResponse;
    toJSON(_: MsgCreateShaperResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateShaperResponse>): MsgCreateShaperResponse;
};
export declare const MsgUpdateShaper: {
    encode(message: MsgUpdateShaper, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateShaper;
    fromJSON(object: any): MsgUpdateShaper;
    toJSON(message: MsgUpdateShaper): unknown;
    fromPartial(object: DeepPartial<MsgUpdateShaper>): MsgUpdateShaper;
};
export declare const MsgUpdateShaperResponse: {
    encode(_: MsgUpdateShaperResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateShaperResponse;
    fromJSON(_: any): MsgUpdateShaperResponse;
    toJSON(_: MsgUpdateShaperResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateShaperResponse>): MsgUpdateShaperResponse;
};
export declare const MsgDeleteShaper: {
    encode(message: MsgDeleteShaper, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteShaper;
    fromJSON(object: any): MsgDeleteShaper;
    toJSON(message: MsgDeleteShaper): unknown;
    fromPartial(object: DeepPartial<MsgDeleteShaper>): MsgDeleteShaper;
};
export declare const MsgDeleteShaperResponse: {
    encode(_: MsgDeleteShaperResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteShaperResponse;
    fromJSON(_: any): MsgDeleteShaperResponse;
    toJSON(_: MsgDeleteShaperResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteShaperResponse>): MsgDeleteShaperResponse;
};
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
    CreateShaper(request: MsgCreateShaper): Promise<MsgCreateShaperResponse>;
    UpdateShaper(request: MsgUpdateShaper): Promise<MsgUpdateShaperResponse>;
    UpdateShaperPlanets(request: MsgUpdateShaperPlanets): Promise<MsgUpdateShaperPlanetsResponse>;
    DeleteShaper(request: MsgDeleteShaper): Promise<MsgDeleteShaperResponse>;
    CreatePlanet(request: MsgCreatePlanet): Promise<MsgCreatePlanetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateShaper(request: MsgCreateShaper): Promise<MsgCreateShaperResponse>;
    UpdateShaper(request: MsgUpdateShaper): Promise<MsgUpdateShaperResponse>;
    UpdateShaperPlanets(request: MsgUpdateShaperPlanets): Promise<MsgUpdateShaperPlanetsResponse>;
    DeleteShaper(request: MsgDeleteShaper): Promise<MsgDeleteShaperResponse>;
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
