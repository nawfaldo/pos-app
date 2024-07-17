import { View, TextInput as Input, Text } from "react-native";

export default function TextInput({ text, setText, label }) {
  return (
    <View className="w-full space-y-1 mb-3">
      <Text className="font-light text-sm">{label}</Text>
      <Input
        className="border border-gray-500 w-full py-3 px-4 rounded-md"
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder="..."
      />
    </View>
  );
}
