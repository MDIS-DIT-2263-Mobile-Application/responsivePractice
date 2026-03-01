import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage2() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 2</Text>
        <View style={styles.topRow}>
          <Text style={styles.paragraph}>
            This layout places large sections side by side with fixed widths and no adaptation, creating clipping and
            unreadable spacing on narrow phone screens.
          </Text>
          <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Type here" />
        </View>
        <TouchableOpacity style={styles.buttonWide}><Text style={styles.buttonText}>Button A</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonWide}><Text style={styles.buttonText}>Button B</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonWide}><Text style={styles.buttonText}>Button C</Text></TouchableOpacity>
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
  page: { flex: 1, backgroundColor: '#ecfeff' },
  container: { width: 900, padding: 28, backgroundColor: '#a5f3fc' },
  title: { fontSize: 44, fontWeight: '800', marginBottom: 18 },
  topRow: { flexDirection: 'row', marginBottom: 18 },
  paragraph: { width: 560, fontSize: 28, lineHeight: 40, marginRight: 22 },
  input: { width: 280, height: 140, fontSize: 32, borderWidth: 2, paddingHorizontal: 12, backgroundColor: '#fff' },
  buttonWide: { width: 700, height: 92, backgroundColor: '#0e7490', justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  buttonText: { fontSize: 28, color: '#fff', fontWeight: '700' },
});
