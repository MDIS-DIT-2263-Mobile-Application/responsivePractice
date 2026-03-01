import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage6() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 6</Text>
        <View style={styles.split}>
          <Text style={styles.paragraph}>
            Fixed split view with oversized content is intentionally non-adaptive and will overflow quickly on
            smartphones in portrait orientation.
          </Text>
          <View style={styles.formPanel}>
            <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Email" />
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button A</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button B</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button C</Text></TouchableOpacity>
          </View>
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
  page: { flex: 1, backgroundColor: '#dcfce7' },
  container: { width: 900, backgroundColor: '#86efac', padding: 28 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 18 },
  split: { flexDirection: 'row' },
  paragraph: { width: 470, fontSize: 30, lineHeight: 42, marginRight: 18 },
  formPanel: { width: 350 },
  input: { width: 340, height: 88, borderWidth: 2, fontSize: 29, paddingHorizontal: 14, backgroundColor: '#fff', marginBottom: 14 },
  button: { width: 340, height: 84, backgroundColor: '#15803d', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 26, fontWeight: '700' },
});
