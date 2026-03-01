import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage14() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 14</Text>
        <View style={styles.headerBar}>
          <Text style={styles.headerText}>Fixed Desktop Header</Text>
        </View>
        <Text style={styles.paragraph}>
          The large fixed-width header plus oversized content and controls intentionally create horizontal and vertical
          overflow issues for students to fix.
        </Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Section" />
        <View style={styles.buttonGroup}>
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
  page: { flex: 1, backgroundColor: '#d1fae5' },
  container: { width: 900, backgroundColor: '#6ee7b7', padding: 24 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 14 },
  headerBar: { width: 860, height: 120, backgroundColor: '#34d399', justifyContent: 'center', paddingHorizontal: 20, marginBottom: 18 },
  headerText: { fontSize: 38, fontWeight: '700' },
  paragraph: { width: 820, fontSize: 30, lineHeight: 42, marginBottom: 18 },
  input: { width: 760, height: 88, borderWidth: 2, fontSize: 30, backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 16 },
  buttonGroup: { flexDirection: 'row' },
  button: { width: 260, height: 88, backgroundColor: '#047857', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  buttonText: { color: '#fff', fontSize: 26, fontWeight: '700' },
});
