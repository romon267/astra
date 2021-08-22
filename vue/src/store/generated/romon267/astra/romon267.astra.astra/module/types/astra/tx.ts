/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'romon267.astra.astra'

export interface MsgUpdateShaperPlanets {
  creator: string
  address: string
  planetIds: number[]
}

export interface MsgUpdateShaperPlanetsResponse {}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateShaper {
  creator: string
  /** string index = 2; */
  name: string
  address: string
  /** repeated int64 planetIds = 6; */
  rank: string
}

export interface MsgCreateShaperResponse {}

export interface MsgUpdateShaper {
  creator: string
  /** string id = 2; */
  name: string
  address: string
  rank: string
  planetIds: number[]
  starIds: number[]
}

export interface MsgUpdateShaperResponse {}

export interface MsgDeleteShaper {
  creator: string
  address: string
}

export interface MsgDeleteShaperResponse {}

export interface MsgCreatePlanet {
  creator: string
  name: string
  biome: string
}

export interface MsgCreatePlanetResponse {}

const baseMsgUpdateShaperPlanets: object = { creator: '', address: '', planetIds: 0 }

export const MsgUpdateShaperPlanets = {
  encode(message: MsgUpdateShaperPlanets, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    writer.uint32(26).fork()
    for (const v of message.planetIds) {
      writer.int64(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateShaperPlanets {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateShaperPlanets } as MsgUpdateShaperPlanets
    message.planetIds = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.planetIds.push(longToNumber(reader.int64() as Long))
            }
          } else {
            message.planetIds.push(longToNumber(reader.int64() as Long))
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateShaperPlanets {
    const message = { ...baseMsgUpdateShaperPlanets } as MsgUpdateShaperPlanets
    message.planetIds = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.planetIds !== undefined && object.planetIds !== null) {
      for (const e of object.planetIds) {
        message.planetIds.push(Number(e))
      }
    }
    return message
  },

  toJSON(message: MsgUpdateShaperPlanets): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.address !== undefined && (obj.address = message.address)
    if (message.planetIds) {
      obj.planetIds = message.planetIds.map((e) => e)
    } else {
      obj.planetIds = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateShaperPlanets>): MsgUpdateShaperPlanets {
    const message = { ...baseMsgUpdateShaperPlanets } as MsgUpdateShaperPlanets
    message.planetIds = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.planetIds !== undefined && object.planetIds !== null) {
      for (const e of object.planetIds) {
        message.planetIds.push(e)
      }
    }
    return message
  }
}

const baseMsgUpdateShaperPlanetsResponse: object = {}

export const MsgUpdateShaperPlanetsResponse = {
  encode(_: MsgUpdateShaperPlanetsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateShaperPlanetsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateShaperPlanetsResponse } as MsgUpdateShaperPlanetsResponse
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

  fromJSON(_: any): MsgUpdateShaperPlanetsResponse {
    const message = { ...baseMsgUpdateShaperPlanetsResponse } as MsgUpdateShaperPlanetsResponse
    return message
  },

  toJSON(_: MsgUpdateShaperPlanetsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateShaperPlanetsResponse>): MsgUpdateShaperPlanetsResponse {
    const message = { ...baseMsgUpdateShaperPlanetsResponse } as MsgUpdateShaperPlanetsResponse
    return message
  }
}

const baseMsgCreateShaper: object = { creator: '', name: '', address: '', rank: '' }

export const MsgCreateShaper = {
  encode(message: MsgCreateShaper, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.address !== '') {
      writer.uint32(34).string(message.address)
    }
    if (message.rank !== '') {
      writer.uint32(42).string(message.rank)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateShaper {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateShaper } as MsgCreateShaper
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.address = reader.string()
          break
        case 5:
          message.rank = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateShaper {
    const message = { ...baseMsgCreateShaper } as MsgCreateShaper
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
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = String(object.rank)
    } else {
      message.rank = ''
    }
    return message
  },

  toJSON(message: MsgCreateShaper): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.address !== undefined && (obj.address = message.address)
    message.rank !== undefined && (obj.rank = message.rank)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateShaper>): MsgCreateShaper {
    const message = { ...baseMsgCreateShaper } as MsgCreateShaper
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
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank
    } else {
      message.rank = ''
    }
    return message
  }
}

const baseMsgCreateShaperResponse: object = {}

export const MsgCreateShaperResponse = {
  encode(_: MsgCreateShaperResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateShaperResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateShaperResponse } as MsgCreateShaperResponse
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

  fromJSON(_: any): MsgCreateShaperResponse {
    const message = { ...baseMsgCreateShaperResponse } as MsgCreateShaperResponse
    return message
  },

  toJSON(_: MsgCreateShaperResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateShaperResponse>): MsgCreateShaperResponse {
    const message = { ...baseMsgCreateShaperResponse } as MsgCreateShaperResponse
    return message
  }
}

const baseMsgUpdateShaper: object = { creator: '', name: '', address: '', rank: '', planetIds: 0, starIds: 0 }

