/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { GetUserDataRequest, GetUserDataResponse } from "./get_user_data_rpc";
import { LoginRequest, LoginResponse } from "./login_rpc";
import { RegisterPNIDRequest } from "./register_pnid_rpc";

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
    registerPNID: {
      name: "RegisterPNID",
      requestType: RegisterPNIDRequest,
      requestStream: false,
      responseType: LoginResponse,
      responseStream: false,
      options: {},
    },
    login: {
      name: "Login",
      requestType: LoginRequest,
      requestStream: false,
      responseType: LoginResponse,
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
  registerPNID(
    request: RegisterPNIDRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LoginResponse>>;
  login(request: LoginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LoginResponse>>;
}

export interface AccountClient<CallOptionsExt = {}> {
  getUserData(
    request: DeepPartial<GetUserDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserDataResponse>;
  registerPNID(
    request: DeepPartial<RegisterPNIDRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LoginResponse>;
  login(request: DeepPartial<LoginRequest>, options?: CallOptions & CallOptionsExt): Promise<LoginResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
