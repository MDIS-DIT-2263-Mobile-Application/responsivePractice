import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage15() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 15</Text>
        <Text style={styles.paragraph}>
          Final broken layout example: fixed 900 width, large text, oversized controls, and no scrolling. This should
          visibly fail on smartphone portrait orientation for responsive refactoring practice.
        </Text>
        <View style={styles.formRow}>
          <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Class code" />
        </View>
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
  page: { flex: 1, backgroundColor: '#e0f2fe' },
  container: { width: 900, backgroundColor: '#7dd3fc', padding: 26, height: 720 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 16 },
  paragraph: { width: 850, fontSize: 31, lineHeight: 43, marginBottom: 20 },
  formRow: { flexDirection: 'row', marginBottom: 16 },
  input: { width: 640, height: 90, borderWidth: 2, backgroundColor: '#fff', fontSize: 30, paddingHorizontal: 12 },
  button: { width: 820, height: 86, backgroundColor: '#0369a1', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 26, fontWeight: '700' },
});
