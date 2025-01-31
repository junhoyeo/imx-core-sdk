import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { EncodingApi, UsersApi } from '../../api';
import {
  Core,
  Core__factory,
  Registration,
  Registration__factory,
} from '../../contracts';
import { Config } from '../../types';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';

export async function completeEthWithdrawalWorkflow(
  signer: Signer,
  starkPublicKey: string,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: Config,
) {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);

  // Get instance of core contract
  const coreContract = Core__factory.connect(
    config.starkContractAddress,
    signer,
  );

  // Get instance of registration contract
  const registrationContract = Registration__factory.connect(
    config.registrationContractAddress,
    signer,
  );

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndWithdrawEth(
      signer,
      assetType.asset_type,
      starkPublicKey,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawEth(
      signer,
      assetType.asset_type,
      starkPublicKey,
      coreContract,
    );
  }
}

async function executeRegisterAndWithdrawEth(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndWithdraw(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function executeWithdrawEth(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.withdraw(
    starkPublicKey,
    assetType,
  );

  return signer.sendTransaction(populatedTransaction);
}
