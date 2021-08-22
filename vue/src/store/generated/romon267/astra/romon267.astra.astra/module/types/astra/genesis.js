/* eslint-disable */
import { Shaper } from '../astra/shaper';
import { Planet } from '../astra/planet';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'romon267.astra.astra';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.shaperList) {
            Shaper.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.planetList) {
            Planet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.shaperList = [];
        message.planetList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shaperList.push(Shaper.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.planetList.push(Planet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.shaperList = [];
        message.planetList = [];
        if (object.shaperList !== undefined && object.shaperList !== null) {
            for (const e of object.shaperList) {
                message.shaperList.push(Shaper.fromJSON(e));
            }
        }
        if (object.planetList !== undefined && object.planetList !== null) {
            for (const e of object.planetList) {
                message.planetList.push(Planet.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.shaperList) {
            obj.shaperList = message.shaperList.map((e) => (e ? Shaper.toJSON(e) : undefined));
        }
        else {
            obj.shaperList = [];
        }
        if (message.planetList) {
            obj.planetList = message.planetList.map((e) => (e ? Planet.toJSON(e) : undefined));
        }
        else {
            obj.planetList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.shaperList = [];
        message.planetList = [];
        if (object.shaperList !== undefined && object.shaperList !== null) {
            for (const e of object.shaperList) {
                message.shaperList.push(Shaper.fromPartial(e));
            }
        }
        if (object.planetList !== undefined && object.planetList !== null) {
            for (const e of object.planetList) {
                message.planetList.push(Planet.fromPartial(e));
            }
        }
        return message;
    }
};
