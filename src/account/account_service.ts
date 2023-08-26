/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { ExchangeTokenForUserDataRequest } from "./exchange_token_for_user_data";
import { GetNEXDataRequest, GetNEXDataResponse } from "./get_nex_data_rpc";
import { GetNEXPasswordRequest, GetNEXPasswordResponse } from "./get_nex_password_rpc";
import { GetUserDataRequest, GetUserDataResponse } from "./get_user_data_rpc";
import { Empty } from "./google/protobuf/empty";
import { UpdatePNIDPermissionsRequest } from "./update_pnid_permissions";

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
    getNEXPassword: {
      name: "GetNEXPassword",
      requestType: GetNEXPasswordRequest,
      requestStream: false,
      responseType: GetNEXPasswordResponse,
      responseStream: false,
      options: {},
    },
    getNEXData: {
      name: "GetNEXData",
      requestType: GetNEXDataRequest,
      requestStream: false,
      responseType: GetNEXDataResponse,
      responseStream: false,
      options: {},
    },
    updatePNIDPermissions: {
      name: "UpdatePNIDPermissions",
      requestType: UpdatePNIDPermissionsRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    exchangeTokenForUserData: {
      name: "ExchangeTokenForUserData",
      requestType: ExchangeTokenForUserDataRequest,
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
  getNEXPassword(
    request: GetNEXPasswordRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetNEXPasswordResponse>>;
  getNEXData(
    request: GetNEXDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetNEXDataResponse>>;
  updatePNIDPermissions(
    request: UpdatePNIDPermissionsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  exchangeTokenForUserData(
    request: ExchangeTokenForUserDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetUserDataResponse>>;
}

export interface AccountClient<CallOptionsExt = {}> {
  getUserData(
    request: DeepPartial<GetUserDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserDataResponse>;
  getNEXPassword(
    request: DeepPartial<GetNEXPasswordRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetNEXPasswordResponse>;
  getNEXData(
    request: DeepPartial<GetNEXDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetNEXDataResponse>;
  updatePNIDPermissions(
    request: DeepPartial<UpdatePNIDPermissionsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  exchangeTokenForUserData(
    request: DeepPartial<ExchangeTokenForUserDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserDataResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
