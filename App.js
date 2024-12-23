import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const FutsalScoreApp = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const updateScore = (team, change) => {
    if (team === 'A') {
      const newScore = Math.max(scoreA + change, 0);
      setScoreA(newScore);
      if (newScore === 10) Alert.alert('Pemenang', 'Tim A menang ANJAY!');
    } else {
      const newScore = Math.max(scoreB + change, 0);
      setScoreB(newScore);
      if (newScore === 10) Alert.alert('Pemenang', 'Tim B menang ANJAY!');
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreboard}>
        <View style={styles.teamContainer}>
          <View style={styles.indicatorA} />
          <Text style={styles.teamName}>bg adji</Text>
          <Text style={styles.score}>{scoreA}</Text>
        </View>

        <Text style={styles.divider}>:</Text>

        <View style={styles.teamContainer}>
          <Text style={styles.score}>{scoreB}</Text>
          <Text style={styles.teamName}>bg ardika</Text>
          <View style={styles.indicatorB} />
        </View>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={() => updateScore('A', 1)}>
          <Text style={styles.buttonText}>+ A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updateScore('A', -1)}>
          <Text style={styles.buttonText}>- A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updateScore('B', 1)}>
          <Text style={styles.buttonText}>+ B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updateScore('B', -1)}>
          <Text style={styles.buttonText}>- B</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 1,
  },
  scoreboard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#444',
    marginBottom: 20,
    width: '90%',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 8,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  divider: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 16,
  },
  indicatorA: {
    width: 20,
    height: 20,
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
  indicatorB: {
    width: 20,
    height: 20,
    backgroundColor: '#e74c3c',
    borderRadius: 10,
  },
  controls: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#555',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#f39c12',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
  },
  resetText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FutsalScoreApp;
