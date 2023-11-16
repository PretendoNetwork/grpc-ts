/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "boss";

export interface File {
  deleted: boolean;
  dataId: bigint;
  taskId: string;
  bossAppId: string;
  supportedCountries: string[];
  supportedLanguages: string[];
  password: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  creatorPid: number;
  name: string;
  type: string;
  hash: string;
  size: bigint;
  notifyOnNew: string[];
  notifyLed: boolean;
  createdTimestamp: bigint;
  updatedTimestamp: bigint;
}

function createBaseFile(): File {
  return {
    deleted: false,
    dataId: BigInt("0"),
    taskId: "",
    bossAppId: "",
    supportedCountries: [],
    supportedLanguages: [],
    password: "",
    attribute1: "",
    attribute2: "",
    attribute3: "",
    creatorPid: 0,
    name: "",
    type: "",
    hash: "",
    size: BigInt("0"),
    notifyOnNew: [],
    notifyLed: false,
    createdTimestamp: BigInt("0"),
    updatedTimestamp: BigInt("0"),
  };
}

export const File = {
  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deleted === true) {
      writer.uint32(8).bool(message.deleted);
    }
    if (message.dataId !== BigInt("0")) {
      writer.uint32(16).uint64(message.dataId.toString());
    }
    if (message.taskId !== "") {
      writer.uint32(26).string(message.taskId);
    }
    if (message.bossAppId !== "") {
      writer.uint32(34).string(message.bossAppId);
    }
    for (const v of message.supportedCountries) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.supportedLanguages) {
      writer.uint32(50).string(v!);
    }
    if (message.password !== "") {
      writer.uint32(58).string(message.password);
    }
    if (message.attribute1 !== "") {
      writer.uint32(66).string(message.attribute1);
    }
    if (message.attribute2 !== "") {
      writer.uint32(74).string(message.attribute2);
    }
    if (message.attribute3 !== "") {
      writer.uint32(82).string(message.attribute3);
    }
    if (message.creatorPid !== 0) {
      writer.uint32(88).uint32(message.creatorPid);
    }
    if (message.name !== "") {
      writer.uint32(98).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(106).string(message.type);
    }
    if (message.hash !== "") {
      writer.uint32(114).string(message.hash);
    }
    if (message.size !== BigInt("0")) {
      writer.uint32(120).uint64(message.size.toString());
    }
    for (const v of message.notifyOnNew) {
      writer.uint32(130).string(v!);
    }
    if (message.notifyLed === true) {
      writer.uint32(136).bool(message.notifyLed);
    }
    if (message.createdTimestamp !== BigInt("0")) {
      writer.uint32(144).uint64(message.createdTimestamp.toString());
    }
    if (message.updatedTimestamp !== BigInt("0")) {
      writer.uint32(152).uint64(message.updatedTimestamp.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dataId = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.taskId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bossAppId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.supportedCountries.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.supportedLanguages.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.password = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.attribute1 = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.attribute2 = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.attribute3 = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.creatorPid = reader.uint32();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.name = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.type = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.size = longToBigint(reader.uint64() as Long);
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.notifyOnNew.push(reader.string());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.notifyLed = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.createdTimestamp = longToBigint(reader.uint64() as Long);
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.updatedTimestamp = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): File {
    return {
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
      dataId: isSet(object.dataId) ? BigInt(object.dataId) : BigInt("0"),
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
      creatorPid: isSet(object.creatorPid) ? Number(object.creatorPid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      size: isSet(object.size) ? BigInt(object.size) : BigInt("0"),
      notifyOnNew: Array.isArray(object?.notifyOnNew) ? object.notifyOnNew.map((e: any) => String(e)) : [],
      notifyLed: isSet(object.notifyLed) ? Boolean(object.notifyLed) : false,
      createdTimestamp: isSet(object.createdTimestamp) ? BigInt(object.createdTimestamp) : BigInt("0"),
      updatedTimestamp: isSet(object.updatedTimestamp) ? BigInt(object.updatedTimestamp) : BigInt("0"),
    };
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    if (message.dataId !== BigInt("0")) {
      obj.dataId = message.dataId.toString();
    }
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
    if (message.creatorPid !== 0) {
      obj.creatorPid = Math.round(message.creatorPid);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.hash !== "") {
      obj.hash = message.hash;
    }
    if (message.size !== BigInt("0")) {
      obj.size = message.size.toString();
    }
    if (message.notifyOnNew?.length) {
      obj.notifyOnNew = message.notifyOnNew;
    }
    if (message.notifyLed === true) {
      obj.notifyLed = message.notifyLed;
    }
    if (message.createdTimestamp !== BigInt("0")) {
      obj.createdTimestamp = message.createdTimestamp.toString();
    }
    if (message.updatedTimestamp !== BigInt("0")) {
      obj.updatedTimestamp = message.updatedTimestamp.toString();
    }
    return obj;
  },

  create(base?: DeepPartial<File>): File {
    return File.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<File>): File {
    const message = createBaseFile();
    message.deleted = object.deleted ?? false;
    message.dataId = object.dataId ?? BigInt("0");
    message.taskId = object.taskId ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.supportedCountries = object.supportedCountries?.map((e) => e) || [];
    message.supportedLanguages = object.supportedLanguages?.map((e) => e) || [];
    message.password = object.password ?? "";
    message.attribute1 = object.attribute1 ?? "";
    message.attribute2 = object.attribute2 ?? "";
    message.attribute3 = object.attribute3 ?? "";
    message.creatorPid = object.creatorPid ?? 0;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.hash = object.hash ?? "";
    message.size = object.size ?? BigInt("0");
    message.notifyOnNew = object.notifyOnNew?.map((e) => e) || [];
    message.notifyLed = object.notifyLed ?? false;
    message.createdTimestamp = object.createdTimestamp ?? BigInt("0");
    message.updatedTimestamp = object.updatedTimestamp ?? BigInt("0");
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
