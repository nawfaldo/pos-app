import { View, Text } from "react-native";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://192.168.68.104:4000/graphql",
  credentials: "include",
});

export default function Layout() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </ApolloProvider>
  );
}
