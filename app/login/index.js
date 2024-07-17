import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import TextInput from "../../components/inputs/TextInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="justify-center items-center flex h-screen">
      <KeyboardAvoidingView
        className="w-[250px]"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <Text className="font-bold text-2xl mb-5">Login</Text>
        <TextInput text={name} setText={setName} label={"Name"} />
        <TextInput text={password} setText={setPassword} label={"Password"} />
        <PrimaryButton text={"Continue"} action={() => console.log("n")} />
      </KeyboardAvoidingView>
    </View>
  );
}
