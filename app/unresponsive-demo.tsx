import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function UnresponsiveDemoScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.fixedContainer}>
        <Text style={styles.title}>Unresponsive Demo (Bad Layout)</Text>
        <Text style={styles.longText}>
          This page intentionally uses fixed dimensions and oversized typography. On small portrait phones this
          content should overflow, clip, and become unusable. The text is intentionally very long and repetitive to
          force layout breakage without any adaptive behavior or scroll handling in place for demonstration purposes.
        </Text>
        <TextInput style={styles.input} placeholder="Fixed input" />
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Primary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Secondary</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.buttonText}>Outside Screen Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff4f4',
    padding: 10,
  },
  fixedContainer: {
    width: 800,
    height: 650,
    backgroundColor: '#ffd9d9',
    padding: 24,
  },
  title: {
    fontSize: 52,
    fontWeight: '800',
    marginBottom: 24,
  },
  longText: {
    fontSize: 34,
    lineHeight: 44,
    marginBottom: 20,
  },
  input: {
    width: 500,
    height: 90,
    borderWidth: 3,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    fontSize: 30,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  buttonPrimary: {
    width: 420,
    height: 100,
    backgroundColor: '#b91c1c',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  buttonSecondary: {
    width: 460,
    height: 100,
    backgroundColor: '#7f1d1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    width: 520,
    height: 110,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 380,
  },
  buttonText: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '700',
  },
});
