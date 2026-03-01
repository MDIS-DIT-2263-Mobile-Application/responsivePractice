import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage1() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 1</Text>
        <Text style={styles.paragraph}>
          This tablet-only screen intentionally keeps a fixed 900 width layout with large text and long content so
          that smartphone portrait mode clearly breaks and overflows in multiple places for repair practice.
        </Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Enter text" />
        <View style={styles.buttonRow}>
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
  page: { flex: 1, backgroundColor: '#ffe7d6' },
  container: { width: 900, padding: 30, backgroundColor: '#ffd4b2' },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 20 },
  paragraph: { fontSize: 30, lineHeight: 40, marginBottom: 20 },
  input: { width: 560, height: 85, fontSize: 28, borderWidth: 2, paddingHorizontal: 16, backgroundColor: '#fff', marginBottom: 20 },
  buttonRow: { flexDirection: 'row', gap: 16 },
  button: { width: 250, height: 90, backgroundColor: '#9a3412', justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontSize: 26, color: '#fff', fontWeight: '700' },
});
