import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import AuthProvider from "../components/AuthProvider";
//import { ChainId, Altcoinchain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ChainId } from "@thirdweb-dev/chains/2330.ts";
const activeChainId = ChainId.Altcoinchain;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <ThirdwebProvider  activeChain={Altcoinchain}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThirdwebProvider>
  );
};

export default MyApp;
