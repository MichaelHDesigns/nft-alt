import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import AuthProvider from "../components/AuthProvider";
import { Gnosis } from "@thirdweb-dev/chains";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider  
     activeChain={Gnosis} >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThirdwebProvider>
  );
};

export default MyApp;
