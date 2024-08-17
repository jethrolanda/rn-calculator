import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // headerShown: false,
          title: "My Calculator",
          headerStyle: { backgroundColor: "#18191a" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerShown: false
        }}
      />
    </Stack>
  );
}
