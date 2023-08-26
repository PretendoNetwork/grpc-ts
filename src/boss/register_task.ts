/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Task } from "./task";

export const protobufPackage = "boss";

export interface RegisterTaskRequest {
  id: string;
  bossAppId: string;
  titleId: string;
  country: string;
  description: string;
}

export interface RegisterTaskResponse {
  task: Task | undefined;
}

function createBaseRegisterTaskRequest(): RegisterTaskRequest {
  return { id: "", bossAppId: "", titleId: "", country: "", description: "" };
}

export const RegisterTaskRequest = {
  encode(message: RegisterTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    if (message.titleId !== "") {
      writer.uint32(26).string(message.titleId);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTaskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterTaskRequest();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.titleId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.country = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterTaskRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
      titleId: isSet(object.titleId) ? String(object.titleId) : "",
      country: isSet(object.country) ? String(object.country) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: RegisterTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    if (message.titleId !== "") {
      obj.titleId = message.titleId;
    }
    if (message.country !== "") {
      obj.country = message.country;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterTaskRequest>): RegisterTaskRequest {
    return RegisterTaskRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterTaskRequest>): RegisterTaskRequest {
    const message = createBaseRegisterTaskRequest();
    message.id = object.id ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.titleId = object.titleId ?? "";
    message.country = object.country ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseRegisterTaskResponse(): RegisterTaskResponse {
  return { task: undefined };
}

export const RegisterTaskResponse = {
  encode(message: RegisterTaskResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.task !== undefined) {
      Task.encode(message.task, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTaskResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.task = Task.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterTaskResponse {
    return { task: isSet(object.task) ? Task.fromJSON(object.task) : undefined };
  },

  toJSON(message: RegisterTaskResponse): unknown {
    const obj: any = {};
    if (message.task !== undefined) {
      obj.task = Task.toJSON(message.task);
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterTaskResponse>): RegisterTaskResponse {
    return RegisterTaskResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterTaskResponse>): RegisterTaskResponse {
    const message = createBaseRegisterTaskResponse();
    message.task = (object.task !== undefined && object.task !== null) ? Task.fromPartial(object.task) : undefined;
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
