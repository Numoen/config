import type { ChainsV1, IMarket } from "@dahlia-labs/numoen-utils";
import type { Token } from "@dahlia-labs/token-utils";

import {
  market as arbiMarket,
  marketMAGIC,
  marketUSDC,
  WETH as arbiWeth,
} from "./arbitrumMarkets";
import { market as goerliMarket, WETH as goerliWeth } from "./goerliMarkets";

export const markets: Readonly<{ [chain in ChainsV1]: readonly IMarket[] }> = {
  goerli: [goerliMarket],
  arbitrum: [arbiMarket, marketMAGIC, marketUSDC],
} as const;

export const weth: Readonly<{ [chain in ChainsV1]: Token }> = {
  goerli: goerliWeth,
  arbitrum: arbiWeth,
} as const;
