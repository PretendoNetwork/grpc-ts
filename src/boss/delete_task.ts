/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "boss";

export interface DeleteTaskRequest {
  id: string;
  bossAppId: string;
}

function createBaseDeleteTaskRequest(): DeleteTaskRequest {
  return { id: "", bossAppId: "" };
}

export const DeleteTaskRequest = {
  encode(message: DeleteTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTaskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

  fromJSON(object: any): DeleteTaskRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
    };
  },

  toJSON(message: DeleteTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteTaskRequest>): DeleteTaskRequest {
    return DeleteTaskRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteTaskRequest>): DeleteTaskRequest {
    const message = createBaseDeleteTaskRequest();
    message.id = object.id ?? "";
    message.bossAppId = object.bossAppId ?? "";
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
