import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";

type CalculationProps = {
  calculation: number | string;
  onChange?: (value: number) => void;
};
const Calculation = ({
  firstNumberDisplay
}: {
  firstNumberDisplay: () => React.JSX.Element;
}) => {
  const onChangeText = (text: string) => {
    const cleanedValue = text.replace(/[^0-9]/g, "");
    const parsedValue = parseInt(cleanedValue, 10);
    // onChange(parsedValue);
  };
  const onKeyPressHandler = (e: unknown) => {
    console.log(e);
  };
  return (
    <View>
      <Text>
        {secondNumber}
        <Text>{operation}</Text>
      </Text>
      {firstNumberDisplay}
    </View>
  );
};

export default Calculation;
