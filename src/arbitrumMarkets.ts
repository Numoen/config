import type { IMarket, IPair } from "@dahlia-labs/numoen-utils";
import { Price, Token, TokenAmount } from "@dahlia-labs/token-utils";
import { chainID } from "@dahlia-labs/use-ethers";

import { tokens } from "./arbitrumTokens";
import { referencePairs } from "./arbitrumUniPair";

const pair_dpx_weth: IPair = {
  speculativeToken: tokens.dpx,
  baseToken: tokens.weth,

  lp: new Token({
    chainId: chainID.arbitrum,
    name: "NLP",
    symbol: "NLP",
    decimals: 18,
    address: "0xeEcc6aC8F0256c8c2779aE8d77C805227064B149",
  }),

  bound: new Price(tokens.dpx, tokens.weth, 10, 8),
  baseScaleFactor: 18,
  speculativeScaleFactor: 18,
  address: "0xeEcc6aC8F0256c8c2779aE8d77C805227064B149",
} as const;

const pair_weth_usdc: IPair = {
  speculativeToken: tokens.weth,
  baseToken: tokens.usdc,

  lp: new Token({
    chainId: chainID.arbitrum,
    name: "NLP",
    symbol: "NLP",
    decimals: 18,
    address: "0x0a2A65259EA7d5c052745c7EA3D617F4AB3Bfaa0",
  }),

  bound: new Price(tokens.weth, tokens.usdc, 1, 4000),
  baseScaleFactor: 6,
  speculativeScaleFactor: 18,
  address: "0x0a2A65259EA7d5c052745c7EA3D617F4AB3Bfaa0",
} as const;

const pair_magic_weth: IPair = {
  speculativeToken: tokens.magic,
  baseToken: tokens.weth,

  lp: new Token({
    chainId: chainID.arbitrum,
    name: "NLP",
    symbol: "NLP",
    decimals: 18,
    address: "0xaAe7e089D1c7caAFCe48116b15D7B87a1FDC0De9",
  }),

  bound: new Price(tokens.magic, tokens.weth, 10000, 25),
  baseScaleFactor: 18,
  speculativeScaleFactor: 18,
  address: "0xaAe7e089D1c7caAFCe48116b15D7B87a1FDC0De9",
} as const;

const pair_sushi_weth: IPair = {
  speculativeToken: tokens.sushi,
  baseToken: tokens.weth,

  lp: new Token({
    chainId: chainID.arbitrum,
    name: "NLP",
    symbol: "NLP",
    decimals: 18,
    address: "0xf227Eb1c3fA56d271Cb2456C08aa0806c7c747d4",
  }),

  bound: new Price(tokens.sushi, tokens.weth, 10000, 30),
  baseScaleFactor: 18,
  speculativeScaleFactor: 18,
  address: "0xf227Eb1c3fA56d271Cb2456C08aa0806c7c747d4",
} as const;

const market_dpx_weth: IMarket = {
  pair: pair_dpx_weth,
  referenceMarket: referencePairs.dpx_weth,
  address: "0x98B8b1B265bcA8ef56833fafb73d5287694608ee",
  token: new Token({
    address: "0x98B8b1B265bcA8ef56833fafb73d5287694608ee",
    name: "DPX+",
    symbol: "DPX+",
    decimals: 18,
    chainId: chainID.arbitrum,
  }),
  maxLiquidity: new TokenAmount(pair_dpx_weth.lp, "100000000000000000000"),
} as const;

const market_weth_usdc: IMarket = {
  pair: pair_weth_usdc,
  referenceMarket: referencePairs.weth_usdc,
  address: "0xE48347Fc02117303dfe10A801AB539D414BF39DC",
  token: new Token({
    address: "0xE48347Fc02117303dfe10A801AB539D414BF39DC",
    name: "ETH+",
    symbol: "ETH+",
    decimals: 18,
    chainId: chainID.arbitrum,
  }),
  maxLiquidity: new TokenAmount(pair_weth_usdc.lp, "6250000000000000"),
} as const;

const market_magic_weth: IMarket = {
  pair: pair_magic_weth,
  referenceMarket: referencePairs.magic_weth,
  address: "0x05Acc946451706c61C71563d96755fbDe4014C36",
  token: new Token({
    address: "0x05Acc946451706c61C71563d96755fbDe4014C36",
    name: "MAGIC+",
    symbol: "MAGIC+",
    decimals: 18,
    chainId: chainID.arbitrum,
  }),
  maxLiquidity: new TokenAmount(
    pair_magic_weth.lp,
    "10000000000000000000000000"
  ),
} as const;

const market_sushi_weth: IMarket = {
  pair: pair_sushi_weth,
  referenceMarket: referencePairs.weth_sushi,
  address: "0x18105700fDa975ad2C38d70C6072608fffAaD6B9",
  token: new Token({
    address: "0x18105700fDa975ad2C38d70C6072608fffAaD6B9",
    name: "SUSHI+",
    symbol: "SUSHI+",
    decimals: 18,
    chainId: chainID.arbitrum,
  }),
  maxLiquidity: new TokenAmount(
    pair_sushi_weth.lp,
    "8000000000000000000000000"
  ),
} as const;

export const markets = [
  market_dpx_weth,
  market_magic_weth,
  market_sushi_weth,
  market_weth_usdc,
];
