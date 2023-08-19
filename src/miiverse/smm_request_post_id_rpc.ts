/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "miiverse";

export interface SMMRequestPostIDRequest {
  /** TODO - Other course/user data? */
  courseId: number;
}

export interface SMMRequestPostIDResponse {
  postId: number;
}

function createBaseSMMRequestPostIDRequest(): SMMRequestPostIDRequest {
  return { courseId: 0 };
}

export const SMMRequestPostIDRequest = {
  encode(message: SMMRequestPostIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.courseId !== 0) {
      writer.uint32(8).uint64(message.courseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SMMRequestPostIDRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMMRequestPostIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.courseId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SMMRequestPostIDRequest {
    return { courseId: isSet(object.courseId) ? Number(object.courseId) : 0 };
  },

  toJSON(message: SMMRequestPostIDRequest): unknown {
    const obj: any = {};
    if (message.courseId !== 0) {
      obj.courseId = Math.round(message.courseId);
    }
    return obj;
  },

  create(base?: DeepPartial<SMMRequestPostIDRequest>): SMMRequestPostIDRequest {
    return SMMRequestPostIDRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SMMRequestPostIDRequest>): SMMRequestPostIDRequest {
    const message = createBaseSMMRequestPostIDRequest();
    message.courseId = object.courseId ?? 0;
    return message;
  },
};

function createBaseSMMRequestPostIDResponse(): SMMRequestPostIDResponse {
  return { postId: 0 };
}

export const SMMRequestPostIDResponse = {
  encode(message: SMMRequestPostIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postId !== 0) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SMMRequestPostIDResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMMRequestPostIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.postId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SMMRequestPostIDResponse {
    return { postId: isSet(object.postId) ? Number(object.postId) : 0 };
  },

  toJSON(message: SMMRequestPostIDResponse): unknown {
    const obj: any = {};
    if (message.postId !== 0) {
      obj.postId = Math.round(message.postId);
    }
    return obj;
  },

  create(base?: DeepPartial<SMMRequestPostIDResponse>): SMMRequestPostIDResponse {
    return SMMRequestPostIDResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SMMRequestPostIDResponse>): SMMRequestPostIDResponse {
    const message = createBaseSMMRequestPostIDResponse();
    message.postId = object.postId ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
