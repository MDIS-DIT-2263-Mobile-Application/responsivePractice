import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage10() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 10</Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Department" />
        <Text style={styles.paragraph}>
          Deliberately oversized typography and fixed element widths make this layout fragile and non-responsive,
          especially on portrait mobile devices where overflow is expected.
        </Text>
        <View style={styles.buttonsRow}>
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
  page: { flex: 1, backgroundColor: '#fae8ff' },
  container: { width: 900, backgroundColor: '#f5d0fe', padding: 26 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 18 },
  input: { width: 430, height: 88, borderWidth: 2, fontSize: 29, backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 20 },
  paragraph: { width: 860, fontSize: 31, lineHeight: 43, marginBottom: 24 },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { width: 280, height: 90, backgroundColor: '#a21caf', justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontSize: 26, color: '#fff', fontWeight: '700' },
});
