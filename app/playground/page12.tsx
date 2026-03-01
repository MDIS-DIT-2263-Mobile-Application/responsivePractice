import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage12() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 12</Text>
        <Text style={styles.paragraph}>
          This variant stacks huge blocks with fixed heights and no scrolling, ensuring that lower controls fall beyond
          the viewport on smaller phones.
        </Text>
        <View style={styles.bigBlock} />
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Role" />
        <View style={styles.rowButtons}>
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
  page: { flex: 1, backgroundColor: '#fef3c7' },
  container: { width: 900, backgroundColor: '#fde68a', padding: 22, height: 760 },
  title: { fontSize: 43, fontWeight: '800', marginBottom: 12 },
  paragraph: { fontSize: 30, lineHeight: 42, marginBottom: 14 },
  bigBlock: { width: 850, height: 240, backgroundColor: '#f59e0b', marginBottom: 16 },
  input: { width: 600, height: 88, borderWidth: 2, fontSize: 29, backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 14 },
  rowButtons: { flexDirection: 'row' },
  button: { width: 270, height: 86, backgroundColor: '#b45309', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  buttonText: { color: '#fff', fontSize: 26, fontWeight: '700' },
});
