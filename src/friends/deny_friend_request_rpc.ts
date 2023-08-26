/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "friends";

export interface DenyFriendRequestRequest {
  friendRequestId: bigint;
}

export interface DenyFriendRequestResponse {
  success: boolean;
}

function createBaseDenyFriendRequestRequest(): DenyFriendRequestRequest {
  return { friendRequestId: BigInt("0") };
}

export const DenyFriendRequestRequest = {
  encode(message: DenyFriendRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.friendRequestId !== BigInt("0")) {
      writer.uint32(8).uint64(message.friendRequestId.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenyFriendRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenyFriendRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.friendRequestId = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenyFriendRequestRequest {
    return { friendRequestId: isSet(object.friendRequestId) ? BigInt(object.friendRequestId) : BigInt("0") };
  },

  toJSON(message: DenyFriendRequestRequest): unknown {
    const obj: any = {};
    if (message.friendRequestId !== BigInt("0")) {
      obj.friendRequestId = message.friendRequestId.toString();
    }
    return obj;
  },

  create(base?: DeepPartial<DenyFriendRequestRequest>): DenyFriendRequestRequest {
    return DenyFriendRequestRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DenyFriendRequestRequest>): DenyFriendRequestRequest {
    const message = createBaseDenyFriendRequestRequest();
    message.friendRequestId = object.friendRequestId ?? BigInt("0");
    return message;
  },
};

function createBaseDenyFriendRequestResponse(): DenyFriendRequestResponse {
  return { success: false };
}

export const DenyFriendRequestResponse = {
  encode(message: DenyFriendRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenyFriendRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenyFriendRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenyFriendRequestResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: DenyFriendRequestResponse): unknown {
    const obj: any = {};
    if (message.success === true) {
      obj.success = message.success;
    }
    return obj;
  },

  create(base?: DeepPartial<DenyFriendRequestResponse>): DenyFriendRequestResponse {
    return DenyFriendRequestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DenyFriendRequestResponse>): DenyFriendRequestResponse {
    const message = createBaseDenyFriendRequestResponse();
    message.success = object.success ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
