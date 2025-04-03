import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View,TextInput, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {

  const [CourseGoals, setCourseGoals] = useState([]);
  const [enteredText, setEnteredText]= useState('');
  const textChanged= (text)=>
  { 
    setEnteredText(text);
  }
  const Buttonpress = ()=>
  {
    setCourseGoals((currentcourseGoals)=> {
      return [...currentcourseGoals, enteredText]
    });
  }
  return (
    <View style= {styles.mainContainer}>
      <View style= {styles.firstContainer}>
        <TextInput style={styles.inputText} placeholder="Put Goals" onChangeText={textChanged}></TextInput>
        <Button title="ADD GOAL" onPress={Buttonpress}/>
      </View>
      <View>
         <Text style= {{color: 'pink', fontWeight: 'bold', fontSize: 20, paddingBottom: 30}}>Your Goals: </Text>
        {CourseGoals.map((goal, index)=> 
          <Text key={index} style={{color: "white", fontSize: 15}}>{goal}</Text>
        )}
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer :{
    flex:1, 
    padding: 20,
    paddingTop: 50,
    backgroundColor: "black",
  },
  firstContainer: {
    
    flexDirection:'row',
    justifyContent:'space-between',
    // padding: 15,
    paddingTop: 10,
    paddingBottom:20,
    alignItems: 'center',
    
  },
  inputText: {
    width: '75%',
    padding: 10,
    borderColor: 'red',
    borderWidth:1,
    borderRightWidth:10,
    marginRight:5,
    backgroundColor: 'white',
    
    
  }
});

