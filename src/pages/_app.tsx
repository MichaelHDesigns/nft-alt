import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import AuthProvider from "../components/AuthProvider";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Altcoinchain;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      chainRpc={{
        [ChainId.Altcoinchain]:
          `https://rpc0.altcoinchain.org/rpc`,
      }}
      desiredChainId={activeChainId}
    >
      <Head>
        <title>thirdweb Marketplace with Next.JS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Marketplace with Next.JS To List Your NFTs For Sale, Accept Bids, and Buy NFTs"
        />
        <meta
          name="keywords"
          content="Thirdweb, Marketplace, NFT Marketplace Tutorial, NFT Auction Tutorial, How To Make OpenSea"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      {/* <ThirdwebGuideFooter /> */}
    </ThirdwebProvider>
  );
}

export default MyApp;
