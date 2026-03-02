import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

export default function PlaygroundPage9() {
  const [value, setValue] = useState('');

  // The ScrollView makes the page scrollable if content overflows vertically.
  // The container uses percentage width and maxWidth for responsiveness.
  // All controls and text are centered and use flexible sizing.
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Responsive Playground - Page 9</Text>
          <View style={styles.topBox}>
            <Text style={styles.paragraph}>
              {/* This paragraph explains the original issue with fixed widths. Now, the layout is responsive! */}
              This fixed-width top block and oversized controls are intentionally built for tablet-only dimensions,
              causing text and controls to run off-screen on phones.
            </Text>
          </View>
          <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="City" />
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button A</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button B</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Button C</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#cffafe' },
  // Added scrollContent for ScrollView alignment and spacing
  scrollContent: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 24 },
  // container now uses percentage width and maxWidth for responsiveness
  container: {
    width: '90%', // Changed from fixed 900 to percentage
    maxWidth: 500, // Prevents container from being too wide on tablets
    backgroundColor: '#67e8f9',
    padding: 22,
    borderRadius: 16, // Added rounded corners for modern look
    alignItems: 'center',
  },
  // Reduced font size for better fit on mobile
  title: { fontSize: 32, fontWeight: '800', marginBottom: 14, textAlign: 'center' },
  // topBox is now fully responsive
  topBox: {
    width: '100%', // Changed from fixed 860 to full width
    minHeight: 120, // Uses minHeight instead of fixed height
    backgroundColor: '#22d3ee',
    padding: 18,
    marginBottom: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Reduced font size and centered text
  paragraph: { fontSize: 18, lineHeight: 26, textAlign: 'center' },
  // input is now responsive
  input: {
    width: '100%', // Changed from fixed 680 to full width
    height: 48, // Reduced height for mobile
    borderWidth: 2,
    fontSize: 18,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
  // button is now responsive
  button: {
    width: '100%', // Changed from fixed 760 to full width
    height: 48, // Reduced height for mobile
    backgroundColor: '#0e7490',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 8,
  },
  // Reduced font size for button text
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});
