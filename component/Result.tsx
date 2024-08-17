import { View, Text, StyleSheet } from "react-native";

type ResultProps = {
  value: number;
};
const Result = ({ value }: ResultProps) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.result}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginBottom: 32,
    flex: 1
  },
  result: {
    fontSize: 42,
    textAlign: "right",
    padding: 10,
    borderWidth: 1
  }
});

export default Result;
