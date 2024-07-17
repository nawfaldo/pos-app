import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { useQuery } from "@apollo/client";
import { GET_AUTH_USER } from "../graphql/queries/user";
import { router } from "expo-router";

export default function Page() {
  const { data, loading } = useQuery(GET_AUTH_USER, {
    variables: {
      menu: JSON.stringify({
        name: "dashboard",
        details: [{ name: "view" }],
      }),
    },
    onError: () => {
      router.replace("/login");
    },
  });

  return (
    <View>
      <Link href="/login" asChild>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
