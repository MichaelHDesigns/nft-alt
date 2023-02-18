import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import AuthProvider from "../components/AuthProvider";
import { ChainId } from "@thirdweb-dev/chains";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <ThirdwebProvider desiredChainId={ChainId.Altcoinchain}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThirdwebProvider>
  );
};

export default MyApp;
