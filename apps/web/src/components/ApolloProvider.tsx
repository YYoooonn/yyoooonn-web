"use client";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/lib/apollo/client";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const client = createApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
