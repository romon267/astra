/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'romon267.astra.astra';
const baseMsgUpdateShaperPlanets = { creator: '', address: '', planetIds: 0 };
export const MsgUpdateShaperPlanets = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        writer.uint32(26).fork();
        for (const v of message.planetIds) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateShaperPlanets };
        message.planetIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.planetIds.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.planetIds.push(longToNumber(reader.int64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateShaperPlanets };
        message.planetIds = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.planetIds !== undefined && object.planetIds !== null) {
            for (const e of object.planetIds) {
                message.planetIds.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        if (message.planetIds) {
            obj.planetIds = message.planetIds.map((e) => e);
        }
        else {
            obj.planetIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateShaperPlanets };
        message.planetIds = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.planetIds !== undefined && object.planetIds !== null) {
            for (const e of object.planetIds) {
                message.planetIds.push(e);
            }
        }
        return message;
    }
};
const baseMsgUpdateShaperPlanetsResponse = {};
export const MsgUpdateShaperPlanetsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateShaperPlanetsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateShaperPlanetsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateShaperPlanetsResponse };
        return message;
    }
};
const baseMsgCreateShaper = { creator: '', name: '', address: '', rank: '' };
export const MsgCreateShaper = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.address !== '') {
            writer.uint32(34).string(message.address);
        }
        if (message.rank !== '') {
            writer.uint32(42).string(message.rank);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateShaper };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.rank = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateShaper };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.rank !== undefined && object.rank !== null) {
            message.rank = String(object.rank);
        }
        else {
            message.rank = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.address !== undefined && (obj.address = message.address);
        message.rank !== undefined && (obj.rank = message.rank);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateShaper };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.rank !== undefined && object.rank !== null) {
            message.rank = object.rank;
        }
        else {
            message.rank = '';
        }
        return message;
    }
};
const baseMsgCreateShaperResponse = {};
export const MsgCreateShaperResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateShaperResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateShaperResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateShaperResponse };
        return message;
    }
};
const baseMsgUpdateShaper = { creator: '', name: '', address: '', rank: '', planetIds: 0, starIds: 0 };
export const MsgUpdateShaper = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.address !== '') {
            writer.uint32(26).string(message.address);
        }
        if (message.rank !== '') {
            writer.uint32(34).string(message.rank);
        }
        writer.uint32(42).fork();
        for (const v of message.planetIds) {
            writer.int64(v);
        }
        writer.ldelim();
        writer.uint32(50).fork();
        for (const v of message.starIds) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateShaper };
        message.planetIds = [];
        message.starIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.rank = reader.string();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.planetIds.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.planetIds.push(longToNumber(reader.int64()));
                    }
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.starIds.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.starIds.push(longToNumber(reader.int64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateShaper };
        message.planetIds = [];
        message.starIds = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.rank !== undefined && object.rank !== null) {
            message.rank = String(object.rank);
        }
        else {
            message.rank = '';
        }
        if (object.planetIds !== undefined && object.planetIds !== null) {
            for (const e of object.planetIds) {
                message.planetIds.push(Number(e));
            }
        }
        if (object.starIds !== undefined && object.starIds !== null) {
            for (const e of object.starIds) {
                message.starIds.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.address !== undefined && (obj.address = message.address);
        message.rank !== undefined && (obj.rank = message.rank);
        if (message.planetIds) {
            obj.planetIds = message.planetIds.map((e) => e);
        }
        else {
            obj.planetIds = [];
        }
        if (message.starIds) {
            obj.starIds = message.starIds.map((e) => e);
        }
        else {
            obj.starIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateShaper };
        message.planetIds = [];
        message.starIds = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.rank !== undefined && object.rank !== null) {
            message.rank = object.rank;
        }
        else {
            message.rank = '';
        }
        if (object.planetIds !== undefined && object.planetIds !== null) {
            for (const e of object.planetIds) {
                message.planetIds.push(e);
            }
        }
        if (object.starIds !== undefined && object.starIds !== null) {
            for (const e of object.starIds) {
                message.starIds.push(e);
            }
        }
        return message;
    }
};
const baseMsgUpdateShaperResponse = {};
export const MsgUpdateShaperResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateShaperResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateShaperResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateShaperResponse };
        return message;
    }
};
const baseMsgDeleteShaper = { creator: '', address: '' };
export const MsgDeleteShaper = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteShaper };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteShaper };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteShaper };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        return message;
    }
};
const baseMsgDeleteShaperResponse = {};
export const MsgDeleteShaperResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteShaperResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteShaperResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteShaperResponse };
        return message;
    }
};
const baseMsgCreatePlanet = { creator: '', name: '', biome: '' };
export const MsgCreatePlanet = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.biome !== '') {
            writer.uint32(26).string(message.biome);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePlanet };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.biome = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePlanet };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.biome !== undefined && object.biome !== null) {
            message.biome = String(object.biome);
        }
        else {
            message.biome = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.biome !== undefined && (obj.biome = message.biome);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePlanet };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.biome !== undefined && object.biome !== null) {
            message.biome = object.biome;
        }
        else {
            message.biome = '';
        }
        return message;
    }
};
const baseMsgCreatePlanetResponse = {};
export const MsgCreatePlanetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePlanetResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreatePlanetResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePlanetResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateShaper(request) {
        const data = MsgCreateShaper.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Msg', 'CreateShaper', data);
        return promise.then((data) => MsgCreateShaperResponse.decode(new Reader(data)));
    }
    UpdateShaper(request) {
        const data = MsgUpdateShaper.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Msg', 'UpdateShaper', data);
        return promise.then((data) => MsgUpdateShaperResponse.decode(new Reader(data)));
    }
    UpdateShaperPlanets(request) {
        const data = MsgUpdateShaperPlanets.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Msg', 'UpdateShaperPlanets', data);
        return promise.then((data) => MsgUpdateShaperPlanetsResponse.decode(new Reader(data)));
    }
    DeleteShaper(request) {
        const data = MsgDeleteShaper.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Msg', 'DeleteShaper', data);
        return promise.then((data) => MsgDeleteShaperResponse.decode(new Reader(data)));
    }
    CreatePlanet(request) {
        const data = MsgCreatePlanet.encode(request).finish();
        const promise = this.rpc.request('romon267.astra.astra.Msg', 'CreatePlanet', data);
        return promise.then((data) => MsgCreatePlanetResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
