/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface SetStripeConnectionDataRequest {
  customerId?: string | undefined;
  subscriptionId?: string | undefined;
  priceId?: string | undefined;
  tierLevel?: number | undefined;
  tierName?: string | undefined;
  latestWebhookTimestamp: number;
}

function createBaseSetStripeConnectionDataRequest(): SetStripeConnectionDataRequest {
  return {
    customerId: undefined,
    subscriptionId: undefined,
    priceId: undefined,
    tierLevel: undefined,
    tierName: undefined,
    latestWebhookTimestamp: 0,
  };
}

export const SetStripeConnectionDataRequest = {
  encode(message: SetStripeConnectionDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerId !== undefined) {
      writer.uint32(10).string(message.customerId);
    }
    if (message.subscriptionId !== undefined) {
      writer.uint32(18).string(message.subscriptionId);
    }
    if (message.priceId !== undefined) {
      writer.uint32(26).string(message.priceId);
    }
    if (message.tierLevel !== undefined) {
      writer.uint32(32).uint32(message.tierLevel);
    }
    if (message.tierName !== undefined) {
      writer.uint32(42).string(message.tierName);
    }
    if (message.latestWebhookTimestamp !== 0) {
      writer.uint32(48).uint64(message.latestWebhookTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetStripeConnectionDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStripeConnectionDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.subscriptionId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.priceId = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.tierLevel = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.tierName = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.latestWebhookTimestamp = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetStripeConnectionDataRequest {
    return {
      customerId: isSet(object.customerId) ? String(object.customerId) : undefined,
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : undefined,
      priceId: isSet(object.priceId) ? String(object.priceId) : undefined,
      tierLevel: isSet(object.tierLevel) ? Number(object.tierLevel) : undefined,
      tierName: isSet(object.tierName) ? String(object.tierName) : undefined,
      latestWebhookTimestamp: isSet(object.latestWebhookTimestamp) ? Number(object.latestWebhookTimestamp) : 0,
    };
  },

  toJSON(message: SetStripeConnectionDataRequest): unknown {
    const obj: any = {};
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
    message.priceId !== undefined && (obj.priceId = message.priceId);
    message.tierLevel !== undefined && (obj.tierLevel = Math.round(message.tierLevel));
    message.tierName !== undefined && (obj.tierName = message.tierName);
    message.latestWebhookTimestamp !== undefined &&
      (obj.latestWebhookTimestamp = Math.round(message.latestWebhookTimestamp));
    return obj;
  },

  create(base?: DeepPartial<SetStripeConnectionDataRequest>): SetStripeConnectionDataRequest {
    return SetStripeConnectionDataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetStripeConnectionDataRequest>): SetStripeConnectionDataRequest {
    const message = createBaseSetStripeConnectionDataRequest();
    message.customerId = object.customerId ?? undefined;
    message.subscriptionId = object.subscriptionId ?? undefined;
    message.priceId = object.priceId ?? undefined;
    message.tierLevel = object.tierLevel ?? undefined;
    message.tierName = object.tierName ?? undefined;
    message.latestWebhookTimestamp = object.latestWebhookTimestamp ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