export const MsgUpdateShaper = {
  encode(message: MsgUpdateShaper, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    if (message.rank !== '') {
      writer.uint32(34).string(message.rank)
    }
    writer.uint32(42).fork()
    for (const v of message.planetIds) {
      writer.int64(v)
    }
    writer.ldelim()
    writer.uint32(50).fork()
    for (const v of message.starIds) {
      writer.int64(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateShaper {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateShaper } as MsgUpdateShaper
    message.planetIds = []
    message.starIds = []
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
          message.address = reader.string()
          break
        case 4:
          message.rank = reader.string()
          break
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.planetIds.push(longToNumber(reader.int64() as Long))
            }
          } else {
            message.planetIds.push(longToNumber(reader.int64() as Long))
          }
          break
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.starIds.push(longToNumber(reader.int64() as Long))
            }
          } else {
            message.starIds.push(longToNumber(reader.int64() as Long))
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateShaper {
    const message = { ...baseMsgUpdateShaper } as MsgUpdateShaper
    message.planetIds = []
    message.starIds = []
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
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = String(object.rank)
    } else {
      message.rank = ''
    }
    if (object.planetIds !== undefined && object.planetIds !== null) {
      for (const e of object.planetIds) {
        message.planetIds.push(Number(e))
      }
    }
    if (object.starIds !== undefined && object.starIds !== null) {
      for (const e of object.starIds) {
        message.starIds.push(Number(e))
      }
    }
    return message
  },

  toJSON(message: MsgUpdateShaper): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.address !== undefined && (obj.address = message.address)
    message.rank !== undefined && (obj.rank = message.rank)
    if (message.planetIds) {
      obj.planetIds = message.planetIds.map((e) => e)
    } else {
      obj.planetIds = []
    }
    if (message.starIds) {
      obj.starIds = message.starIds.map((e) => e)
    } else {
      obj.starIds = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateShaper>): MsgUpdateShaper {
    const message = { ...baseMsgUpdateShaper } as MsgUpdateShaper
    message.planetIds = []
    message.starIds = []
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
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank
    } else {
      message.rank = ''
    }
    if (object.planetIds !== undefined && object.planetIds !== null) {
      for (const e of object.planetIds) {
        message.planetIds.push(e)
      }
    }
    if (object.starIds !== undefined && object.starIds !== null) {
      for (const e of object.starIds) {
        message.starIds.push(e)
      }
    }
    return message
  }
}

const baseMsgUpdateShaperResponse: object = {}

export const MsgUpdateShaperResponse = {
  encode(_: MsgUpdateShaperResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateShaperResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateShaperResponse } as MsgUpdateShaperResponse
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

  fromJSON(_: any): MsgUpdateShaperResponse {
    const message = { ...baseMsgUpdateShaperResponse } as MsgUpdateShaperResponse
    return message
  },

  toJSON(_: MsgUpdateShaperResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateShaperResponse>): MsgUpdateShaperResponse {
    const message = { ...baseMsgUpdateShaperResponse } as MsgUpdateShaperResponse
    return message
  }
}

const baseMsgDeleteShaper: object = { creator: '', address: '' }

export const MsgDeleteShaper = {
  encode(message: MsgDeleteShaper, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteShaper {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteShaper } as MsgDeleteShaper
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteShaper {
    const message = { ...baseMsgDeleteShaper } as MsgDeleteShaper
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: MsgDeleteShaper): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteShaper>): MsgDeleteShaper {
    const message = { ...baseMsgDeleteShaper } as MsgDeleteShaper
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseMsgDeleteShaperResponse: object = {}

export const MsgDeleteShaperResponse = {
  encode(_: MsgDeleteShaperResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteShaperResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteShaperResponse } as MsgDeleteShaperResponse
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

  fromJSON(_: any): MsgDeleteShaperResponse {
    const message = { ...baseMsgDeleteShaperResponse } as MsgDeleteShaperResponse
    return message
  },

  toJSON(_: MsgDeleteShaperResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteShaperResponse>): MsgDeleteShaperResponse {
    const message = { ...baseMsgDeleteShaperResponse } as MsgDeleteShaperResponse
    return message
  }
}

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
  CreateShaper(request: MsgCreateShaper): Promise<MsgCreateShaperResponse>
  UpdateShaper(request: MsgUpdateShaper): Promise<MsgUpdateShaperResponse>
  UpdateShaperPlanets(request: MsgUpdateShaperPlanets): Promise<MsgUpdateShaperPlanetsResponse>
  DeleteShaper(request: MsgDeleteShaper): Promise<MsgDeleteShaperResponse>
  CreatePlanet(request: MsgCreatePlanet): Promise<MsgCreatePlanetResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateShaper(request: MsgCreateShaper): Promise<MsgCreateShaperResponse> {
    const data = MsgCreateShaper.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Msg', 'CreateShaper', data)
    return promise.then((data) => MsgCreateShaperResponse.decode(new Reader(data)))
  }

  UpdateShaper(request: MsgUpdateShaper): Promise<MsgUpdateShaperResponse> {
    const data = MsgUpdateShaper.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Msg', 'UpdateShaper', data)
    return promise.then((data) => MsgUpdateShaperResponse.decode(new Reader(data)))
  }

  UpdateShaperPlanets(request: MsgUpdateShaperPlanets): Promise<MsgUpdateShaperPlanetsResponse> {
    const data = MsgUpdateShaperPlanets.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Msg', 'UpdateShaperPlanets', data)
    return promise.then((data) => MsgUpdateShaperPlanetsResponse.decode(new Reader(data)))
  }

  DeleteShaper(request: MsgDeleteShaper): Promise<MsgDeleteShaperResponse> {
    const data = MsgDeleteShaper.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Msg', 'DeleteShaper', data)
    return promise.then((data) => MsgDeleteShaperResponse.decode(new Reader(data)))
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

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
