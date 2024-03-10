export enum EAdenaResponseStatus {
  SUCCESS = 'success',
  FAILURE = 'failure'
}

export enum EAdenaResponseType {
  ALREADY_CONNECTED = 'ALREADY_CONNECTED',
  REDUNDANT_CHANGE_REQUESTED = 'REDUNDANT_CHANGE_REQUEST'
}

export interface IAdenaResponse {
  code: number;
  status: EAdenaResponseStatus;
  type: EAdenaResponseType;
  message: string;
  data: null | any;
}

export enum EAccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'IN_ACTIVE'
}

export interface IPublicKeyInfo {
  '@type': string;
  value: string;
}

export interface IAccountInfo {
  accountNumber: string;
  address: string;
  coins: string;
  chainId: string;
  sequence: string;
  status: EAccountStatus;
  public_key: IPublicKeyInfo;
}

export interface INetworkSwitchInfo {
  chainId: string;
}