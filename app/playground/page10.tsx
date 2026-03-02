import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function PlaygroundPage10() {
  const [value, setValue] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const containerMaxWidth = Math.min(900, width - 24);
  const titleSize = isLandscape ? 42 : Math.max(20, Math.round(width / 18));
  const paragraphSize = isLandscape ? 31 : Math.max(14, Math.round(width / 30));
  const inputHeight = isLandscape ? 72 : 48;
  const buttonHeight = isLandscape ? 64 : 44;

  return (
    <View style={styles.page}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.container,
          { maxWidth: containerMaxWidth, paddingHorizontal: isLandscape ? 32 : 16, paddingBottom: 40, flexGrow: 1, minHeight: height },
        ]}
      >
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={[styles.title, { fontSize: titleSize, color: '#2c0b5b' }]}>Responsive Playground</Text>
            <View style={styles.accent} />
          </View>
          <Text style={[styles.subtitle, { textAlign: isLandscape ? 'left' : 'center' }]}>A compact, accessible layout that adapts to screen orientation</Text>

          <View style={styles.searchWrapper}>
            <Text style={[styles.searchIcon, { top: Math.max(8, Math.round(inputHeight / 2) - 10) }]}>🔍</Text>
            <TextInput
              style={[styles.input, { height: inputHeight, width: isLandscape ? '100%' : '96%', zIndex: 1 }]}
              value={value}
              onChangeText={setValue}
              placeholder="Search department"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <Text style={[styles.paragraph, { fontSize: paragraphSize, lineHeight: Math.round(paragraphSize * 1.4), color: '#374151' }]}> 
            Deliberately oversized typography and fixed element widths make this layout fragile and non-responsive,
            especially on portrait mobile devices where overflow is expected.
          </Text>

          <View style={[styles.buttonsRow, isLandscape ? styles.buttonsRowLandscape : styles.buttonsRowPortrait]}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.button, styles.primaryButton, !isLandscape && styles.buttonPortrait, { height: buttonHeight }]}
              >
              <Text style={[styles.buttonText, { color: '#fff', fontWeight: '800' }]}>Explore</Text>
            </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[styles.button, styles.secondaryButton, !isLandscape && styles.buttonPortrait, { height: buttonHeight }]}
              >
                <Text style={[styles.buttonText, { color: '#5b21b6', fontWeight: '700' }]}>Learn More</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fae8ff' },
  container: { alignSelf: 'center', backgroundColor: '#f5d0fe', padding: 26 },
  title: { fontWeight: '900', marginBottom: 6, letterSpacing: 0.2 },
  subtitle: { color: '#6b7280', marginBottom: 12, fontSize: 14 },
  card: { backgroundColor: '#ffffff', borderRadius: 18, padding: 20, width: '100%', shadowColor: '#0f172a', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.06, shadowRadius: 18, elevation: 6 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 },
  accent: { flex: 1, height: 6, marginLeft: 12, backgroundColor: 'rgba(124,58,237,0.12)', borderRadius: 6 },
  searchWrapper: { width: '100%', alignItems: 'stretch', marginBottom: 16, position: 'relative', paddingHorizontal: 0 },
  searchIcon: { position: 'absolute', left: 16, top: 14, fontSize: 18, color: '#9ca3af', zIndex: 3, elevation: 8, pointerEvents: 'none' },
  input: { width: '100%', borderWidth: 1.5, fontSize: 16, backgroundColor: '#fbfbff', paddingLeft: 48, paddingHorizontal: 16, marginBottom: 20, borderRadius: 12, borderColor: '#ddd6fe', paddingVertical: 10, shadowColor: '#0f172a', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.06, shadowRadius: 12, elevation: 4 },
  paragraph: { fontSize: 16, marginBottom: 20 },
  buttonsRow: { flexWrap: 'wrap' },
  buttonsRowLandscape: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  buttonsRowPortrait: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingVertical: 8, width: '100%' },
  button: { flex: 0, minWidth: 110, maxWidth: 260, marginHorizontal: 8, marginBottom: 12, justifyContent: 'center', alignItems: 'center', borderRadius: 12, paddingHorizontal: 14 },
  buttonPortrait: { width: '96%', marginHorizontal: 0, alignSelf: 'center' },
  primaryButton: { backgroundColor: '#7c3aed', shadowColor: '#7c3aed', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 18, elevation: 6 },
  secondaryButton: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e6e6f8' },
  buttonText: { fontSize: 16, color: '#fff', fontWeight: '700', letterSpacing: 0.4 },
});