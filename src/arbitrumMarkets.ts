import type { IMarket, IPair } from "@dahlia-labs/numoen-utils";
import { Price, Token } from "@dahlia-labs/token-utils";
import type { IUniswapV2Pair } from "@dahlia-labs/uniswapv2-utils";
import { chainID } from "@dahlia-labs/use-ethers";

const imageRegistry =
  "https://raw.githubusercontent.com/Numoen/config/master/src/images/";

const DPX = new Token({
  address: "0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55",
  chainId: chainID.arbitrum,
  name: "Dopex Token",
  symbol: "DPX",
  decimals: 18,
  logoURI: imageRegistry.concat("dpx.jpg"),
});

export const WETH = new Token({
  address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  chainId: chainID.arbitrum,
  name: "Wrapped Ether",
  symbol: "WETH",
  decimals: 18,
  logoURI: imageRegistry.concat("eth.jpg"),
});

const USDC = new Token({
  address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  chainId: chainID.arbitrum,
  name: "USD Coin",
  symbol: "USDC",
  decimals: 6,
  logoURI: imageRegistry.concat("usdc.jpg"),
});

const uniPairUSDC: IUniswapV2Pair = {
  tokens: [WETH, USDC],
  address: "0x905dfCD5649217c42684f23958568e533C711Aa3",
  lpToken: new Token({
    chainId: chainID.arbitrum,
    name: "Sushiswap LP Token",
    symbol: "SLP",
    decimals: 18,
    address: "0x905dfCD5649217c42684f23958568e533C711Aa3",
  }),
} as const;

const uniPair: IUniswapV2Pair = {
  tokens: [DPX, WETH],
  address: "0x0C1Cf6883efA1B496B01f654E247B9b419873054",
  lpToken: new Token({
    chainId: chainID.arbitrum,
    name: "Sushiswap LP Token",
    symbol: "SLP",
    decimals: 18,
    address: "0x0C1Cf6883efA1B496B01f654E247B9b419873054",
  }),
} as const;

const pair: IPair = {
  speculativeToken: DPX,
  baseToken: WETH,

  lp: new Token({
    chainId: chainID.arbitrum,
    name: "NLP",
    symbol: "NLP",
    decimals: 18,
    address: "0xeEcc6aC8F0256c8c2779aE8d77C805227064B149",
  }),

  bound: new Price(DPX, WETH, 10, 8),
  baseScaleFactor: 18,
  speculativeScaleFactor: 18,
  address: "0xeEcc6aC8F0256c8c2779aE8d77C805227064B149",
} as const;

const pairUSDC: IPair = {
  speculativeToken: WETH,
  baseToken: USDC,

  lp: new Token({
    chainId: chainID.arbitrum,
    name: "NLP",
    symbol: "NLP",
    decimals: 18,
    address: "0x0a2A65259EA7d5c052745c7EA3D617F4AB3Bfaa0",
  }),

  bound: new Price(WETH, USDC, 1, 4000),
  baseScaleFactor: 6,
  speculativeScaleFactor: 18,
  address: "0x0a2A65259EA7d5c052745c7EA3D617F4AB3Bfaa0",
} as const;

export const market: IMarket = {
  pair,
  referenceMarket: uniPair,
  address: "0x98B8b1B265bcA8ef56833fafb73d5287694608ee",
  token: new Token({
    address: "0x98B8b1B265bcA8ef56833fafb73d5287694608ee",
    name: "DPX+",
    symbol: "DPX+",
    decimals: 18,
    chainId: chainID.arbitrum,
  }),
} as const;

export const marketUSDC: IMarket = {
  pair: pairUSDC,
  referenceMarket: uniPairUSDC,
  address: "0xE48347Fc02117303dfe10A801AB539D414BF39DC",
  token: new Token({
    address: "0xE48347Fc02117303dfe10A801AB539D414BF39DC",
    name: "ETH+",
    symbol: "ETH+",
    decimals: 18,
    chainId: chainID.arbitrum,
  }),
} as const;
