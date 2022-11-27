import type { ChainsV1, IMarket, IPair } from "@dahlia-labs/numoen-utils";
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
    address: "0x6e2674F56B05cD7eeF55571Ff74894C3cF842f79",
  }),

  bound: new Price(WETH, UNI, 1, 5),
  baseScaleFactor: 18,
  speculativeScaleFactor: 18,
  address: "0x6e2674F56B05cD7eeF55571Ff74894C3cF842f79",
} as const;

const market: IMarket = {
  pair,
  referenceMarket: uniPair,
  address: "0xA2d94F41FfF0c97EB7c7f8c63AB8dc8fc22d3db2",
  token: new Token({
    address: "0xA2d94F41FfF0c97EB7c7f8c63AB8dc8fc22d3db2",
    name: "ETH+",
    symbol: "ETH+",
    decimals: 18,
    chainId: chainID.goerli,
  }),
} as const;

export const markets: Readonly<{ [chain in ChainsV1]: readonly IMarket[] }> = {
  goerli: [market],
} as const;
