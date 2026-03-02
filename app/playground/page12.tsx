import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function PlaygroundPage12() {
  const [value, setValue] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  // adapt some measurements based on current window size
  const bigBlockHeight = Math.min(240, width * 0.3);

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.container, { maxWidth: Math.min(width - 32, 900) }]}>      
          <Text style={styles.title}>Responsive Playground - Page 12</Text>
          <Text style={styles.paragraph}>
            This variant stacks huge blocks with fixed heights and no scrolling, ensuring that lower controls fall beyond
            the viewport on smaller phones.
          </Text>
          <View style={[styles.bigBlock, { height: bigBlockHeight }]} />
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder="Role"
          />
          <View
            style={[
              styles.rowButtons,
              isLandscape ? styles.rowLandscape : styles.rowPortrait,
            ]}
          >
            <TouchableOpacity style={[styles.button, isLandscape && styles.buttonLandscape]}>
              <Text style={styles.buttonText}>Button A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, isLandscape && styles.buttonLandscape]}>
              <Text style={styles.buttonText}>Button B</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, isLandscape && styles.buttonLandscape]}>
              <Text style={styles.buttonText}>Button C</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fef3c7' },
  scrollContainer: { flexGrow: 1, padding: 16 },
  container: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#fde68a',
    padding: 22,
  },
  title: { fontSize: 32, fontWeight: '800', marginBottom: 12 },
  paragraph: { fontSize: 20, lineHeight: 28, marginBottom: 14 },
  bigBlock: { width: '100%', backgroundColor: '#f59e0b', marginBottom: 16 },
  input: {
    width: '100%',
    maxWidth: 600,
    height: 88,
    borderWidth: 2,
    fontSize: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  rowButtons: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  rowPortrait: {
    flexDirection: 'column',
  },
  rowLandscape: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    minWidth: 100,
    height: 86,
    backgroundColor: '#b45309',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonLandscape: {
    marginRight: 12,
    marginBottom: 0,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});