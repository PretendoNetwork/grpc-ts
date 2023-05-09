/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface RemoveConnectionRequest {
  type: string;
}

function createBaseRemoveConnectionRequest(): RemoveConnectionRequest {
  return { type: "" };
}

export const RemoveConnectionRequest = {
  encode(message: RemoveConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveConnectionRequest {
    return { type: isSet(object.type) ? String(object.type) : "" };
  },

  toJSON(message: RemoveConnectionRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<RemoveConnectionRequest>): RemoveConnectionRequest {
    return RemoveConnectionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RemoveConnectionRequest>): RemoveConnectionRequest {
    const message = createBaseRemoveConnectionRequest();
    message.type = object.type ?? "";
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
