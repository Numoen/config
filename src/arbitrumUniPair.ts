import { Token } from "@dahlia-labs/token-utils";
import type { IUniswapV2Pair } from "@dahlia-labs/uniswapv2-utils";
import { chainID } from "@dahlia-labs/use-ethers";

import { tokens } from "./arbitrumTokens";

const magic_weth: IUniswapV2Pair = {
  tokens: [tokens.magic, tokens.weth],
  address: "0xB7E50106A5bd3Cf21AF210A755F9C8740890A8c9",
  lpToken: new Token({
    chainId: chainID.arbitrum,
    name: "Sushiswap LP Token",
    symbol: "SLP",
    decimals: 18,
    address: "0xB7E50106A5bd3Cf21AF210A755F9C8740890A8c9",
  }),
} as const;

const weth_usdc: IUniswapV2Pair = {
  tokens: [tokens.weth, tokens.usdc],
  address: "0x905dfCD5649217c42684f23958568e533C711Aa3",
  lpToken: new Token({
    chainId: chainID.arbitrum,
    name: "Sushiswap LP Token",
    symbol: "SLP",
    decimals: 18,
    address: "0x905dfCD5649217c42684f23958568e533C711Aa3",
  }),
} as const;

const dpx_weth: IUniswapV2Pair = {
  tokens: [tokens.dpx, tokens.weth],
  address: "0x0C1Cf6883efA1B496B01f654E247B9b419873054",
  lpToken: new Token({
    chainId: chainID.arbitrum,
    name: "Sushiswap LP Token",
    symbol: "SLP",
    decimals: 18,
    address: "0x0C1Cf6883efA1B496B01f654E247B9b419873054",
  }),
} as const;

const weth_sushi: IUniswapV2Pair = {
  tokens: [tokens.weth, tokens.sushi],
  address: "0x3221022e37029923aCe4235D812273C5A42C322d",
  lpToken: new Token({
    chainId: chainID.arbitrum,
    name: "Sushiswap LP Token",
    symbol: "SLP",
    decimals: 18,
    address: "0x3221022e37029923aCe4235D812273C5A42C322d",
  }),
} as const;

export const referencePairs = {
  magic_weth,
  weth_usdc,
  dpx_weth,
  weth_sushi,
};
