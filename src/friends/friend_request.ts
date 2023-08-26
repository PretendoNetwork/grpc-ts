/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "friends";

export interface FriendRequest {
  id: bigint;
  sender: number;
  recipient: number;
  sent: bigint;
  expires: bigint;
  message: string;
}

function createBaseFriendRequest(): FriendRequest {
  return { id: BigInt("0"), sender: 0, recipient: 0, sent: BigInt("0"), expires: BigInt("0"), message: "" };
}

export const FriendRequest = {
  encode(message: FriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== BigInt("0")) {
      writer.uint32(8).uint64(message.id.toString());
    }
    if (message.sender !== 0) {
      writer.uint32(16).uint32(message.sender);
    }
    if (message.recipient !== 0) {
      writer.uint32(24).uint32(message.recipient);
    }
    if (message.sent !== BigInt("0")) {
      writer.uint32(32).uint64(message.sent.toString());
    }
    if (message.expires !== BigInt("0")) {
      writer.uint32(40).uint64(message.expires.toString());
    }
    if (message.message !== "") {
      writer.uint32(50).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FriendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sender = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.recipient = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sent = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.expires = longToBigint(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FriendRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id) : BigInt("0"),
      sender: isSet(object.sender) ? Number(object.sender) : 0,
      recipient: isSet(object.recipient) ? Number(object.recipient) : 0,
      sent: isSet(object.sent) ? BigInt(object.sent) : BigInt("0"),
      expires: isSet(object.expires) ? BigInt(object.expires) : BigInt("0"),
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: FriendRequest): unknown {
    const obj: any = {};
    if (message.id !== BigInt("0")) {
      obj.id = message.id.toString();
    }
    if (message.sender !== 0) {
      obj.sender = Math.round(message.sender);
    }
    if (message.recipient !== 0) {
      obj.recipient = Math.round(message.recipient);
    }
    if (message.sent !== BigInt("0")) {
      obj.sent = message.sent.toString();
    }
    if (message.expires !== BigInt("0")) {
      obj.expires = message.expires.toString();
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create(base?: DeepPartial<FriendRequest>): FriendRequest {
    return FriendRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FriendRequest>): FriendRequest {
    const message = createBaseFriendRequest();
    message.id = object.id ?? BigInt("0");
    message.sender = object.sender ?? 0;
    message.recipient = object.recipient ?? 0;
    message.sent = object.sent ?? BigInt("0");
    message.expires = object.expires ?? BigInt("0");
    message.message = object.message ?? "";
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
