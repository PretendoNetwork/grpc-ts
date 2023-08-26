/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "boss";

export interface UpdateTaskData {
  id: string;
  bossAppId: string;
  titleId: string;
  status: string;
  description: string;
}

export interface UpdateTaskRequest {
  id: string;
  bossAppId: string;
  updateData: UpdateTaskData | undefined;
}

function createBaseUpdateTaskData(): UpdateTaskData {
  return { id: "", bossAppId: "", titleId: "", status: "", description: "" };
}

export const UpdateTaskData = {
  encode(message: UpdateTaskData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    if (message.titleId !== "") {
      writer.uint32(26).string(message.titleId);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTaskData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTaskData();
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

          message.status = reader.string();
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

  fromJSON(object: any): UpdateTaskData {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
      titleId: isSet(object.titleId) ? String(object.titleId) : "",
      status: isSet(object.status) ? String(object.status) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: UpdateTaskData): unknown {
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
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateTaskData>): UpdateTaskData {
    return UpdateTaskData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateTaskData>): UpdateTaskData {
    const message = createBaseUpdateTaskData();
    message.id = object.id ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.titleId = object.titleId ?? "";
    message.status = object.status ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseUpdateTaskRequest(): UpdateTaskRequest {
  return { id: "", bossAppId: "", updateData: undefined };
}

export const UpdateTaskRequest = {
  encode(message: UpdateTaskRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    if (message.updateData !== undefined) {
      UpdateTaskData.encode(message.updateData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTaskRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTaskRequest();
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

          message.updateData = UpdateTaskData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTaskRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
      updateData: isSet(object.updateData) ? UpdateTaskData.fromJSON(object.updateData) : undefined,
    };
  },

  toJSON(message: UpdateTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    if (message.updateData !== undefined) {
      obj.updateData = UpdateTaskData.toJSON(message.updateData);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateTaskRequest>): UpdateTaskRequest {
    return UpdateTaskRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateTaskRequest>): UpdateTaskRequest {
    const message = createBaseUpdateTaskRequest();
    message.id = object.id ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.updateData = (object.updateData !== undefined && object.updateData !== null)
      ? UpdateTaskData.fromPartial(object.updateData)
      : undefined;
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
