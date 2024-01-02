/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "account";

export enum DeviceType {
  CTR = 0,
  WUP = 1,
  UNRECOGNIZED = -1,
}

export function deviceTypeFromJSON(object: any): DeviceType {
  switch (object) {
    case 0:
    case "CTR":
      return DeviceType.CTR;
    case 1:
    case "WUP":
      return DeviceType.WUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeviceType.UNRECOGNIZED;
  }
}

export function deviceTypeToJSON(object: DeviceType): string {
  switch (object) {
    case DeviceType.CTR:
      return "CTR";
    case DeviceType.WUP:
      return "WUP";
    case DeviceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetNEXDataRequest {
  pid: number;
}

export interface GetNEXDataResponse {
  pid: number;
  password: string;
  owningPid: number;
  accessLevel: number;
  serverAccessLevel: string;
  friendCode: string;
  deviceType: DeviceType;
}

function createBaseGetNEXDataRequest(): GetNEXDataRequest {
  return { pid: 0 };
}

export const GetNEXDataRequest = {
  encode(message: GetNEXDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNEXDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNEXDataRequest();
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

  fromJSON(object: any): GetNEXDataRequest {
    return { pid: isSet(object.pid) ? Number(object.pid) : 0 };
  },

  toJSON(message: GetNEXDataRequest): unknown {
    const obj: any = {};
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    return obj;
  },

  create(base?: DeepPartial<GetNEXDataRequest>): GetNEXDataRequest {
    return GetNEXDataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNEXDataRequest>): GetNEXDataRequest {
    const message = createBaseGetNEXDataRequest();
    message.pid = object.pid ?? 0;
    return message;
  },
};

function createBaseGetNEXDataResponse(): GetNEXDataResponse {
  return { pid: 0, password: "", owningPid: 0, accessLevel: 0, serverAccessLevel: "", friendCode: "", deviceType: 0 };
}

export const GetNEXDataResponse = {
  encode(message: GetNEXDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.owningPid !== 0) {
      writer.uint32(24).uint32(message.owningPid);
    }
    if (message.accessLevel !== 0) {
      writer.uint32(32).int32(message.accessLevel);
    }
    if (message.serverAccessLevel !== "") {
      writer.uint32(42).string(message.serverAccessLevel);
    }
    if (message.friendCode !== "") {
      writer.uint32(50).string(message.friendCode);
    }
    if (message.deviceType !== 0) {
      writer.uint32(56).int32(message.deviceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNEXDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNEXDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pid = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.owningPid = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.accessLevel = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.serverAccessLevel = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.friendCode = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.deviceType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNEXDataResponse {
    return {
      pid: isSet(object.pid) ? Number(object.pid) : 0,
      password: isSet(object.password) ? String(object.password) : "",
      owningPid: isSet(object.owningPid) ? Number(object.owningPid) : 0,
      accessLevel: isSet(object.accessLevel) ? Number(object.accessLevel) : 0,
      serverAccessLevel: isSet(object.serverAccessLevel) ? String(object.serverAccessLevel) : "",
      friendCode: isSet(object.friendCode) ? String(object.friendCode) : "",
      deviceType: isSet(object.deviceType) ? deviceTypeFromJSON(object.deviceType) : 0,
    };
  },

  toJSON(message: GetNEXDataResponse): unknown {
    const obj: any = {};
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.owningPid !== 0) {
      obj.owningPid = Math.round(message.owningPid);
    }
    if (message.accessLevel !== 0) {
      obj.accessLevel = Math.round(message.accessLevel);
    }
    if (message.serverAccessLevel !== "") {
      obj.serverAccessLevel = message.serverAccessLevel;
    }
    if (message.friendCode !== "") {
      obj.friendCode = message.friendCode;
    }
    if (message.deviceType !== 0) {
      obj.deviceType = deviceTypeToJSON(message.deviceType);
    }
    return obj;
  },

  create(base?: DeepPartial<GetNEXDataResponse>): GetNEXDataResponse {
    return GetNEXDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNEXDataResponse>): GetNEXDataResponse {
    const message = createBaseGetNEXDataResponse();
    message.pid = object.pid ?? 0;
    message.password = object.password ?? "";
    message.owningPid = object.owningPid ?? 0;
    message.accessLevel = object.accessLevel ?? 0;
    message.serverAccessLevel = object.serverAccessLevel ?? "";
    message.friendCode = object.friendCode ?? "";
    message.deviceType = object.deviceType ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
