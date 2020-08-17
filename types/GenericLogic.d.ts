/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface GenericLogicInterface extends Interface {
  functions: {
    HEALTH_FACTOR_LIQUIDATION_THRESHOLD: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    calculateAvailableBorrowsETH: TypedFunctionDescription<{
      encode([collateralBalanceETH, borrowBalanceETH, ltv]: [
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;
  };

  events: {};
}

export class GenericLogic extends Contract {
  connect(signerOrProvider: Signer | Provider | string): GenericLogic;
  attach(addressOrName: string): GenericLogic;
  deployed(): Promise<GenericLogic>;

  on(event: EventFilter | string, listener: Listener): GenericLogic;
  once(event: EventFilter | string, listener: Listener): GenericLogic;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): GenericLogic;
  removeAllListeners(eventName: EventFilter | string): GenericLogic;
  removeListener(eventName: any, listener: Listener): GenericLogic;

  interface: GenericLogicInterface;

  functions: {
    HEALTH_FACTOR_LIQUIDATION_THRESHOLD(): Promise<BigNumber>;

    calculateAvailableBorrowsETH(
      collateralBalanceETH: BigNumberish,
      borrowBalanceETH: BigNumberish,
      ltv: BigNumberish
    ): Promise<BigNumber>;
  };

  HEALTH_FACTOR_LIQUIDATION_THRESHOLD(): Promise<BigNumber>;

  calculateAvailableBorrowsETH(
    collateralBalanceETH: BigNumberish,
    borrowBalanceETH: BigNumberish,
    ltv: BigNumberish
  ): Promise<BigNumber>;

  filters: {};

  estimate: {
    HEALTH_FACTOR_LIQUIDATION_THRESHOLD(): Promise<BigNumber>;

    calculateAvailableBorrowsETH(
      collateralBalanceETH: BigNumberish,
      borrowBalanceETH: BigNumberish,
      ltv: BigNumberish
    ): Promise<BigNumber>;
  };
}