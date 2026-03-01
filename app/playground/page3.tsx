import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage3() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 3</Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Form field" />
        <Text style={styles.paragraph}>
          Here the input is placed first and everything below keeps fixed sizes and hard spacing. On portrait phones,
          this causes immediate overflow with text and controls cut off the screen.
        </Text>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button A</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button B</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button C</Text></TouchableOpacity>
        </View>
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
  page: { flex: 1, backgroundColor: '#ede9fe' },
  container: { width: 900, padding: 34, backgroundColor: '#c4b5fd' },
  title: { fontSize: 40, fontWeight: '800', marginBottom: 16 },
  input: { width: 620, height: 80, fontSize: 30, borderWidth: 3, paddingHorizontal: 14, backgroundColor: '#fff', marginBottom: 20 },
  paragraph: { fontSize: 29, lineHeight: 42, marginBottom: 24 },
  buttonColumn: { marginLeft: 220 },
  button: { width: 420, height: 88, backgroundColor: '#5b21b6', justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  buttonText: { color: '#fff', fontSize: 27, fontWeight: '700' },
});
