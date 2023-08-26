/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "account";

export interface ExchangeTokenForUserDataRequest {
  token: string;
}

function createBaseExchangeTokenForUserDataRequest(): ExchangeTokenForUserDataRequest {
  return { token: "" };
}

export const ExchangeTokenForUserDataRequest = {
  encode(message: ExchangeTokenForUserDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeTokenForUserDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeTokenForUserDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeTokenForUserDataRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: ExchangeTokenForUserDataRequest): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create(base?: DeepPartial<ExchangeTokenForUserDataRequest>): ExchangeTokenForUserDataRequest {
    return ExchangeTokenForUserDataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExchangeTokenForUserDataRequest>): ExchangeTokenForUserDataRequest {
    const message = createBaseExchangeTokenForUserDataRequest();
    message.token = object.token ?? "";
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
