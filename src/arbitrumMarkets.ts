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
    address: "0x9cc2b5d316CFE4334d4973f977c1E8d31E7A6D35",
  }),

  bound: new Price(DPX, WETH, 10, 8),
  baseScaleFactor: 18,
  speculativeScaleFactor: 18,
  address: "0x9cc2b5d316CFE4334d4973f977c1E8d31E7A6D35",
} as const;

export const market: IMarket = {
  pair,
  referenceMarket: uniPair,
  address: "0x77466a50aCC5F06BD8eAA1381acDecC0720B6322",
  token: new Token({
    address: "0x77466a50aCC5F06BD8eAA1381acDecC0720B6322",
    name: "DPX+",
    symbol: "DPX+",
    decimals: 18,
    chainId: chainID.arbitrum,
  }),
} as const;
