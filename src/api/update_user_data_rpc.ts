/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

/** TODO - Not implemented yet, stubbed */
export interface UpdateUserDataRequest {
}

function createBaseUpdateUserDataRequest(): UpdateUserDataRequest {
  return {};
}

export const UpdateUserDataRequest = {
  encode(_: UpdateUserDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UpdateUserDataRequest {
    return {};
  },

  toJSON(_: UpdateUserDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UpdateUserDataRequest>): UpdateUserDataRequest {
    return UpdateUserDataRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<UpdateUserDataRequest>): UpdateUserDataRequest {
    const message = createBaseUpdateUserDataRequest();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
