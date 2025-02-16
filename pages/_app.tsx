import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "p0lygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider  
       activeChain="polygon"
       clientId="7976449a6362f89d61ead11d0753cfd8"
      >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
