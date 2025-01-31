import { TokenType } from './token';

export interface ETHWithdrawal {
  type: TokenType.ETH;
}

interface ETHPrepareWithdrawal {
  type: TokenType.ETH;
  data: {
    decimals: number
  }
}

export const ETH_PREPARE_WITHDRAWAL_DATA: ETHPrepareWithdrawal = {
  type: TokenType.ETH,
  data: {
    decimals: 18,
  },
}

export interface ERC721Withdrawal {
  type: TokenType.ERC721;
  data: {
    tokenId: string,
    tokenAddress: string;
  };
}

export interface ERC20Withdrawal {
  type: TokenType.ERC20;
  data: {
    tokenId: string,
    tokenAddress: string;
  };
}

export interface ERC20PrepareWithdrawal {
  type: TokenType.ERC20;
  data: {
    tokenAddress: string,
    decimals: number,
  };
}


export type TokenWithdrawal = ETHWithdrawal | ERC20Withdrawal | ERC721Withdrawal;
export type TokenPrepareWithdrawal = ETHPrepareWithdrawal | ERC20PrepareWithdrawal | ERC721Withdrawal;

