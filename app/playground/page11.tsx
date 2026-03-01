import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage11() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 11</Text>
        <View style={styles.leftColumn}>
          <Text style={styles.paragraph}>
            This page uses a large fixed left column and pushes interactive elements far to the right, creating severe
            clipping on small portrait screens.
          </Text>
          <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Project" />
        </View>
        <View style={styles.rightButtons}>
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
  container: { width: 900, backgroundColor: '#ddd6fe', padding: 24, height: 700 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 16 },
  leftColumn: { width: 560 },
  paragraph: { fontSize: 30, lineHeight: 42, marginBottom: 20 },
  input: { width: 540, height: 86, borderWidth: 2, fontSize: 30, backgroundColor: '#fff', paddingHorizontal: 12 },
  rightButtons: { position: 'absolute', left: 610, top: 170 },
  button: { width: 260, height: 92, backgroundColor: '#6d28d9', justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  buttonText: { color: '#fff', fontSize: 26, fontWeight: '700' },
});
