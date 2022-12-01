import type { IMarket, IPair } from "@dahlia-labs/numoen-utils";
import { Price, Token } from "@dahlia-labs/token-utils";
import type { IUniswapV2Pair } from "@dahlia-labs/uniswapv2-utils";
import { chainID } from "@dahlia-labs/use-ethers";

const imageRegistry =
  "https://raw.githubusercontent.com/Numoen/config/master/src/images/";

const USDC = new Token({
  address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  chainId: chainID.arbitrum,
  name: "USD Coin",
  symbol: "USDC",
  decimals: 6,
  logoURI: imageRegistry.concat("usdc.jpg"),
});

export const WETH = new Token({
  address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  chainId: chainID.arbitrum,
  name: "Wrapped Ether",
  symbol: "WETH",
  decimals: 18,
  logoURI: imageRegistry.concat("eth.jpg"),
});

const uniPair: IUniswapV2Pair = {
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

const pair: IPair = {
  speculativeToken: WETH,
  baseToken: USDC,

  lp: new Token({
    chainId: chainID.arbitrum,
    name: "NLP",
    symbol: "NLP",
    decimals: 18,
    address: "0xb6000df93DF16fcc8101D4AaF815574468353C8f",
  }),

  bound: new Price(WETH, USDC, 1, 3000 * 10 ** 6),
  baseScaleFactor: 12,
  speculativeScaleFactor: 18,
  address: "0xb6000df93DF16fcc8101D4AaF815574468353C8f",
} as const;

export const market: IMarket = {
  pair,
  referenceMarket: uniPair,
  address: "0xf7e10cbdE762d5011DBEE5418b27dB12C2f98c66",
  token: new Token({
    address: "0xf7e10cbdE762d5011DBEE5418b27dB12C2f98c66",
    name: "ETH+",
    symbol: "ETH+",
    decimals: 18,
    chainId: chainID.arbitrum,
  }),
} as const;
