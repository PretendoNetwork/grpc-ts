/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { DeleteFileRequest } from "./delete_file";
import { DeleteTaskRequest } from "./delete_task";
import { Empty } from "./google/protobuf/empty";
import { ListFilesRequest, ListFilesResponse } from "./list_files";
import { ListKnownBOSSAppsResponse } from "./list_known_boss_apps";
import { ListTasksResponse } from "./list_tasks";
import { RegisterTaskRequest, RegisterTaskResponse } from "./register_task";
import { UpdateFileMetadataRequest } from "./update_file_metadata";
import { UpdateTaskRequest } from "./update_task";
import { UploadFileRequest, UploadFileResponse } from "./upload_file";

export const protobufPackage = "boss";

export type BOSSDefinition = typeof BOSSDefinition;
export const BOSSDefinition = {
  name: "BOSS",
  fullName: "boss.BOSS",
  methods: {
    listKnownBOSSApps: {
      name: "ListKnownBOSSApps",
      requestType: Empty,
      requestStream: false,
      responseType: ListKnownBOSSAppsResponse,
      responseStream: false,
      options: {},
    },
    listTasks: {
      name: "ListTasks",
      requestType: Empty,
      requestStream: false,
      responseType: ListTasksResponse,
      responseStream: false,
      options: {},
    },
    registerTask: {
      name: "RegisterTask",
      requestType: RegisterTaskRequest,
      requestStream: false,
      responseType: RegisterTaskResponse,
      responseStream: false,
      options: {},
    },
    updateTask: {
      name: "UpdateTask",
      requestType: UpdateTaskRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    deleteTask: {
      name: "DeleteTask",
      requestType: DeleteTaskRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    listFiles: {
      name: "ListFiles",
      requestType: ListFilesRequest,
      requestStream: false,
      responseType: ListFilesResponse,
      responseStream: false,
      options: {},
    },
    uploadFile: {
      name: "UploadFile",
      requestType: UploadFileRequest,
      requestStream: false,
      responseType: UploadFileResponse,
      responseStream: false,
      options: {},
    },
    updateFileMetadata: {
      name: "UpdateFileMetadata",
      requestType: UpdateFileMetadataRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    deleteFile: {
      name: "DeleteFile",
      requestType: DeleteFileRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface BOSSServiceImplementation<CallContextExt = {}> {
  listKnownBOSSApps(
    request: Empty,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListKnownBOSSAppsResponse>>;
  listTasks(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<ListTasksResponse>>;
  registerTask(
    request: RegisterTaskRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RegisterTaskResponse>>;
  updateTask(request: UpdateTaskRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  deleteTask(request: DeleteTaskRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  listFiles(request: ListFilesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFilesResponse>>;
  uploadFile(
    request: UploadFileRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UploadFileResponse>>;
  updateFileMetadata(
    request: UpdateFileMetadataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  deleteFile(request: DeleteFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}

export interface BOSSClient<CallOptionsExt = {}> {
  listKnownBOSSApps(
    request: DeepPartial<Empty>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListKnownBOSSAppsResponse>;
  listTasks(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<ListTasksResponse>;
  registerTask(
    request: DeepPartial<RegisterTaskRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RegisterTaskResponse>;
  updateTask(request: DeepPartial<UpdateTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  deleteTask(request: DeepPartial<DeleteTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  listFiles(request: DeepPartial<ListFilesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFilesResponse>;
  uploadFile(
    request: DeepPartial<UploadFileRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UploadFileResponse>;
  updateFileMetadata(
    request: DeepPartial<UpdateFileMetadataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  deleteFile(request: DeepPartial<DeleteFileRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
