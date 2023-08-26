/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PNIDPermissionFlags } from "./pnid_permission_flags";

export const protobufPackage = "account";

export interface UpdatePNIDPermissionsRequest {
  pid: number;
  permissions: PNIDPermissionFlags | undefined;
}

function createBaseUpdatePNIDPermissionsRequest(): UpdatePNIDPermissionsRequest {
  return { pid: 0, permissions: undefined };
}

export const UpdatePNIDPermissionsRequest = {
  encode(message: UpdatePNIDPermissionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    if (message.permissions !== undefined) {
      PNIDPermissionFlags.encode(message.permissions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePNIDPermissionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePNIDPermissionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pid = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.permissions = PNIDPermissionFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePNIDPermissionsRequest {
    return {
      pid: isSet(object.pid) ? Number(object.pid) : 0,
      permissions: isSet(object.permissions) ? PNIDPermissionFlags.fromJSON(object.permissions) : undefined,
    };
  },

  toJSON(message: UpdatePNIDPermissionsRequest): unknown {
    const obj: any = {};
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    if (message.permissions !== undefined) {
      obj.permissions = PNIDPermissionFlags.toJSON(message.permissions);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdatePNIDPermissionsRequest>): UpdatePNIDPermissionsRequest {
    return UpdatePNIDPermissionsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdatePNIDPermissionsRequest>): UpdatePNIDPermissionsRequest {
    const message = createBaseUpdatePNIDPermissionsRequest();
    message.pid = object.pid ?? 0;
    message.permissions = (object.permissions !== undefined && object.permissions !== null)
      ? PNIDPermissionFlags.fromPartial(object.permissions)
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
