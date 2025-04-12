import { Text, FlatList, StyleSheet, Pressable } from "react-native";
import GoalInput from "./goalinput";
export default function GoalItem({ courseGoals, setCourseGoals }) {
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentcourseGoals) => {
      return currentcourseGoals.filter((goal) => goal.key !== id);
    });
  };

  return (
    <FlatList
      data={courseGoals}
      renderItem={(itemData) => (
        <Pressable
          onPress={() => {
            deleteGoalHandler(itemData.item.key);
          }}
        >
          <Text style={styles.individualGoals}>{itemData.item.text}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  individualGoals: {
    backgroundColor: "rgba(85, 48, 127,0.6)",
    width: "80%",
    color: "rgba(42, 230, 136, 0.93)",
    fontSize: 18,
    marginBottom: 5,
    padding: 5,
  },
});
