import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function GoalInput({ courseGoals, setCourseGoals }) {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = () => {
    if (enteredText.trim().length === 0) return;
    setCourseGoals((currentcourseGoals) => [
      ...currentcourseGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
    setEnteredText("");
  };

  const textChanged = (text) => {
    setEnteredText(text);
  };
  return (
    <View style={styles.firstContainer}>
      <TextInput
        placeholder="Put Your Goals Here"
        onChangeText={textChanged}
        style={styles.inputText}
        value={enteredText}
      />
      <Button onPress={addGoalHandler} title="ADD GOAL" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    width: "75%",
    padding: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRightWidth: 10,
    marginRight: 5,
    backgroundColor: "white",
  },
  firstContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    padding: 7,
    flex: 1,
  },
});
