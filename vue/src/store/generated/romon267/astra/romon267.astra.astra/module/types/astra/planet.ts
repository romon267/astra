/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'romon267.astra.astra'

export interface Planet {
  id: string
  creator: string
  name: string
  biome: string
}

const basePlanet: object = { id: '', creator: '', name: '', biome: '' }

export const Planet = {
  encode(message: Planet, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.creator !== '') {
      writer.uint32(18).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.biome !== '') {
      writer.uint32(34).string(message.biome)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Planet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePlanet } as Planet
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.creator = reader.string()
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.biome = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Planet {
    const message = { ...basePlanet } as Planet
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
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

  toJSON(message: Planet): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.biome !== undefined && (obj.biome = message.biome)
    return obj
  },

  fromPartial(object: DeepPartial<Planet>): Planet {
    const message = { ...basePlanet } as Planet
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
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
