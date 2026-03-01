import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage4() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 4</Text>
        <View style={styles.card}>
          <Text style={styles.paragraph}>
            This card style is fixed and oversized. Combined with horizontal action buttons, it becomes impossible to
            use on a narrow screen without responsive adjustments.
          </Text>
        </View>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Input text" />
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
  page: { flex: 1, backgroundColor: '#fef9c3' },
  container: { width: 900, backgroundColor: '#fde68a', padding: 30 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 18 },
  card: { width: 840, height: 280, backgroundColor: '#fcd34d', padding: 20, marginBottom: 20 },
  paragraph: { fontSize: 31, lineHeight: 41 },
  input: { width: 700, height: 84, borderWidth: 2, fontSize: 29, paddingHorizontal: 14, backgroundColor: '#fff', marginBottom: 18 },
  buttonRow: { flexDirection: 'row' },
  button: { width: 280, height: 94, backgroundColor: '#a16207', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  buttonText: { fontSize: 26, color: '#fff', fontWeight: '700' },
});
