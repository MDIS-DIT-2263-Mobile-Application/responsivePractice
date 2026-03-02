import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function PlaygroundPage10() {
  const [value, setValue] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const containerMaxWidth = Math.min(900, width - 24);
  const titleSize = isLandscape ? 42 : Math.max(20, Math.round(width / 18));
  const paragraphSize = isLandscape ? 31 : Math.max(14, Math.round(width / 30));
  const inputHeight = isLandscape ? 88 : 48;
  const buttonHeight = isLandscape ? 90 : 56;

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={[styles.container, { maxWidth: containerMaxWidth }]}> 
        <Text style={[styles.title, { fontSize: titleSize }]}>Responsive Playground - Page 10</Text>
        <TextInput
          style={[styles.input, { height: inputHeight }]}
          value={value}
          onChangeText={setValue}
          placeholder="Department"
        />
        <Text style={[styles.paragraph, { fontSize: paragraphSize, lineHeight: Math.round(paragraphSize * 1.4) }]}> 
          Deliberately oversized typography and fixed element widths make this layout fragile and non-responsive,
          especially on portrait mobile devices where overflow is expected.
        </Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={[styles.button, { height: buttonHeight }]}>
            <Text style={styles.buttonText}>Button A</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { height: buttonHeight }]}>
            <Text style={styles.buttonText}>Button B</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { height: buttonHeight }]}>
            <Text style={styles.buttonText}>Button C</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fae8ff' },
  container: { alignSelf: 'center', backgroundColor: '#f5d0fe', padding: 26, flexGrow: 1 },
  title: { fontWeight: '800', marginBottom: 18 },
  input: { width: '100%', borderWidth: 2, fontSize: 18, backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 20 },
  paragraph: { fontSize: 16, marginBottom: 24 },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' },
  button: { flex: 1, minWidth: 120, marginHorizontal: 6, marginBottom: 12, backgroundColor: '#a21caf', justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontSize: 18, color: '#fff', fontWeight: '700' },
});
