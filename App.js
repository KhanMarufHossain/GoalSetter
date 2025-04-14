// App.js
import { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import GoalInput from "./Components/goalinput";
import GoalItem from "./Components/goalItem";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.goalsContainer}>
        <Text style={styles.yourGoals}>Your Goals:</Text>
        <GoalItem courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
      </View>
      <View style={styles.header}>
        <Button
          title="Add New Goal"
          onPress={() => setModalIsVisible(true)}
          color="rgb(160, 145, 105)"
        />
      </View>

      <Modal visible={modalIsVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <GoalInput
            courseGoals={courseGoals}
            setCourseGoals={setCourseGoals}
            onCancel={() => setModalIsVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flex: 1,
  },
  goalsContainer: {
    flex: 8,
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  yourGoals: {
    color: "rgb(160, 145, 105)",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
});
