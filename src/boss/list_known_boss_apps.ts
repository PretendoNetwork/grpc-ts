/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "boss";

export interface BOSSApp {
  bossAppId: string;
  titleId: string;
  titleRegion: string;
  name: string;
  tasks: string[];
}

export interface ListKnownBOSSAppsResponse {
  apps: BOSSApp[];
}

function createBaseBOSSApp(): BOSSApp {
  return { bossAppId: "", titleId: "", titleRegion: "", name: "", tasks: [] };
}

export const BOSSApp = {
  encode(message: BOSSApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bossAppId !== "") {
      writer.uint32(10).string(message.bossAppId);
    }
    if (message.titleId !== "") {
      writer.uint32(18).string(message.titleId);
    }
    if (message.titleRegion !== "") {
      writer.uint32(26).string(message.titleRegion);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    for (const v of message.tasks) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BOSSApp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBOSSApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bossAppId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.titleId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.titleRegion = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tasks.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BOSSApp {
    return {
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
      titleId: isSet(object.titleId) ? String(object.titleId) : "",
      titleRegion: isSet(object.titleRegion) ? String(object.titleRegion) : "",
      name: isSet(object.name) ? String(object.name) : "",
      tasks: Array.isArray(object?.tasks) ? object.tasks.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: BOSSApp): unknown {
    const obj: any = {};
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    if (message.titleId !== "") {
      obj.titleId = message.titleId;
    }
    if (message.titleRegion !== "") {
      obj.titleRegion = message.titleRegion;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tasks?.length) {
      obj.tasks = message.tasks;
    }
    return obj;
  },

  create(base?: DeepPartial<BOSSApp>): BOSSApp {
    return BOSSApp.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BOSSApp>): BOSSApp {
    const message = createBaseBOSSApp();
    message.bossAppId = object.bossAppId ?? "";
    message.titleId = object.titleId ?? "";
    message.titleRegion = object.titleRegion ?? "";
    message.name = object.name ?? "";
    message.tasks = object.tasks?.map((e) => e) || [];
    return message;
  },
};

function createBaseListKnownBOSSAppsResponse(): ListKnownBOSSAppsResponse {
  return { apps: [] };
}

export const ListKnownBOSSAppsResponse = {
  encode(message: ListKnownBOSSAppsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apps) {
      BOSSApp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKnownBOSSAppsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKnownBOSSAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.apps.push(BOSSApp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListKnownBOSSAppsResponse {
    return { apps: Array.isArray(object?.apps) ? object.apps.map((e: any) => BOSSApp.fromJSON(e)) : [] };
  },

  toJSON(message: ListKnownBOSSAppsResponse): unknown {
    const obj: any = {};
    if (message.apps?.length) {
      obj.apps = message.apps.map((e) => BOSSApp.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListKnownBOSSAppsResponse>): ListKnownBOSSAppsResponse {
    return ListKnownBOSSAppsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListKnownBOSSAppsResponse>): ListKnownBOSSAppsResponse {
    const message = createBaseListKnownBOSSAppsResponse();
    message.apps = object.apps?.map((e) => BOSSApp.fromPartial(e)) || [];
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
