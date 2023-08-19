/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { SMMRequestPostIDRequest, SMMRequestPostIDResponse } from "./smm_request_post_id_rpc";

export const protobufPackage = "miiverse";

export type MiiverseDefinition = typeof MiiverseDefinition;
export const MiiverseDefinition = {
  name: "Miiverse",
  fullName: "miiverse.Miiverse",
  methods: {
    /** Used by Super Mario Maker */
    sMMRequestPostId: {
      name: "SMMRequestPostId",
      requestType: SMMRequestPostIDRequest,
      requestStream: false,
      responseType: SMMRequestPostIDResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface MiiverseServiceImplementation<CallContextExt = {}> {
  /** Used by Super Mario Maker */
  sMMRequestPostId(
    request: SMMRequestPostIDRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SMMRequestPostIDResponse>>;
}

export interface MiiverseClient<CallOptionsExt = {}> {
  /** Used by Super Mario Maker */
  sMMRequestPostId(
    request: DeepPartial<SMMRequestPostIDRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SMMRequestPostIDResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
