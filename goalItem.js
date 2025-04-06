import { useState } from "react";
import { Text, View, FlatList,StyleSheet } from "react-native";
import GoalInput from "./Components/goalinput"
export default function GoalItem({ courseGoals }) {
  return (
    <FlatList
      data={courseGoals}
      renderItem={(itemData) => (
        <Text style={styles.individualGoals}>{itemData.item.text}</Text>
      )}
    />
  );
}

const styles= StyleSheet.create({
    individualGoals: {
        backgroundColor: "rgba(85, 48, 127,0.6)",
        width: "80%",
        color: "rgba(42, 230, 136, 0.93)",
        fontSize: 18,
        marginBottom: 5,
        padding: 5,
      },
});

