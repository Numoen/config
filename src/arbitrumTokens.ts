import { Token } from "@dahlia-labs/token-utils";
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

const MAGIC = new Token({
  address: "0x539bdE0d7Dbd336b79148AA742883198BBF60342",
  chainId: chainID.arbitrum,
  name: "Magic",
  symbol: "MAGIC",
  decimals: 18,
  logoURI: imageRegistry.concat("magic.jpg"),
});

const WETH = new Token({
  address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  chainId: chainID.arbitrum,
  name: "Wrapped Ether",
  symbol: "ETH",
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

const SUSHI = new Token({
  address: "0xd4d42F0b6DEF4CE0383636770eF773390d85c61A",
  chainId: chainID.arbitrum,
  name: "Sushiswap",
  symbol: "SUSHI",
  decimals: 18,
  logoURI: imageRegistry.concat("sushi.png"),
});

export const tokens = {
  usdc: USDC,
  weth: WETH,
  magic: MAGIC,
  dpx: DPX,
  sushi: SUSHI,
} as const;
