/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "boss";

export interface UpdateFileMetadataData {
  taskId: string;
  bossAppId: string;
  supportedCountries: string[];
  supportedLanguages: string[];
  password: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  name: string;
  type: string;
  notifyOnNew: string[];
  notifyLed: boolean;
}

export interface UpdateFileMetadataRequest {
  dataId: bigint;
  updateData: UpdateFileMetadataData | undefined;
}

function createBaseUpdateFileMetadataData(): UpdateFileMetadataData {
  return {
    taskId: "",
    bossAppId: "",
    supportedCountries: [],
    supportedLanguages: [],
    password: "",
    attribute1: "",
    attribute2: "",
    attribute3: "",
    name: "",
    type: "",
    notifyOnNew: [],
    notifyLed: false,
  };
}

export const UpdateFileMetadataData = {
  encode(message: UpdateFileMetadataData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    if (message.attribute1 !== "") {
      writer.uint32(50).string(message.attribute1);
    }
    if (message.attribute2 !== "") {
      writer.uint32(58).string(message.attribute2);
    }
    if (message.attribute3 !== "") {
      writer.uint32(66).string(message.attribute3);
    }
    if (message.name !== "") {
      writer.uint32(74).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(82).string(message.type);
    }
    for (const v of message.notifyOnNew) {
      writer.uint32(90).string(v!);
    }
    if (message.notifyLed === true) {
      writer.uint32(96).bool(message.notifyLed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFileMetadataData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFileMetadataData();
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

          message.password = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attribute1 = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.attribute2 = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.attribute3 = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.name = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.type = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.notifyOnNew.push(reader.string());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.notifyLed = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFileMetadataData {
    return {
      taskId: isSet(object.taskId) ? String(object.taskId) : "",
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
      supportedCountries: Array.isArray(object?.supportedCountries)
        ? object.supportedCountries.map((e: any) => String(e))
        : [],
      supportedLanguages: Array.isArray(object?.supportedLanguages)
        ? object.supportedLanguages.map((e: any) => String(e))
        : [],
      password: isSet(object.password) ? String(object.password) : "",
      attribute1: isSet(object.attribute1) ? String(object.attribute1) : "",
      attribute2: isSet(object.attribute2) ? String(object.attribute2) : "",
      attribute3: isSet(object.attribute3) ? String(object.attribute3) : "",
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      notifyOnNew: Array.isArray(object?.notifyOnNew) ? object.notifyOnNew.map((e: any) => String(e)) : [],
      notifyLed: isSet(object.notifyLed) ? Boolean(object.notifyLed) : false,
    };
  },

  toJSON(message: UpdateFileMetadataData): unknown {
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
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.attribute1 !== "") {
      obj.attribute1 = message.attribute1;
    }
    if (message.attribute2 !== "") {
      obj.attribute2 = message.attribute2;
    }
    if (message.attribute3 !== "") {
      obj.attribute3 = message.attribute3;
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
    return obj;
  },

  create(base?: DeepPartial<UpdateFileMetadataData>): UpdateFileMetadataData {
    return UpdateFileMetadataData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateFileMetadataData>): UpdateFileMetadataData {
    const message = createBaseUpdateFileMetadataData();
    message.taskId = object.taskId ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.supportedCountries = object.supportedCountries?.map((e) => e) || [];
    message.supportedLanguages = object.supportedLanguages?.map((e) => e) || [];
    message.password = object.password ?? "";
    message.attribute1 = object.attribute1 ?? "";
    message.attribute2 = object.attribute2 ?? "";
    message.attribute3 = object.attribute3 ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.notifyOnNew = object.notifyOnNew?.map((e) => e) || [];
    message.notifyLed = object.notifyLed ?? false;
    return message;
  },
};

function createBaseUpdateFileMetadataRequest(): UpdateFileMetadataRequest {
  return { dataId: BigInt("0"), updateData: undefined };
}

export const UpdateFileMetadataRequest = {
  encode(message: UpdateFileMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataId !== BigInt("0")) {
      writer.uint32(8).uint64(message.dataId.toString());
    }
    if (message.updateData !== undefined) {
      UpdateFileMetadataData.encode(message.updateData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFileMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFileMetadataRequest();
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

          message.updateData = UpdateFileMetadataData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFileMetadataRequest {
    return {
      dataId: isSet(object.dataId) ? BigInt(object.dataId) : BigInt("0"),
      updateData: isSet(object.updateData) ? UpdateFileMetadataData.fromJSON(object.updateData) : undefined,
    };
  },

  toJSON(message: UpdateFileMetadataRequest): unknown {
    const obj: any = {};
    if (message.dataId !== BigInt("0")) {
      obj.dataId = message.dataId.toString();
    }
    if (message.updateData !== undefined) {
      obj.updateData = UpdateFileMetadataData.toJSON(message.updateData);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateFileMetadataRequest>): UpdateFileMetadataRequest {
    return UpdateFileMetadataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateFileMetadataRequest>): UpdateFileMetadataRequest {
    const message = createBaseUpdateFileMetadataRequest();
    message.dataId = object.dataId ?? BigInt("0");
    message.updateData = (object.updateData !== undefined && object.updateData !== null)
      ? UpdateFileMetadataData.fromPartial(object.updateData)
      : undefined;
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
