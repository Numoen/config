import type { IMarket, IPair } from "@dahlia-labs/numoen-utils";
import { Price, Token } from "@dahlia-labs/token-utils";
import type { IUniswapV2Pair } from "@dahlia-labs/uniswapv2-utils";
import { chainID } from "@dahlia-labs/use-ethers";

const imageRegistry =
  "https://raw.githubusercontent.com/Numoen/config/master/src/images/";

const UNI = new Token({
  address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
  chainId: chainID.goerli,
  name: "Uniswap",
  symbol: "UNI",
  decimals: 18,
  logoURI: imageRegistry.concat("uni.jpg"),
});

export const WETH = new Token({
  address: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  chainId: chainID.goerli,
  name: "Wrapped Ether",
  symbol: "WETH",
  decimals: 18,
  logoURI: imageRegistry.concat("eth.jpg"),
});

const uniPair: IUniswapV2Pair = {
  tokens: [UNI, WETH],
  address: "0x6D2fAf643Fe564e0204f35e38d1a1b08D9620d14",
  lpToken: new Token({
    chainId: chainID.goerli,
    name: "Sushiswap LP Token",
    symbol: "SLP",
    decimals: 18,
    address: "0x6D2fAf643Fe564e0204f35e38d1a1b08D9620d14",
  }),
} as const;

const pair: IPair = {
  speculativeToken: WETH,
  baseToken: UNI,

  lp: new Token({
    chainId: chainID.goerli,
    name: "NLP",
    symbol: "NLP",
    decimals: 18,
    address: "0xE50167C47d4199FadB8504AA7f678619E70E3CF8",
  }),

  bound: new Price(WETH, UNI, 1, 5),
  baseScaleFactor: 18,
  speculativeScaleFactor: 18,
  address: "0xE50167C47d4199FadB8504AA7f678619E70E3CF8",
} as const;

export const market: IMarket = {
  pair,
  referenceMarket: uniPair,
  address: "0x34Af1Ae49aE5FC50076C59376791ADfC3F0c17BA",
  token: new Token({
    address: "0x34Af1Ae49aE5FC50076C59376791ADfC3F0c17BA",
    name: "ETH+",
    symbol: "ETH+",
    decimals: 18,
    chainId: chainID.goerli,
  }),
} as const;
