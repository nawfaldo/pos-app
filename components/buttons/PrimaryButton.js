import { Pressable, Text } from "react-native";

export default function PrimaryButton({ text, action }) {
  return (
    <Pressable
      className="w-full bg-blue-500 flex items-center py-3 rounded-md border-b-[5px] border-blue-700"
      onPress={action}
    >
      <Text className="text-white font-medium">{text}</Text>
    </Pressable>
  );
}
