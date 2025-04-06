import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import GoalInput from "./Components/goalinput";
import GoalItem from "./goalItem";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  return (
    <View style={styles.mainContainer}>
      <GoalInput courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
      <View style={{ flex: 8 }}>
        <Text style={styles.yourGoals}>Your Goals:</Text>
        <GoalItem courseGoals={courseGoals} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    backgroundColor: "black",
  },
  yourGoals: {
    color: "rgb(160, 145, 105)",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
