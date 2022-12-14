import type { ChainsV1, IMarket } from "@dahlia-labs/numoen-utils";
import type { Token } from "@dahlia-labs/token-utils";

import { markets as arbiMarkets } from "./arbitrumMarkets";
import { tokens } from "./arbitrumTokens";
import { market as goerliMarket, WETH as goerliWeth } from "./goerliMarkets";

export const markets: Readonly<{ [chain in ChainsV1]: readonly IMarket[] }> = {
  goerli: [goerliMarket],
  arbitrum: arbiMarkets,
} as const;

export const weth: Readonly<{ [chain in ChainsV1]: Token }> = {
  goerli: goerliWeth,
  arbitrum: tokens.weth,
} as const;
