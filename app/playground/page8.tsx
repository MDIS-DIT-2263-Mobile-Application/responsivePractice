import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlaygroundPage8() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 8</Text>
        <Text style={styles.paragraph}>
          The form and buttons are intentionally pushed down using large margins and fixed widths to trigger overflow
          and unusable interaction zones on narrow devices.
        </Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Address" />
        <View style={styles.buttonsWrap}>
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
  page: { flex: 1, backgroundColor: '#f3e8ff' },
  container: { width: 900, backgroundColor: '#d8b4fe', padding: 24, paddingTop: 38 },
  title: { fontSize: 42, fontWeight: '800', marginBottom: 18 },
  paragraph: { fontSize: 30, lineHeight: 42, width: 850 },
  input: { width: 740, height: 88, marginTop: 36, borderWidth: 2, fontSize: 30, backgroundColor: '#fff', paddingHorizontal: 14 },
  buttonsWrap: { marginTop: 120, flexDirection: 'row' },
  button: { width: 270, height: 86, backgroundColor: '#7e22ce', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  buttonText: { color: '#fff', fontSize: 26, fontWeight: '700' },
});
