import { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

import Button from "@/component/Button";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "@/context/ThemeContext";
import { myColors } from "@/styles/Colors";

export default function Index() {
  const [theme, setTheme] = useState("light");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [negate, setNegate] = useState(false);

  const handleNumberPress = (buttonVlaue: string) => {
    const operation = ["."];
    const lastChar = firstNumber.slice(-1);

    if (operation.includes(lastChar) && buttonVlaue === ".") {
      return;
    }

    if (firstNumber === "") {
      setSecondNumber((n) => n + buttonVlaue);
    } else {
      setFirstNumber((n) => n + buttonVlaue);
    }

    // if (buttonVlaue === "." && !firstNumber.includes(".")) {
    //   setFirstNumber(firstNumber + buttonVlaue);
    // } else if (buttonVlaue === "<" && firstNumber !== "") {
    //   setFirstNumber(firstNumber.substring(0, firstNumber.length - 1));
    // } else if (buttonVlaue === "+/-" && firstNumber !== "") {
    //   if (!negate && !firstNumber.includes("-")) {
    //     setFirstNumber("-" + firstNumber);
    //   } else {
    //     setFirstNumber(firstNumber.replace("-", ""));
    //   }
    // } else if (parseInt(buttonVlaue) >= 0) {
    //   setFirstNumber(firstNumber + buttonVlaue);
    // }
  };

  const handleOperationPress = (buttonValue: string) => {
    const lastChar = firstNumber.slice(-1);
    const operation = ["/", "*", "-", "+"];

    if (operation.includes(lastChar)) {
      setFirstNumber((n) => firstNumber.slice(0, -1) + buttonValue);
    } else if (secondNumber !== "" && operation.includes(buttonValue)) {
      setFirstNumber((n) => secondNumber + buttonValue);
      setSecondNumber("");
    } else {
      setFirstNumber((n) => n + buttonValue);
      evaluate();
    }

    // if (operation !== "" && buttonValue !== operation) {
    //   setSecondNumber(
    //     secondNumber.substring(0, secondNumber.length - 1) + buttonValue
    //   );
    // } else {
    //   setSecondNumber(eval(secondNumber + firstNumber) + buttonValue);
    //   setFirstNumber("");
    // }

    // setOperation(buttonValue);
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
  };

  const getResult = () => {
    setSecondNumber(evaluate());
    setFirstNumber("");
    // if (firstNumber !== "" && secondNumber !== "") {
    //   setSecondNumber(eval(secondNumber + firstNumber));
    //   setFirstNumber("");
    // }

    // switch (operation) {
    //   case "+":
    //     // clear();
    //     setResult(parseInt(secondNumber) + parseInt(firstNumber));
    //     break;
    //   case "-":
    //     // clear();
    //     setResult(parseInt(secondNumber) - parseInt(firstNumber));
    //     break;
    //   case "*":
    //     // clear();
    //     setResult(parseInt(secondNumber) * parseInt(firstNumber));
    //     break;
    //   case "/":
    //     // clear();
    //     setResult(parseInt(secondNumber) / parseInt(firstNumber));
    //     break;
    //   default:
    //     // clear();
    //     setResult(0);
    //     break;
    // }
  };

  // const firstNumberDisplay = () => {
  //   if (result !== null) {
  //     return result?.toString();
  //   }
  //   if (firstNumber && firstNumber.length < 6) {
  //     return `${firstNumber}`;
  //   }
  //   if (firstNumber === "") {
  //     return "0";
  //   }
  //   if (firstNumber.length > 5 && firstNumber.length < 8) {
  //     return `${firstNumber}`;
  //   }
  //   if (firstNumber.length > 7) {
  //     return `${firstNumber}`;
  //   }
  // };

  const evaluate = (): string => {
    if (secondNumber !== "") return secondNumber;

    try {
      if (firstNumber === "" || typeof firstNumber === undefined) return "0";
      const computed = eval(firstNumber);
      // const rounded = computed.toFixed(2);
      // console.log(rounded);
      return computed;
    } catch (error) {
      return "";
    }
  };
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <View style={styles.darkmode}>
          <Switch
            value={theme === "light"}
            trackColor={{ false: myColors.light, true: myColors.dark }}
            thumbColor={theme === "light" ? myColors.gray : myColors.light}
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </View>
        <View style={styles.result}>
          <Text
            style={
              theme !== "light"
                ? styles.compute
                : [styles.compute, { color: myColors.dark }]
            }
          >
            {evaluate()}
          </Text>
          <Text
            style={
              theme !== "light"
                ? styles.display
                : [styles.display, { color: myColors.dark }]
            }
          >
            {firstNumber}
          </Text>
        </View>
        <View
          style={
            theme === "light"
              ? styles.buttonsWrapper
              : [styles.buttonsWrapper, { borderTopColor: myColors.light }]
          }
        >
          <View style={styles.buttons}>
            <Button
              background={myColors.btnGray}
              onPress={() => clear()}
              title="C"
            />
            <Button
              background={myColors.btnGray}
              onPress={() => {
                /*handleNumberPress("+/-")*/
              }}
              title="+-"
            />
            <Button
              background={myColors.btnGray}
              onPress={() => handleOperationPress("%")}
              title="%"
            />
            <Button
              background={myColors.blue}
              onPress={() => handleOperationPress("/")}
              title="/"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("7")}
              title="7"
            />
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("8")}
              title="8"
            />
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("9")}
              title="9"
            />
            <Button
              background={myColors.blue}
              onPress={() => handleOperationPress("*")}
              title="*"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("4")}
              title="4"
            />
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("5")}
              title="5"
            />
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("6")}
              title="6"
            />
            <Button
              background={myColors.blue}
              onPress={() => handleOperationPress("-")}
              title="-"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("1")}
              title="1"
            />
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("2")}
              title="2"
            />
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("3")}
              title="3"
            />
            <Button
              background={myColors.blue}
              onPress={() => handleOperationPress("+")}
              title="+"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress("0")}
              title="0"
            />
            <Button
              background={myColors.btnDark}
              onPress={() => handleNumberPress(".")}
              title="."
            />
            <Button
              background={myColors.btnDark}
              onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
              title="<"
            />
            <Button
              background={myColors.blue}
              onPress={() => getResult()}
              title="="
            />
          </View>
        </View>
        <StatusBar backgroundColor="#000" style="light" />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  darkmode: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    // borderBlockColor: "white",
    // borderWidth: 1,
    padding: 10,
    backgroundColor: myColors.light
  },
  result: {
    flex: 1
    // backgroundColor: "#1f5b8e",
    // borderBlockColor: "white",
    // borderWidth: 1,
    // color: "#fff"
  },
  compute: {
    // borderBlockColor: "white",
    // borderWidth: 1,
    color: "#fff",
    fontSize: 70,
    textAlign: "right",
    padding: 10
  },
  display: {
    flex: 1,
    // borderWidth: 1,
    fontSize: 30,
    color: "#fff",
    textAlign: "right",
    padding: 10
  },
  buttonsWrapper: {
    flex: 3,
    justifyContent: "flex-end",
    // borderBlockColor: "white",
    // borderWidth: 1,
    marginTop: 40,
    paddingTop: 40,
    borderTopColor: "#000",
    borderTopWidth: 1
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 18
  }
});
