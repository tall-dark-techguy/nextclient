import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/graphql/utils/client";

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning={true}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
