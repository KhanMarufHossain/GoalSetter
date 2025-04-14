// Goalinput.js
import { useState } from "react";
import { View, TextInput, Button, StyleSheet,Image } from "react-native";
export default function GoalInput({ courseGoals, setCourseGoals, onCancel }) {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = () => {
    if (enteredText.trim().length === 0) return;
    setCourseGoals((currentcourseGoals) => [
      ...currentcourseGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
    setEnteredText("");
    onCancel(); // Close the modal after adding a goal
  };

  const textChanged = (text) => {
    setEnteredText(text);
  };

  return (
    <View style={styles.firstContainer}>
      <Image style={styles.Image} source={require('../assets/goal.png')}/>
      <TextInput
        placeholder="Put Your Goals Here"
        onChangeText={textChanged}
        style={styles.inputText}
        value={enteredText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancel} color="#f31282" />
        </View>
        <View style={styles.button}>
          <Button onPress={addGoalHandler} title="Add Goal" color="#b180f0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    width: "100%",
    padding: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRightWidth: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "white",
    
  },
  firstContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 7,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    
  },
  Image: {
    width: 100, 
    height: 100, 
    alignSelf: 'center', 
    marginBottom: 20, 
    resizeMode: 'contain' 
    
    
  }
});