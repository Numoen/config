import { ChainId } from "@dahlia-labs/celo-contrib";
import { CELO, CUSD, MOBI, UBE } from "@dahlia-labs/celo-tokens";
import type { IMarket } from "@dahlia-labs/numoen-utils";
import { Price, Token } from "@dahlia-labs/token-utils";

const LongCelo: IMarket = {
  token: new Token({
    name: "Numoen Lendgine",
    symbol: "CELO+",
    decimals: 18,
    chainId: ChainId.Mainnet,
    address: "0x24aceAE438C60DD6ba937B27345531115a099048",
  }),

  address: "0x24aceAE438C60DD6ba937B27345531115a099048",
  pair: {
    speculativeToken: CELO[ChainId.Mainnet],
    baseToken: CUSD[ChainId.Mainnet],

    lp: new Token({
      name: "Numoen LP",
      symbol: "NLP",
      decimals: 18,
      chainId: ChainId.Mainnet,
      address: "0xFD634643275d2EA018F6D13b88244ca5BB96564C",
    }),

    bound: new Price(CUSD[ChainId.Mainnet], CELO[ChainId.Mainnet], 1, 5),
    baseScaleFactor: 18,
    speculativeScaleFactor: 18,
    address: "0xFD634643275d2EA018F6D13b88244ca5BB96564C",
  },
  referenceMarket: {
    address: "0x1e593f1fe7b61c53874b54ec0c59fd0d5eb8621e",
    tokens: [CELO[ChainId.Mainnet], CUSD[ChainId.Mainnet]],
    lpToken: new Token({
      address: "0x1e593f1fe7b61c53874b54ec0c59fd0d5eb8621e",
      chainId: ChainId.Mainnet,
      symbol: "ULP",
      name: "Ubeswap LP",
      decimals: 18,
    }),
  },
};

const Mobi: IMarket = {
  token: new Token({
    name: "Numoen Lendgine",
    symbol: "MOBI+",
    decimals: 18,
    chainId: ChainId.Mainnet,
    address: "0x480E0860F64FD42c0aCbB90FAD33C4Fa059e7d95",
  }),

  address: "0x480E0860F64FD42c0aCbB90FAD33C4Fa059e7d95",
  pair: {
    speculativeToken: MOBI[ChainId.Mainnet],
    baseToken: CELO[ChainId.Mainnet],

    lp: new Token({
      name: "Numoen LP",
      symbol: "NLP",
      decimals: 18,
      chainId: ChainId.Mainnet,
      address: "0x3D9222F94CCf6993f62A88D59D9A5Af1A0c351e5",
    }),

    bound: new Price(CELO[ChainId.Mainnet], MOBI[ChainId.Mainnet], 1000, 2),
    baseScaleFactor: 18,
    speculativeScaleFactor: 18,
    address: "0x3D9222F94CCf6993f62A88D59D9A5Af1A0c351e5",
  },
  referenceMarket: {
    address: "0x0b81cf47c8f97275d14c006e537d5101b6c87300",
    tokens: [CELO[ChainId.Mainnet], MOBI[ChainId.Mainnet]],
    lpToken: new Token({
      address: "0x0b81cf47c8f97275d14c006e537d5101b6c87300",
      chainId: ChainId.Mainnet,
      name: "Ubeswap LP",
      symbol: "ULP",
      decimals: 18,
    }),
  },
};

const Ube: IMarket = {
  token: new Token({
    name: "Numoen Lendgine",
    symbol: "UBE+",
    decimals: 18,
    chainId: ChainId.Mainnet,
    address: "0xd89F5fd3F6df3FD68Ca7604566DE25c2C3Dd5EAd",
  }),
  address: "0xd89F5fd3F6df3FD68Ca7604566DE25c2C3Dd5EAd",
  pair: {
    speculativeToken: UBE[ChainId.Mainnet],
    baseToken: CELO[ChainId.Mainnet],

    lp: new Token({
      name: "Numoen LP",
      symbol: "NLP",
      decimals: 18,
      chainId: ChainId.Mainnet,
      address: "0x89AE09FBe40Dc4436c0F1D3dde0d50cC6d000D97",
    }),

    bound: new Price(CELO[ChainId.Mainnet], UBE[ChainId.Mainnet], 10, 2),
    baseScaleFactor: 18,
    speculativeScaleFactor: 18,
    address: "0x89AE09FBe40Dc4436c0F1D3dde0d50cC6d000D97",
  },
  referenceMarket: {
    address: "0xe7b5ad135fa22678f426a381c7748f6a5f2c9e6c",
    tokens: [UBE[ChainId.Mainnet], CELO[ChainId.Mainnet]],
    lpToken: new Token({
      address: "0xe7b5ad135fa22678f426a381c7748f6a5f2c9e6c",
      chainId: ChainId.Mainnet,
      name: "Ubeswap LP",
      symbol: "ULP",
      decimals: 18,
    }),
  },
};

export const markets: IMarket[] = [LongCelo, Mobi, Ube];
