/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { GetUserDataRequest, GetUserDataResponse } from "./get_user_data_rpc";

export const protobufPackage = "account";

export type AccountDefinition = typeof AccountDefinition;
export const AccountDefinition = {
  name: "Account",
  fullName: "account.Account",
  methods: {
    getUserData: {
      name: "GetUserData",
      requestType: GetUserDataRequest,
      requestStream: false,
      responseType: GetUserDataResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface AccountServiceImplementation<CallContextExt = {}> {
  getUserData(
    request: GetUserDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetUserDataResponse>>;
}

export interface AccountClient<CallOptionsExt = {}> {
  getUserData(
    request: DeepPartial<GetUserDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserDataResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
