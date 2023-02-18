import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import AuthProvider from "../components/AuthProvider";
//import { ChainId } from "@thirdweb-dev/chains";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
   <ThirdwebProvider 
     activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 2330, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://rpc0.altcoinchain.org/rpc"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chains native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Altcoinchain",
          symbol: "ALT",
        },
      }}
     >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThirdwebProvider>
  );
};

export default MyApp;
