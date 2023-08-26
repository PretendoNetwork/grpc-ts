/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { File } from "./file";

export const protobufPackage = "boss";

export interface ListFilesRequest {
  taskId: string;
  bossAppId: string;
  country?: string | undefined;
  language?: string | undefined;
}

export interface ListFilesResponse {
  files: File[];
}

function createBaseListFilesRequest(): ListFilesRequest {
  return { taskId: "", bossAppId: "", country: undefined, language: undefined };
}

export const ListFilesRequest = {
  encode(message: ListFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    if (message.country !== undefined) {
      writer.uint32(26).string(message.country);
    }
    if (message.language !== undefined) {
      writer.uint32(34).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taskId = reader.string();
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

          message.country = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.language = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFilesRequest {
    return {
      taskId: isSet(object.taskId) ? String(object.taskId) : "",
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
      country: isSet(object.country) ? String(object.country) : undefined,
      language: isSet(object.language) ? String(object.language) : undefined,
    };
  },

  toJSON(message: ListFilesRequest): unknown {
    const obj: any = {};
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    if (message.country !== undefined) {
      obj.country = message.country;
    }
    if (message.language !== undefined) {
      obj.language = message.language;
    }
    return obj;
  },

  create(base?: DeepPartial<ListFilesRequest>): ListFilesRequest {
    return ListFilesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListFilesRequest>): ListFilesRequest {
    const message = createBaseListFilesRequest();
    message.taskId = object.taskId ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.country = object.country ?? undefined;
    message.language = object.language ?? undefined;
    return message;
  },
};

function createBaseListFilesResponse(): ListFilesResponse {
  return { files: [] };
}

export const ListFilesResponse = {
  encode(message: ListFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      File.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFilesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.files.push(File.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListFilesResponse {
    return { files: Array.isArray(object?.files) ? object.files.map((e: any) => File.fromJSON(e)) : [] };
  },

  toJSON(message: ListFilesResponse): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => File.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListFilesResponse>): ListFilesResponse {
    return ListFilesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListFilesResponse>): ListFilesResponse {
    const message = createBaseListFilesResponse();
    message.files = object.files?.map((e) => File.fromPartial(e)) || [];
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
