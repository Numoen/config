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
    address: "0x5e9DB25EB03D5f3Eac296620E7DE9a75F4468aA4",
  }),

  bound: new Price(WETH, UNI, 1, 5),
  baseScaleFactor: 18,
  speculativeScaleFactor: 18,
  address: "0x5e9DB25EB03D5f3Eac296620E7DE9a75F4468aA4",
} as const;

const market: IMarket = {
  pair,
  referenceMarket: uniPair,
  address: "0xd72486Bc1a0Cde012342959b77Ee3e35aa840338",
  token: new Token({
    address: "0xd72486Bc1a0Cde012342959b77Ee3e35aa840338",
    name: "ETH+",
    symbol: "ETH+",
    decimals: 18,
    chainId: chainID.goerli,
  }),
} as const;

export const markets: Readonly<{ [chain in ChainsV1]: readonly IMarket[] }> = {
  goerli: [market],
} as const;
