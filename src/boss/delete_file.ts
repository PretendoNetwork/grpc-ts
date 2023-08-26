/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "boss";

export interface DeleteFileRequest {
  dataId: bigint;
  bossAppId: string;
}

function createBaseDeleteFileRequest(): DeleteFileRequest {
  return { dataId: BigInt("0"), bossAppId: "" };
}

export const DeleteFileRequest = {
  encode(message: DeleteFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataId !== BigInt("0")) {
      writer.uint32(8).uint64(message.dataId.toString());
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.dataId = longToBigint(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bossAppId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteFileRequest {
    return {
      dataId: isSet(object.dataId) ? BigInt(object.dataId) : BigInt("0"),
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
    };
  },

  toJSON(message: DeleteFileRequest): unknown {
    const obj: any = {};
    if (message.dataId !== BigInt("0")) {
      obj.dataId = message.dataId.toString();
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteFileRequest>): DeleteFileRequest {
    return DeleteFileRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteFileRequest>): DeleteFileRequest {
    const message = createBaseDeleteFileRequest();
    message.dataId = object.dataId ?? BigInt("0");
    message.bossAppId = object.bossAppId ?? "";
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
