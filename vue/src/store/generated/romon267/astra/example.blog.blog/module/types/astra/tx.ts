/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'romon267.astra.astra'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePlanet {
  creator: string
  name: string
  biome: string
}

export interface MsgCreatePlanetResponse {}

const baseMsgCreatePlanet: object = { creator: '', name: '', biome: '' }

export const MsgCreatePlanet = {
  encode(message: MsgCreatePlanet, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.biome !== '') {
      writer.uint32(26).string(message.biome)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePlanet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePlanet } as MsgCreatePlanet
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.biome = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePlanet {
    const message = { ...baseMsgCreatePlanet } as MsgCreatePlanet
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.biome !== undefined && object.biome !== null) {
      message.biome = String(object.biome)
    } else {
      message.biome = ''
    }
    return message
  },

  toJSON(message: MsgCreatePlanet): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.biome !== undefined && (obj.biome = message.biome)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePlanet>): MsgCreatePlanet {
    const message = { ...baseMsgCreatePlanet } as MsgCreatePlanet
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.biome !== undefined && object.biome !== null) {
      message.biome = object.biome
    } else {
      message.biome = ''
    }
    return message
  }
}

const baseMsgCreatePlanetResponse: object = {}

export const MsgCreatePlanetResponse = {
  encode(_: MsgCreatePlanetResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePlanetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePlanetResponse } as MsgCreatePlanetResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreatePlanetResponse {
    const message = { ...baseMsgCreatePlanetResponse } as MsgCreatePlanetResponse
    return message
  },

  toJSON(_: MsgCreatePlanetResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreatePlanetResponse>): MsgCreatePlanetResponse {
    const message = { ...baseMsgCreatePlanetResponse } as MsgCreatePlanetResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreatePlanet(request: MsgCreatePlanet): Promise<MsgCreatePlanetResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreatePlanet(request: MsgCreatePlanet): Promise<MsgCreatePlanetResponse> {
    const data = MsgCreatePlanet.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Msg', 'CreatePlanet', data)
    return promise.then((data) => MsgCreatePlanetResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
