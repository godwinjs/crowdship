/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface CampaignFactoryInterfaceContract
  extends Truffle.Contract<CampaignFactoryInterfaceInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<CampaignFactoryInterfaceInstance>;
}

type AllEvents = never;

export interface CampaignFactoryInterfaceInstance
  extends Truffle.ContractInstance {
  campaignCategories(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN; 2: BN; 3: boolean; 4: boolean }>;

  campaignToID(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  campaignTransactionConfig(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  categoryCommission(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  deployedCampaigns(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: string;
    1: string;
    2: BN;
    3: BN;
    4: BN;
    5: BN;
    6: boolean;
    7: boolean;
    8: boolean;
  }>;

  factoryWallet(txDetails?: Truffle.TransactionDetails): Promise<string>;

  root(txDetails?: Truffle.TransactionDetails): Promise<string>;

  tokensApproved(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  userID(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  users(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string; 1: BN; 2: BN; 3: boolean; 4: boolean }>;

  getCampaignTransactionConfig: {
    (_prop: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_prop: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(
      _prop: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _prop: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  canManageCampaigns(
    _user: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  receiveCampaignCommission: {
    (
      _campaign: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _campaign: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _campaign: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _campaign: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    campaignCategories(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN; 2: BN; 3: boolean; 4: boolean }>;

    campaignToID(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    campaignTransactionConfig(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    categoryCommission(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    deployedCampaigns(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: string;
      1: string;
      2: BN;
      3: BN;
      4: BN;
      5: BN;
      6: boolean;
      7: boolean;
      8: boolean;
    }>;

    factoryWallet(txDetails?: Truffle.TransactionDetails): Promise<string>;

    root(txDetails?: Truffle.TransactionDetails): Promise<string>;

    tokensApproved(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    userID(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

    users(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string; 1: BN; 2: BN; 3: boolean; 4: boolean }>;

    getCampaignTransactionConfig: {
      (_prop: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(_prop: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
      sendTransaction(
        _prop: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _prop: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    canManageCampaigns(
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    receiveCampaignCommission: {
      (
        _campaign: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _campaign: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _campaign: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _campaign: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
