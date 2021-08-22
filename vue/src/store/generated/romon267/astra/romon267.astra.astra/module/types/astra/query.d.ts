import { Reader, Writer } from 'protobufjs/minimal';
import { Shaper } from '../astra/shaper';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Planet } from '../astra/planet';
export declare const protobufPackage = "romon267.astra.astra";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetShaperRequest {
    address: string;
}
export interface QueryGetShaperResponse {
    Shaper: Shaper | undefined;
}
export interface QueryAllShaperRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllShaperResponse {
    Shaper: Shaper[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPlanetRequest {
    id: string;
}
export interface QueryGetPlanetResponse {
    Planet: Planet | undefined;
}
export interface QueryAllPlanetRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPlanetResponse {
    Planets: Planet[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetShaperRequest: {
    encode(message: QueryGetShaperRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetShaperRequest;
    fromJSON(object: any): QueryGetShaperRequest;
    toJSON(message: QueryGetShaperRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetShaperRequest>): QueryGetShaperRequest;
};
export declare const QueryGetShaperResponse: {
    encode(message: QueryGetShaperResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetShaperResponse;
    fromJSON(object: any): QueryGetShaperResponse;
    toJSON(message: QueryGetShaperResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetShaperResponse>): QueryGetShaperResponse;
};
export declare const QueryAllShaperRequest: {
    encode(message: QueryAllShaperRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllShaperRequest;
    fromJSON(object: any): QueryAllShaperRequest;
    toJSON(message: QueryAllShaperRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllShaperRequest>): QueryAllShaperRequest;
};
export declare const QueryAllShaperResponse: {
    encode(message: QueryAllShaperResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllShaperResponse;
    fromJSON(object: any): QueryAllShaperResponse;
    toJSON(message: QueryAllShaperResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllShaperResponse>): QueryAllShaperResponse;
};
export declare const QueryGetPlanetRequest: {
    encode(message: QueryGetPlanetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPlanetRequest;
    fromJSON(object: any): QueryGetPlanetRequest;
    toJSON(message: QueryGetPlanetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPlanetRequest>): QueryGetPlanetRequest;
};
export declare const QueryGetPlanetResponse: {
    encode(message: QueryGetPlanetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPlanetResponse;
    fromJSON(object: any): QueryGetPlanetResponse;
    toJSON(message: QueryGetPlanetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPlanetResponse>): QueryGetPlanetResponse;
};
export declare const QueryAllPlanetRequest: {
    encode(message: QueryAllPlanetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPlanetRequest;
    fromJSON(object: any): QueryAllPlanetRequest;
    toJSON(message: QueryAllPlanetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPlanetRequest>): QueryAllPlanetRequest;
};
export declare const QueryAllPlanetResponse: {
    encode(message: QueryAllPlanetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPlanetResponse;
    fromJSON(object: any): QueryAllPlanetResponse;
    toJSON(message: QueryAllPlanetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPlanetResponse>): QueryAllPlanetResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a shaper by index. */
    Shaper(request: QueryGetShaperRequest): Promise<QueryGetShaperResponse>;
    /** Queries a list of shaper items. */
    ShaperAll(request: QueryAllShaperRequest): Promise<QueryAllShaperResponse>;
    Planet(request: QueryGetPlanetRequest): Promise<QueryGetPlanetResponse>;
    PlanetAll(request: QueryAllPlanetRequest): Promise<QueryAllPlanetResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Shaper(request: QueryGetShaperRequest): Promise<QueryGetShaperResponse>;
    ShaperAll(request: QueryAllShaperRequest): Promise<QueryAllShaperResponse>;
    Planet(request: QueryGetPlanetRequest): Promise<QueryGetPlanetResponse>;
    PlanetAll(request: QueryAllPlanetRequest): Promise<QueryAllPlanetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
