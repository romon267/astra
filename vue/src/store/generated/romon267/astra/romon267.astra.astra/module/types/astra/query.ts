/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Shaper } from '../astra/shaper'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Planet } from '../astra/planet'

export const protobufPackage = 'romon267.astra.astra'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetShaperRequest {
  address: string
}

export interface QueryGetShaperResponse {
  Shaper: Shaper | undefined
}

export interface QueryAllShaperRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllShaperResponse {
  Shaper: Shaper[]
  pagination: PageResponse | undefined
}

export interface QueryGetPlanetRequest {
  id: string
}

export interface QueryGetPlanetResponse {
  Planet: Planet | undefined
}

export interface QueryAllPlanetRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPlanetResponse {
  Planets: Planet[]
  pagination: PageResponse | undefined
}

const baseQueryGetShaperRequest: object = { address: '' }

export const QueryGetShaperRequest = {
  encode(message: QueryGetShaperRequest, writer: Writer = Writer.create()): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetShaperRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetShaperRequest } as QueryGetShaperRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetShaperRequest {
    const message = { ...baseQueryGetShaperRequest } as QueryGetShaperRequest
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: QueryGetShaperRequest): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetShaperRequest>): QueryGetShaperRequest {
    const message = { ...baseQueryGetShaperRequest } as QueryGetShaperRequest
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseQueryGetShaperResponse: object = {}

export const QueryGetShaperResponse = {
  encode(message: QueryGetShaperResponse, writer: Writer = Writer.create()): Writer {
    if (message.Shaper !== undefined) {
      Shaper.encode(message.Shaper, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetShaperResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetShaperResponse } as QueryGetShaperResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Shaper = Shaper.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetShaperResponse {
    const message = { ...baseQueryGetShaperResponse } as QueryGetShaperResponse
    if (object.Shaper !== undefined && object.Shaper !== null) {
      message.Shaper = Shaper.fromJSON(object.Shaper)
    } else {
      message.Shaper = undefined
    }
    return message
  },

  toJSON(message: QueryGetShaperResponse): unknown {
    const obj: any = {}
    message.Shaper !== undefined && (obj.Shaper = message.Shaper ? Shaper.toJSON(message.Shaper) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetShaperResponse>): QueryGetShaperResponse {
    const message = { ...baseQueryGetShaperResponse } as QueryGetShaperResponse
    if (object.Shaper !== undefined && object.Shaper !== null) {
      message.Shaper = Shaper.fromPartial(object.Shaper)
    } else {
      message.Shaper = undefined
    }
    return message
  }
}

const baseQueryAllShaperRequest: object = {}

export const QueryAllShaperRequest = {
  encode(message: QueryAllShaperRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllShaperRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllShaperRequest } as QueryAllShaperRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllShaperRequest {
    const message = { ...baseQueryAllShaperRequest } as QueryAllShaperRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllShaperRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllShaperRequest>): QueryAllShaperRequest {
    const message = { ...baseQueryAllShaperRequest } as QueryAllShaperRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllShaperResponse: object = {}

export const QueryAllShaperResponse = {
  encode(message: QueryAllShaperResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Shaper) {
      Shaper.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllShaperResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllShaperResponse } as QueryAllShaperResponse
    message.Shaper = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Shaper.push(Shaper.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllShaperResponse {
    const message = { ...baseQueryAllShaperResponse } as QueryAllShaperResponse
    message.Shaper = []
    if (object.Shaper !== undefined && object.Shaper !== null) {
      for (const e of object.Shaper) {
        message.Shaper.push(Shaper.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllShaperResponse): unknown {
    const obj: any = {}
    if (message.Shaper) {
      obj.Shaper = message.Shaper.map((e) => (e ? Shaper.toJSON(e) : undefined))
    } else {
      obj.Shaper = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllShaperResponse>): QueryAllShaperResponse {
    const message = { ...baseQueryAllShaperResponse } as QueryAllShaperResponse
    message.Shaper = []
    if (object.Shaper !== undefined && object.Shaper !== null) {
      for (const e of object.Shaper) {
        message.Shaper.push(Shaper.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetPlanetRequest: object = { id: '' }

export const QueryGetPlanetRequest = {
  encode(message: QueryGetPlanetRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlanetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPlanetRequest } as QueryGetPlanetRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPlanetRequest {
    const message = { ...baseQueryGetPlanetRequest } as QueryGetPlanetRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    return message
  },

  toJSON(message: QueryGetPlanetRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPlanetRequest>): QueryGetPlanetRequest {
    const message = { ...baseQueryGetPlanetRequest } as QueryGetPlanetRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    return message
  }
}

const baseQueryGetPlanetResponse: object = {}

export const QueryGetPlanetResponse = {
  encode(message: QueryGetPlanetResponse, writer: Writer = Writer.create()): Writer {
    if (message.Planet !== undefined) {
      Planet.encode(message.Planet, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlanetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPlanetResponse } as QueryGetPlanetResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Planet = Planet.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPlanetResponse {
    const message = { ...baseQueryGetPlanetResponse } as QueryGetPlanetResponse
    if (object.Planet !== undefined && object.Planet !== null) {
      message.Planet = Planet.fromJSON(object.Planet)
    } else {
      message.Planet = undefined
    }
    return message
  },

  toJSON(message: QueryGetPlanetResponse): unknown {
    const obj: any = {}
    message.Planet !== undefined && (obj.Planet = message.Planet ? Planet.toJSON(message.Planet) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPlanetResponse>): QueryGetPlanetResponse {
    const message = { ...baseQueryGetPlanetResponse } as QueryGetPlanetResponse
    if (object.Planet !== undefined && object.Planet !== null) {
      message.Planet = Planet.fromPartial(object.Planet)
    } else {
      message.Planet = undefined
    }
    return message
  }
}

const baseQueryAllPlanetRequest: object = {}

export const QueryAllPlanetRequest = {
  encode(message: QueryAllPlanetRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlanetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPlanetRequest } as QueryAllPlanetRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPlanetRequest {
    const message = { ...baseQueryAllPlanetRequest } as QueryAllPlanetRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPlanetRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPlanetRequest>): QueryAllPlanetRequest {
    const message = { ...baseQueryAllPlanetRequest } as QueryAllPlanetRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPlanetResponse: object = {}

export const QueryAllPlanetResponse = {
  encode(message: QueryAllPlanetResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Planets) {
      Planet.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlanetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPlanetResponse } as QueryAllPlanetResponse
    message.Planets = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Planets.push(Planet.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPlanetResponse {
    const message = { ...baseQueryAllPlanetResponse } as QueryAllPlanetResponse
    message.Planets = []
    if (object.Planets !== undefined && object.Planets !== null) {
      for (const e of object.Planets) {
        message.Planets.push(Planet.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPlanetResponse): unknown {
    const obj: any = {}
    if (message.Planets) {
      obj.Planets = message.Planets.map((e) => (e ? Planet.toJSON(e) : undefined))
    } else {
      obj.Planets = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPlanetResponse>): QueryAllPlanetResponse {
    const message = { ...baseQueryAllPlanetResponse } as QueryAllPlanetResponse
    message.Planets = []
    if (object.Planets !== undefined && object.Planets !== null) {
      for (const e of object.Planets) {
        message.Planets.push(Planet.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a shaper by index. */
  Shaper(request: QueryGetShaperRequest): Promise<QueryGetShaperResponse>
  /** Queries a list of shaper items. */
  ShaperAll(request: QueryAllShaperRequest): Promise<QueryAllShaperResponse>
  Planet(request: QueryGetPlanetRequest): Promise<QueryGetPlanetResponse>
  PlanetAll(request: QueryAllPlanetRequest): Promise<QueryAllPlanetResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Shaper(request: QueryGetShaperRequest): Promise<QueryGetShaperResponse> {
    const data = QueryGetShaperRequest.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Query', 'Shaper', data)
    return promise.then((data) => QueryGetShaperResponse.decode(new Reader(data)))
  }

  ShaperAll(request: QueryAllShaperRequest): Promise<QueryAllShaperResponse> {
    const data = QueryAllShaperRequest.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Query', 'ShaperAll', data)
    return promise.then((data) => QueryAllShaperResponse.decode(new Reader(data)))
  }

  Planet(request: QueryGetPlanetRequest): Promise<QueryGetPlanetResponse> {
    const data = QueryGetPlanetRequest.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Query', 'Planet', data)
    return promise.then((data) => QueryGetPlanetResponse.decode(new Reader(data)))
  }

  PlanetAll(request: QueryAllPlanetRequest): Promise<QueryAllPlanetResponse> {
    const data = QueryAllPlanetRequest.encode(request).finish()
    const promise = this.rpc.request('romon267.astra.astra.Query', 'PlanetAll', data)
    return promise.then((data) => QueryAllPlanetResponse.decode(new Reader(data)))
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
