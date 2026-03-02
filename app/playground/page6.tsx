import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';

export default function PlaygroundPage6() {
  const [value, setValue] = useState('');
  const { width, height } = useWindowDimensions();
  
  // Detect orientation: portrait when height >= width
  const isPortrait = height >= width;

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 6</Text>
        <View style={styles.split}>
          <View style={styles.textSection}>
            <Text style={styles.paragraph}>
              Fixed split view with oversized content is intentionally non-adaptive and will overflow quickly on
              smartphones in portrait orientation.
            </Text>
          </View>
          <View style={styles.formSection}>
            <TextInput 
              style={styles.input} 
              value={value} 
              onChangeText={setValue} 
              placeholder="Email" 
            />
            <View style={[styles.buttonRow, { flexDirection: isPortrait ? 'column' : 'row' }]}>
              <TouchableOpacity style={[styles.button, isPortrait && { width: '100%' }, !isPortrait && { flex: 1 }]}>
                <Text style={styles.buttonText}>Button A</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, isPortrait && { width: '100%' }, !isPortrait && { flex: 1 }]}>
                <Text style={styles.buttonText}>Button B</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, isPortrait && { width: '100%' }, !isPortrait && { flex: 1 }]}>
                <Text style={styles.buttonText}>Button C</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { 
    flex: 1, 
    backgroundColor: '#dcfce7' 
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: { 
    flex: 1,
    backgroundColor: '#86efac', 
    padding: 20,
  },
  title: { 
    fontSize: 28, 
    fontWeight: '800', 
    marginBottom: 20,
    color: '#1b4332',
  },
  split: {
    flexDirection: 'column',
    gap: 20,
  },
  textSection: {
    justifyContent: 'flex-start',
  },
  paragraph: { 
    fontSize: 17, 
    lineHeight: 26,
    color: '#2d3e2d',
  },
  formSection: {
    gap: 12,
    width: '100%',
  },
  buttonRow: {
    gap: 10,
  },
  input: { 
    height: 48, 
    borderWidth: 2, 
    borderColor: '#2d6a4f',
    fontSize: 16, 
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: { 
    height: 48, 
    backgroundColor: '#15803d', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '700' 
  },
});
