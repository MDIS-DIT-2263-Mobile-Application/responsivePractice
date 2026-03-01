import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage5() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 5</Text>
        <Text style={styles.paragraph}>
          This page intentionally adds excessive top and left spacing with fixed dimensions, producing severe clipping
          and inaccessible controls on mobile portrait.
        </Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Name" />
        <TouchableOpacity style={styles.buttonA}><Text style={styles.buttonText}>Button A</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonB}><Text style={styles.buttonText}>Button B</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonC}><Text style={styles.buttonText}>Button C</Text></TouchableOpacity>
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
  container: { width: 900, backgroundColor: '#fecaca', paddingTop: 70, paddingLeft: 48, paddingRight: 24 },
  title: { fontSize: 43, fontWeight: '800', marginBottom: 16 },
  paragraph: { fontSize: 30, lineHeight: 44, marginBottom: 24 },
  input: { width: 520, height: 92, borderWidth: 2, fontSize: 30, paddingHorizontal: 16, backgroundColor: '#fff', marginBottom: 20 },
  buttonA: { width: 360, height: 88, backgroundColor: '#dc2626', justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  buttonB: { width: 410, height: 88, backgroundColor: '#b91c1c', justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  buttonC: { width: 460, height: 88, backgroundColor: '#991b1b', justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontSize: 27, color: '#fff', fontWeight: '700' },
});
