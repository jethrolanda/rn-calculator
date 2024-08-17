import { Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type ButtonProps = {
  onPress: () => void;
  title: string;
  background: string;
};
export default function Button({ onPress, title, background }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? "#18191a" : background
        }
      ]}
    >
      {title === "<" ? (
        <Ionicons
          style={styles.text}
          name="backspace"
          // color={color}
          size={28}
        />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginHorizontal: 8,
    borderRadius: 30,
    elevation: 2,
    backgroundColor: "#232324"
  },
  text: {
    fontSize: 28,
    letterSpacing: 11,
    color: "white"
  }
});
