/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'romon267.astra.astra';
const baseShaper = { creator: '', name: '', address: '', rank: '', planetIds: 0, starIds: 0 };
export const Shaper = {
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
        const message = { ...baseShaper };
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
        const message = { ...baseShaper };
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
        const message = { ...baseShaper };
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
