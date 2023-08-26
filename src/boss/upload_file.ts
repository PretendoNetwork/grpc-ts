/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { File } from "./file";

export const protobufPackage = "boss";

export interface UploadFileRequest {
  taskId: string;
  bossAppId: string;
  supportedCountries: string[];
  supportedLanguages: string[];
  name: string;
  type: string;
  notifyOnNew: string[];
  notifyLed: boolean;
  data: Buffer;
  nameEqualsDataId: boolean;
}

export interface UploadFileResponse {
  file: File | undefined;
}

function createBaseUploadFileRequest(): UploadFileRequest {
  return {
    taskId: "",
    bossAppId: "",
    supportedCountries: [],
    supportedLanguages: [],
    name: "",
    type: "",
    notifyOnNew: [],
    notifyLed: false,
    data: Buffer.alloc(0),
    nameEqualsDataId: false,
  };
}

export const UploadFileRequest = {
  encode(message: UploadFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    for (const v of message.supportedCountries) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.supportedLanguages) {
      writer.uint32(34).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    for (const v of message.notifyOnNew) {
      writer.uint32(58).string(v!);
    }
    if (message.notifyLed === true) {
      writer.uint32(64).bool(message.notifyLed);
    }
    if (message.data.length !== 0) {
      writer.uint32(74).bytes(message.data);
    }
    if (message.nameEqualsDataId === true) {
      writer.uint32(80).bool(message.nameEqualsDataId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadFileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadFileRequest();
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

          message.supportedCountries.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.supportedLanguages.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.notifyOnNew.push(reader.string());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.notifyLed = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.nameEqualsDataId = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadFileRequest {
    return {
      taskId: isSet(object.taskId) ? String(object.taskId) : "",
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
      supportedCountries: Array.isArray(object?.supportedCountries)
        ? object.supportedCountries.map((e: any) => String(e))
        : [],
      supportedLanguages: Array.isArray(object?.supportedLanguages)
        ? object.supportedLanguages.map((e: any) => String(e))
        : [],
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      notifyOnNew: Array.isArray(object?.notifyOnNew) ? object.notifyOnNew.map((e: any) => String(e)) : [],
      notifyLed: isSet(object.notifyLed) ? Boolean(object.notifyLed) : false,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      nameEqualsDataId: isSet(object.nameEqualsDataId) ? Boolean(object.nameEqualsDataId) : false,
    };
  },

  toJSON(message: UploadFileRequest): unknown {
    const obj: any = {};
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    if (message.supportedCountries?.length) {
      obj.supportedCountries = message.supportedCountries;
    }
    if (message.supportedLanguages?.length) {
      obj.supportedLanguages = message.supportedLanguages;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.notifyOnNew?.length) {
      obj.notifyOnNew = message.notifyOnNew;
    }
    if (message.notifyLed === true) {
      obj.notifyLed = message.notifyLed;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.nameEqualsDataId === true) {
      obj.nameEqualsDataId = message.nameEqualsDataId;
    }
    return obj;
  },

  create(base?: DeepPartial<UploadFileRequest>): UploadFileRequest {
    return UploadFileRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UploadFileRequest>): UploadFileRequest {
    const message = createBaseUploadFileRequest();
    message.taskId = object.taskId ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.supportedCountries = object.supportedCountries?.map((e) => e) || [];
    message.supportedLanguages = object.supportedLanguages?.map((e) => e) || [];
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.notifyOnNew = object.notifyOnNew?.map((e) => e) || [];
    message.notifyLed = object.notifyLed ?? false;
    message.data = object.data ?? Buffer.alloc(0);
    message.nameEqualsDataId = object.nameEqualsDataId ?? false;
    return message;
  },
};

function createBaseUploadFileResponse(): UploadFileResponse {
  return { file: undefined };
}

export const UploadFileResponse = {
  encode(message: UploadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== undefined) {
      File.encode(message.file, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadFileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file = File.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UploadFileResponse {
    return { file: isSet(object.file) ? File.fromJSON(object.file) : undefined };
  },

  toJSON(message: UploadFileResponse): unknown {
    const obj: any = {};
    if (message.file !== undefined) {
      obj.file = File.toJSON(message.file);
    }
    return obj;
  },

  create(base?: DeepPartial<UploadFileResponse>): UploadFileResponse {
    return UploadFileResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UploadFileResponse>): UploadFileResponse {
    const message = createBaseUploadFileResponse();
    message.file = (object.file !== undefined && object.file !== null) ? File.fromPartial(object.file) : undefined;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
