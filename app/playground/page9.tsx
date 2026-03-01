import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage9() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 9</Text>
        <View style={styles.topBox}>
          <Text style={styles.paragraph}>
            This fixed-width top block and oversized controls are intentionally built for tablet-only dimensions,
            causing text and controls to run off-screen on phones.
          </Text>
        </View>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="City" />
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button A</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button B</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button C</Text></TouchableOpacity>
      </View>
      {/* STUDENT TASK:
          Fix this page to become responsive.
          Remove fixed widths.
          Handle overflow.
          Add ScrollView if necessary.
          Improve layout for portrait & landscape. */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#cffafe' },
  container: { width: 900, backgroundColor: '#67e8f9', padding: 22 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 14 },
  topBox: { width: 860, height: 260, backgroundColor: '#22d3ee', padding: 18, marginBottom: 20 },
  paragraph: { fontSize: 30, lineHeight: 42 },
  input: { width: 680, height: 92, borderWidth: 2, fontSize: 30, backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 16 },
  button: { width: 760, height: 84, backgroundColor: '#0e7490', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 27, fontWeight: '700' },
});
