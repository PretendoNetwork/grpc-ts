/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "account";

export interface PNIDPermissionFlags {
  bannedAllPermanently: boolean;
  bannedAllTemporarily: boolean;
  betaAccess: boolean;
  accessAdminPanel: boolean;
  createServerConfigs: boolean;
  modifyServerConfigs: boolean;
  deployServer: boolean;
  modifyPnids: boolean;
  modifyNexAccounts: boolean;
  modifyConsoles: boolean;
  banPnids: boolean;
  banNexAccounts: boolean;
  banConsoles: boolean;
  moderateMiiverse: boolean;
  createApiKeys: boolean;
  createBossTasks: boolean;
  updateBossTasks: boolean;
  deleteBossTasks: boolean;
  uploadBossFiles: boolean;
  updateBossFiles: boolean;
  deleteBossFiles: boolean;
}

function createBasePNIDPermissionFlags(): PNIDPermissionFlags {
  return {
    bannedAllPermanently: false,
    bannedAllTemporarily: false,
    betaAccess: false,
    accessAdminPanel: false,
    createServerConfigs: false,
    modifyServerConfigs: false,
    deployServer: false,
    modifyPnids: false,
    modifyNexAccounts: false,
    modifyConsoles: false,
    banPnids: false,
    banNexAccounts: false,
    banConsoles: false,
    moderateMiiverse: false,
    createApiKeys: false,
    createBossTasks: false,
    updateBossTasks: false,
    deleteBossTasks: false,
    uploadBossFiles: false,
    updateBossFiles: false,
    deleteBossFiles: false,
  };
}

