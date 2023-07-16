/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "account";

export interface GetNEXPasswordRequest {
  pid: number;
}

export interface GetNEXPasswordResponse {
  password: string;
}

function createBaseGetNEXPasswordRequest(): GetNEXPasswordRequest {
  return { pid: 0 };
}

export const GetNEXPasswordRequest = {
  encode(message: GetNEXPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNEXPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNEXPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pid = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNEXPasswordRequest {
    return { pid: isSet(object.pid) ? Number(object.pid) : 0 };
  },

  toJSON(message: GetNEXPasswordRequest): unknown {
    const obj: any = {};
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    return obj;
  },

  create(base?: DeepPartial<GetNEXPasswordRequest>): GetNEXPasswordRequest {
    return GetNEXPasswordRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNEXPasswordRequest>): GetNEXPasswordRequest {
    const message = createBaseGetNEXPasswordRequest();
    message.pid = object.pid ?? 0;
    return message;
  },
};

function createBaseGetNEXPasswordResponse(): GetNEXPasswordResponse {
  return { password: "" };
}

export const GetNEXPasswordResponse = {
  encode(message: GetNEXPasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNEXPasswordResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNEXPasswordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNEXPasswordResponse {
    return { password: isSet(object.password) ? String(object.password) : "" };
  },

  toJSON(message: GetNEXPasswordResponse): unknown {
    const obj: any = {};
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(base?: DeepPartial<GetNEXPasswordResponse>): GetNEXPasswordResponse {
    return GetNEXPasswordResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNEXPasswordResponse>): GetNEXPasswordResponse {
    const message = createBaseGetNEXPasswordResponse();
    message.password = object.password ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
