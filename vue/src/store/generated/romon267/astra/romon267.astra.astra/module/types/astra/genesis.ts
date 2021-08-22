/* eslint-disable */
import { Shaper } from '../astra/shaper'
import { Planet } from '../astra/planet'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'romon267.astra.astra'

/** GenesisState defines the astra module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  shaperList: Shaper[]
  /** this line is used by starport scaffolding # ibc/genesis/proto */
  planetList: Planet[]
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.shaperList) {
      Shaper.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.planetList) {
      Planet.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.shaperList = []
    message.planetList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.shaperList.push(Shaper.decode(reader, reader.uint32()))
          break
        case 2:
          message.planetList.push(Planet.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.shaperList = []
    message.planetList = []
    if (object.shaperList !== undefined && object.shaperList !== null) {
      for (const e of object.shaperList) {
        message.shaperList.push(Shaper.fromJSON(e))
      }
    }
    if (object.planetList !== undefined && object.planetList !== null) {
      for (const e of object.planetList) {
        message.planetList.push(Planet.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.shaperList) {
      obj.shaperList = message.shaperList.map((e) => (e ? Shaper.toJSON(e) : undefined))
    } else {
      obj.shaperList = []
    }
    if (message.planetList) {
      obj.planetList = message.planetList.map((e) => (e ? Planet.toJSON(e) : undefined))
    } else {
      obj.planetList = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.shaperList = []
    message.planetList = []
    if (object.shaperList !== undefined && object.shaperList !== null) {
      for (const e of object.shaperList) {
        message.shaperList.push(Shaper.fromPartial(e))
      }
    }
    if (object.planetList !== undefined && object.planetList !== null) {
      for (const e of object.planetList) {
        message.planetList.push(Planet.fromPartial(e))
      }
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
