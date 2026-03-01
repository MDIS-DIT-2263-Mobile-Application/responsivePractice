import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage7() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 7</Text>
        <Text style={styles.paragraph}>
          This scenario uses absolute positioning for controls and extra-large typography. It is purposely difficult on
          small displays and should break visually.
        </Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Phone" />
        <TouchableOpacity style={styles.button1}><Text style={styles.buttonText}>Button A</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2}><Text style={styles.buttonText}>Button B</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button3}><Text style={styles.buttonText}>Button C</Text></TouchableOpacity>
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
  page: { flex: 1, backgroundColor: '#dbeafe' },
  container: { width: 900, backgroundColor: '#93c5fd', padding: 30, height: 680 },
  title: { fontSize: 41, fontWeight: '800', marginBottom: 20 },
  paragraph: { width: 820, fontSize: 31, lineHeight: 43, marginBottom: 24 },
  input: { width: 620, height: 90, borderWidth: 2, fontSize: 30, paddingHorizontal: 14, backgroundColor: '#fff' },
  button1: { position: 'absolute', top: 400, left: 40, width: 250, height: 90, backgroundColor: '#1d4ed8', justifyContent: 'center', alignItems: 'center' },
  button2: { position: 'absolute', top: 400, left: 320, width: 250, height: 90, backgroundColor: '#1e40af', justifyContent: 'center', alignItems: 'center' },
  button3: { position: 'absolute', top: 400, left: 600, width: 250, height: 90, backgroundColor: '#1e3a8a', justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 25, fontWeight: '700' },
});
