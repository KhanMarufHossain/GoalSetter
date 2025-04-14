// App.js
import { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import GoalInput from "./Components/goalinput";
import GoalItem from "./Components/goalItem";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <><StatusBar style="light"/>
    <View style={styles.mainContainer}>
      <View style={styles.goalsContainer}>
        <Text style={styles.yourGoals}>Your Goals:</Text>
        <GoalItem courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
      </View>
      <View style={styles.header}>
        <Button
          title="Add New Goal"
          onPress={() => setModalIsVisible(true)}
          color="rgba(82, 184, 119, 0.79)"
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
    </View></>
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
    flex: 7,
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  yourGoals: {
    color: "rgba(82, 216, 214, 0.88)",
    fontSize: 25,
    fontWeight: "normal",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
});
