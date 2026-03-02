import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

export default function PlaygroundPage2() {
  const [value, setValue] = useState('');
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Responsive Playground - Page 2</Text>

        <View
          style={[
            styles.topSection,
            { flexDirection: isLandscape ? 'row' : 'column' },
          ]}
        >
          <Text style={styles.paragraph}>
            This layout now adapts based on screen size. In portrait mode it
            stacks vertically. In landscape mode it displays side by side.
          </Text>

          <TextInput
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder="Type here"
            multiline
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button B</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button C</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: '#ecfeff',
    padding: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#a5f3fc',
    padding: 20,
    borderRadius: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 16,
  },

  topSection: {
    gap: 16,
    marginBottom: 20,
  },

  paragraph: {
    flex: 1,
    fontSize: 18,
    lineHeight: 26,
  },

  input: {
    flex: 1,
    minHeight: 100,
    fontSize: 18,
    borderWidth: 2,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#0e7490',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
});