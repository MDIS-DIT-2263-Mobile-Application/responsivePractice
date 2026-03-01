import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage13() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 13</Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Course" />
        <Text style={styles.paragraph}>
          Content and controls are intentionally offset with fixed margins and widths to make this screen break in
          smartphone portrait mode.
        </Text>
        <TouchableOpacity style={styles.buttonOne}><Text style={styles.buttonText}>Button A</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonTwo}><Text style={styles.buttonText}>Button B</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonThree}><Text style={styles.buttonText}>Button C</Text></TouchableOpacity>
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
  page: { flex: 1, backgroundColor: '#fee2e2' },
  container: { width: 900, backgroundColor: '#fca5a5', padding: 30 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 20 },
  input: { width: 500, height: 88, borderWidth: 2, fontSize: 30, paddingHorizontal: 12, backgroundColor: '#fff', marginLeft: 240, marginBottom: 18 },
  paragraph: { width: 860, fontSize: 31, lineHeight: 42, marginBottom: 20 },
  buttonOne: { width: 370, height: 84, backgroundColor: '#dc2626', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  buttonTwo: { width: 430, height: 84, backgroundColor: '#b91c1c', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  buttonThree: { width: 490, height: 84, backgroundColor: '#991b1b', justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 26, fontWeight: '700' },
});
