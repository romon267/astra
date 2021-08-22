/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Shaper } from '../astra/shaper';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Planet } from '../astra/planet';
export const protobufPackage = 'romon267.astra.astra';
const baseQueryGetShaperRequest = { address: '' };
export const QueryGetShaperRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetShaperRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetShaperRequest };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetShaperRequest };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        return message;
    }
};
const baseQueryGetShaperResponse = {};
export const QueryGetShaperResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Shaper !== undefined) {
            Shaper.encode(message.Shaper, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetShaperResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Shaper = Shaper.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetShaperResponse };
        if (object.Shaper !== undefined && object.Shaper !== null) {
            message.Shaper = Shaper.fromJSON(object.Shaper);
        }
        else {
            message.Shaper = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Shaper !== undefined && (obj.Shaper = message.Shaper ? Shaper.toJSON(message.Shaper) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetShaperResponse };
        if (object.Shaper !== undefined && object.Shaper !== null) {
            message.Shaper = Shaper.fromPartial(object.Shaper);
        }
        else {
            message.Shaper = undefined;
        }
        return message;
    }
};
const baseQueryAllShaperRequest = {};
export const QueryAllShaperRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllShaperRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllShaperRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllShaperRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllShaperResponse = {};
export const QueryAllShaperResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Shaper) {
            Shaper.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllShaperResponse };
        message.Shaper = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Shaper.push(Shaper.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllShaperResponse };
        message.Shaper = [];
        if (object.Shaper !== undefined && object.Shaper !== null) {
            for (const e of object.Shaper) {
                message.Shaper.push(Shaper.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Shaper) {
            obj.Shaper = message.Shaper.map((e) => (e ? Shaper.toJSON(e) : undefined));
        }
        else {
            obj.Shaper = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllShaperResponse };
        message.Shaper = [];
        if (object.Shaper !== undefined && object.Shaper !== null) {
            for (const e of object.Shaper) {
                message.Shaper.push(Shaper.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetPlanetRequest = { id: '' };
export const QueryGetPlanetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPlanetRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPlanetRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPlanetRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    }
};
const baseQueryGetPlanetResponse = {};
export const QueryGetPlanetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Planet !== undefined) {
            Planet.encode(message.Planet, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPlanetResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Planet = Planet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPlanetResponse };
        if (object.Planet !== undefined && object.Planet !== null) {
            message.Planet = Planet.fromJSON(object.Planet);
        }
        else {
            message.Planet = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Planet !== undefined && (obj.Planet = message.Planet ? Planet.toJSON(message.Planet) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPlanetResponse };
        if (object.Planet !== undefined && object.Planet !== null) {
            message.Planet = Planet.fromPartial(object.Planet);
        }
        else {
            message.Planet = undefined;
        }
        return message;
    }
};
const baseQueryAllPlanetRequest = {};
export const QueryAllPlanetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPlanetRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPlanetRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPlanetRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPlanetResponse = {};
export const QueryAllPlanetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Planets) {
            Planet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPlanetResponse };
        message.Planets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Planets.push(Planet.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPlanetResponse };
        message.Planets = [];
        if (object.Planets !== undefined && object.Planets !== null) {
            for (const e of object.Planets) {
                message.Planets.push(Planet.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Planets) {
            obj.Planets = message.Planets.map((e) => (e ? Planet.toJSON(e) : undefined));
        }
        else {
            obj.Planets = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPlanetResponse };
        message.Planets = [];
        if (object.Planets !== undefined && object.Planets !== null) {
            for (const e of object.Planets) {
                message.Planets.push(Planet.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Shaper(request) {
        const data = QueryGetShaperRequest.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Query', 'Shaper', data);
        return promise.then((data) => QueryGetShaperResponse.decode(new Reader(data)));
    }
    ShaperAll(request) {
        const data = QueryAllShaperRequest.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Query', 'ShaperAll', data);
        return promise.then((data) => QueryAllShaperResponse.decode(new Reader(data)));
    }
    Planet(request) {
        const data = QueryGetPlanetRequest.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Query', 'Planet', data);
        return promise.then((data) => QueryGetPlanetResponse.decode(new Reader(data)));
    }
    PlanetAll(request) {
        const data = QueryAllPlanetRequest.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Query', 'PlanetAll', data);
        return promise.then((data) => QueryAllPlanetResponse.decode(new Reader(data)));
    }
}
