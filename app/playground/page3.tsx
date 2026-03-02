import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { HelloWave } from '../../components/hello-wave';

export default function PlaygroundPage3() {
  const [value, setValue] = useState('');
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  // formatting states
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const colors = ['#000', '#d946ef', '#5b21b6', '#0275d8'];
  const [colorIndex, setColorIndex] = useState(0);

  const handleToggle = (action: string) => {
    switch (action) {
      case 'Bold':
        setBold(!isBold);
        break;
      case 'Italic':
        setItalic(!isItalic);
        break;
      case 'Underline':
        setUnderline(!isUnderline);
        break;
      case 'Uppercase':
        setUppercase(!uppercase);
        break;
      case 'Color':
        // toggle between no color (index 0) and first accent color
        setColorIndex((i) => (i === 0 ? 1 : 0));
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Responsive Playground</Text>
          <HelloWave />
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Page 3</Text>
          <Text style={styles.inputLabel}>Enter your message below</Text>
          <TextInput
            style={[
              styles.input,
              isBold && { fontWeight: '700' },
              isItalic && { fontStyle: 'italic' },
              isUnderline && { textDecorationLine: 'underline' },
              { color: colors[colorIndex] },
              uppercase && { textTransform: 'uppercase' },
            ]}
            value={value}
            onChangeText={setValue}
            placeholder="Type something awesome..."
            placeholderTextColor="#888"
            multiline
          />
          {value ? (
            <Text
              style={[
                styles.preview,
                isBold && { fontWeight: '700' },
                isItalic && { fontStyle: 'italic' },
                isUnderline && { textDecorationLine: 'underline' },
                { color: colors[colorIndex] },
                uppercase && { textTransform: 'uppercase' },
              ]}
            >
              {value}
            </Text>
          ) : null}
          <Text style={styles.paragraph}>
            This layout now adapts to screen size instead of using fixed widths. The
            controls stack in portrait and flow horizontally in landscape. Overflow
            is handled by the ScrollView so nothing is clipped on small devices.
          </Text>
        </View>

        <View
          style={[
            styles.buttonSection,
            !isPortrait && styles.buttonSectionLandscape,
          ]}
        >
          {['Bold', 'Italic', 'Underline', 'Uppercase', 'Color'].map((act) => (
            <TouchableOpacity
              key={act}
              onPress={() => handleToggle(act)}
              style={[
                styles.button,
                (
                  (act === 'Bold' && isBold) ||
                  (act === 'Italic' && isItalic) ||
                  (act === 'Underline' && isUnderline) ||
                  (act === 'Uppercase' && uppercase) ||
                  (act === 'Color' && colorIndex !== 0)
                ) && styles.buttonSelected,
              ]}
            >
              <Text style={styles.buttonText}>{act}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#ede9fe',
  },
  page: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#c4b5fd',
  },
  header: {
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    // shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation for Android
    elevation: 3,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 16,
    textAlign: 'center',
    maxWidth: 600,
  },
  input: {
    width: '100%',
    maxWidth: 600,
    minHeight: 80,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    // input shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
    maxWidth: 600,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    alignSelf: 'flex-start',
  },
  preview: {
    fontSize: 16,
    color: '#444',
    marginTop: 8,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  buttonSection: {
    width: '100%',
    maxWidth: 600,
    gap: 12,
  },
  buttonSectionLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    minHeight: 48,
    backgroundColor: '#5b21b6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonSelected: {
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
