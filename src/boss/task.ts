/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "boss";

export interface Task {
  deleted: boolean;
  id: string;
  bossAppId: string;
  creatorPid: number;
  status: string;
  titleId: string;
  description: string;
  createdTimestamp: bigint;
  updatedTimestamp: bigint;
}

function createBaseTask(): Task {
  return {
    deleted: false,
    id: "",
    bossAppId: "",
    creatorPid: 0,
    status: "",
    titleId: "",
    description: "",
    createdTimestamp: BigInt("0"),
    updatedTimestamp: BigInt("0"),
  };
}

export const Task = {
  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deleted === true) {
      writer.uint32(8).bool(message.deleted);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.bossAppId !== "") {
      writer.uint32(34).string(message.bossAppId);
    }
    if (message.creatorPid !== 0) {
      writer.uint32(40).uint32(message.creatorPid);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.titleId !== "") {
      writer.uint32(58).string(message.titleId);
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.createdTimestamp !== BigInt("0")) {
      writer.uint32(72).uint64(message.createdTimestamp.toString());
    }
    if (message.updatedTimestamp !== BigInt("0")) {
      writer.uint32(80).uint64(message.updatedTimestamp.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask();
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
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bossAppId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.creatorPid = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.status = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.titleId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.description = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.createdTimestamp = longToBigint(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
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

  fromJSON(object: any): Task {
    return {
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
      id: isSet(object.id) ? String(object.id) : "",
      bossAppId: isSet(object.bossAppId) ? String(object.bossAppId) : "",
      creatorPid: isSet(object.creatorPid) ? Number(object.creatorPid) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      titleId: isSet(object.titleId) ? String(object.titleId) : "",
      description: isSet(object.description) ? String(object.description) : "",
      createdTimestamp: isSet(object.createdTimestamp) ? BigInt(object.createdTimestamp) : BigInt("0"),
      updatedTimestamp: isSet(object.updatedTimestamp) ? BigInt(object.updatedTimestamp) : BigInt("0"),
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    if (message.creatorPid !== 0) {
      obj.creatorPid = Math.round(message.creatorPid);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.titleId !== "") {
      obj.titleId = message.titleId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdTimestamp !== BigInt("0")) {
      obj.createdTimestamp = message.createdTimestamp.toString();
    }
    if (message.updatedTimestamp !== BigInt("0")) {
      obj.updatedTimestamp = message.updatedTimestamp.toString();
    }
    return obj;
  },

  create(base?: DeepPartial<Task>): Task {
    return Task.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Task>): Task {
    const message = createBaseTask();
    message.deleted = object.deleted ?? false;
    message.id = object.id ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.creatorPid = object.creatorPid ?? 0;
    message.status = object.status ?? "";
    message.titleId = object.titleId ?? "";
    message.description = object.description ?? "";
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
