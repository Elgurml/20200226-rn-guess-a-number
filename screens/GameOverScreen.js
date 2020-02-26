import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberContainer from "../components/NumberContainer";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOver}>The Game is Over!</Text>
      <Text style={styles.round}>Number of rounds: {props.roundsNumber}</Text>
      <Text style={styles.numWas}>Number was:</Text>
      <View style={styles.number}>
        <NumberContainer>{props.userNumber}</NumberContainer>
      </View>
      <View style={styles.buttonContainer}>
      <Button title="NEW GAME" onPress={props.onRestart}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gameOver: {
    fontSize: 25,
    marginBottom: 20
  },
  round: {
    fontSize: 15,
    marginBottom: 20
  },
  numWas: {
    fontSize: 25,
    marginBottom: 20
  },
  number: {
    marginBottom: 20
  },
  buttonContainer: {
    width: 80
  }
});

export default GameOverScreen;