export const PNIDPermissionFlags = {
  encode(message: PNIDPermissionFlags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bannedAllPermanently === true) {
      writer.uint32(8).bool(message.bannedAllPermanently);
    }
    if (message.bannedAllTemporarily === true) {
      writer.uint32(16).bool(message.bannedAllTemporarily);
    }
    if (message.betaAccess === true) {
      writer.uint32(24).bool(message.betaAccess);
    }
    if (message.accessAdminPanel === true) {
      writer.uint32(32).bool(message.accessAdminPanel);
    }
    if (message.createServerConfigs === true) {
      writer.uint32(40).bool(message.createServerConfigs);
    }
    if (message.modifyServerConfigs === true) {
      writer.uint32(48).bool(message.modifyServerConfigs);
    }
    if (message.deployServer === true) {
      writer.uint32(56).bool(message.deployServer);
    }
    if (message.modifyPnids === true) {
      writer.uint32(64).bool(message.modifyPnids);
    }
    if (message.modifyNexAccounts === true) {
      writer.uint32(72).bool(message.modifyNexAccounts);
    }
    if (message.modifyConsoles === true) {
      writer.uint32(80).bool(message.modifyConsoles);
    }
    if (message.banPnids === true) {
      writer.uint32(88).bool(message.banPnids);
    }
    if (message.banNexAccounts === true) {
      writer.uint32(96).bool(message.banNexAccounts);
    }
    if (message.banConsoles === true) {
      writer.uint32(104).bool(message.banConsoles);
    }
    if (message.moderateMiiverse === true) {
      writer.uint32(112).bool(message.moderateMiiverse);
    }
    if (message.createApiKeys === true) {
      writer.uint32(120).bool(message.createApiKeys);
    }
    if (message.createBossTasks === true) {
      writer.uint32(128).bool(message.createBossTasks);
    }
    if (message.updateBossTasks === true) {
      writer.uint32(136).bool(message.updateBossTasks);
    }
    if (message.deleteBossTasks === true) {
      writer.uint32(144).bool(message.deleteBossTasks);
    }
    if (message.uploadBossFiles === true) {
      writer.uint32(152).bool(message.uploadBossFiles);
    }
    if (message.updateBossFiles === true) {
      writer.uint32(160).bool(message.updateBossFiles);
    }
    if (message.deleteBossFiles === true) {
      writer.uint32(168).bool(message.deleteBossFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PNIDPermissionFlags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePNIDPermissionFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bannedAllPermanently = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bannedAllTemporarily = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.betaAccess = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.accessAdminPanel = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.createServerConfigs = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.modifyServerConfigs = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.deployServer = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.modifyPnids = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.modifyNexAccounts = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.modifyConsoles = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.banPnids = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.banNexAccounts = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.banConsoles = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.moderateMiiverse = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.createApiKeys = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.createBossTasks = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.updateBossTasks = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.deleteBossTasks = reader.bool();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.uploadBossFiles = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.updateBossFiles = reader.bool();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.deleteBossFiles = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PNIDPermissionFlags {
    return {
      bannedAllPermanently: isSet(object.bannedAllPermanently) ? Boolean(object.bannedAllPermanently) : false,
      bannedAllTemporarily: isSet(object.bannedAllTemporarily) ? Boolean(object.bannedAllTemporarily) : false,
      betaAccess: isSet(object.betaAccess) ? Boolean(object.betaAccess) : false,
      accessAdminPanel: isSet(object.accessAdminPanel) ? Boolean(object.accessAdminPanel) : false,
      createServerConfigs: isSet(object.createServerConfigs) ? Boolean(object.createServerConfigs) : false,
      modifyServerConfigs: isSet(object.modifyServerConfigs) ? Boolean(object.modifyServerConfigs) : false,
      deployServer: isSet(object.deployServer) ? Boolean(object.deployServer) : false,
      modifyPnids: isSet(object.modifyPnids) ? Boolean(object.modifyPnids) : false,
      modifyNexAccounts: isSet(object.modifyNexAccounts) ? Boolean(object.modifyNexAccounts) : false,
      modifyConsoles: isSet(object.modifyConsoles) ? Boolean(object.modifyConsoles) : false,
      banPnids: isSet(object.banPnids) ? Boolean(object.banPnids) : false,
      banNexAccounts: isSet(object.banNexAccounts) ? Boolean(object.banNexAccounts) : false,
      banConsoles: isSet(object.banConsoles) ? Boolean(object.banConsoles) : false,
      moderateMiiverse: isSet(object.moderateMiiverse) ? Boolean(object.moderateMiiverse) : false,
      createApiKeys: isSet(object.createApiKeys) ? Boolean(object.createApiKeys) : false,
      createBossTasks: isSet(object.createBossTasks) ? Boolean(object.createBossTasks) : false,
      updateBossTasks: isSet(object.updateBossTasks) ? Boolean(object.updateBossTasks) : false,
      deleteBossTasks: isSet(object.deleteBossTasks) ? Boolean(object.deleteBossTasks) : false,
      uploadBossFiles: isSet(object.uploadBossFiles) ? Boolean(object.uploadBossFiles) : false,
      updateBossFiles: isSet(object.updateBossFiles) ? Boolean(object.updateBossFiles) : false,
      deleteBossFiles: isSet(object.deleteBossFiles) ? Boolean(object.deleteBossFiles) : false,
    };
  },

  toJSON(message: PNIDPermissionFlags): unknown {
    const obj: any = {};
    if (message.bannedAllPermanently === true) {
      obj.bannedAllPermanently = message.bannedAllPermanently;
    }
    if (message.bannedAllTemporarily === true) {
      obj.bannedAllTemporarily = message.bannedAllTemporarily;
    }
    if (message.betaAccess === true) {
      obj.betaAccess = message.betaAccess;
    }
    if (message.accessAdminPanel === true) {
      obj.accessAdminPanel = message.accessAdminPanel;
    }
    if (message.createServerConfigs === true) {
      obj.createServerConfigs = message.createServerConfigs;
    }
    if (message.modifyServerConfigs === true) {
      obj.modifyServerConfigs = message.modifyServerConfigs;
    }
    if (message.deployServer === true) {
      obj.deployServer = message.deployServer;
    }
    if (message.modifyPnids === true) {
      obj.modifyPnids = message.modifyPnids;
    }
    if (message.modifyNexAccounts === true) {
      obj.modifyNexAccounts = message.modifyNexAccounts;
    }
    if (message.modifyConsoles === true) {
      obj.modifyConsoles = message.modifyConsoles;
    }
    if (message.banPnids === true) {
      obj.banPnids = message.banPnids;
    }
    if (message.banNexAccounts === true) {
      obj.banNexAccounts = message.banNexAccounts;
    }
    if (message.banConsoles === true) {
      obj.banConsoles = message.banConsoles;
    }
    if (message.moderateMiiverse === true) {
      obj.moderateMiiverse = message.moderateMiiverse;
    }
    if (message.createApiKeys === true) {
      obj.createApiKeys = message.createApiKeys;
    }
    if (message.createBossTasks === true) {
      obj.createBossTasks = message.createBossTasks;
    }
    if (message.updateBossTasks === true) {
      obj.updateBossTasks = message.updateBossTasks;
    }
    if (message.deleteBossTasks === true) {
      obj.deleteBossTasks = message.deleteBossTasks;
    }
    if (message.uploadBossFiles === true) {
      obj.uploadBossFiles = message.uploadBossFiles;
    }
    if (message.updateBossFiles === true) {
      obj.updateBossFiles = message.updateBossFiles;
    }
    if (message.deleteBossFiles === true) {
      obj.deleteBossFiles = message.deleteBossFiles;
    }
    return obj;
  },

  create(base?: DeepPartial<PNIDPermissionFlags>): PNIDPermissionFlags {
    return PNIDPermissionFlags.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PNIDPermissionFlags>): PNIDPermissionFlags {
    const message = createBasePNIDPermissionFlags();
    message.bannedAllPermanently = object.bannedAllPermanently ?? false;
    message.bannedAllTemporarily = object.bannedAllTemporarily ?? false;
    message.betaAccess = object.betaAccess ?? false;
    message.accessAdminPanel = object.accessAdminPanel ?? false;
    message.createServerConfigs = object.createServerConfigs ?? false;
    message.modifyServerConfigs = object.modifyServerConfigs ?? false;
    message.deployServer = object.deployServer ?? false;
    message.modifyPnids = object.modifyPnids ?? false;
    message.modifyNexAccounts = object.modifyNexAccounts ?? false;
    message.modifyConsoles = object.modifyConsoles ?? false;
    message.banPnids = object.banPnids ?? false;
    message.banNexAccounts = object.banNexAccounts ?? false;
    message.banConsoles = object.banConsoles ?? false;
    message.moderateMiiverse = object.moderateMiiverse ?? false;
    message.createApiKeys = object.createApiKeys ?? false;
    message.createBossTasks = object.createBossTasks ?? false;
    message.updateBossTasks = object.updateBossTasks ?? false;
    message.deleteBossTasks = object.deleteBossTasks ?? false;
    message.uploadBossFiles = object.uploadBossFiles ?? false;
    message.updateBossFiles = object.updateBossFiles ?? false;
    message.deleteBossFiles = object.deleteBossFiles ?? false;
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
