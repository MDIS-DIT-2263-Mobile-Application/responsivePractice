import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function ResponsiveDemoScreen() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Responsive Demo</Text>
          <Text style={styles.headerSubtitle}>{isPortrait ? 'Portrait Layout' : 'Landscape Layout'}</Text>
        </View>

        <View style={[styles.contentSection, !isPortrait && styles.contentSectionLandscape]}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Content A</Text>
            <Text style={styles.cardText}>
              This block adjusts naturally using flexbox and wraps safely inside the viewport.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Content B</Text>
            <Text style={styles.cardText}>
              In portrait these cards stack vertically; in landscape they align horizontally.
            </Text>
          </View>
        </View>

        <View style={[styles.buttonSection, !isPortrait && styles.buttonSectionLandscape]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Action 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Action 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Action 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#eef3f7',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  headerSubtitle: {
    marginTop: 6,
    fontSize: 15,
  },
  contentSection: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 12,
  },
  contentSectionLandscape: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
  buttonSection: {
    gap: 10,
  },
  buttonSectionLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1f6feb',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 1,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
});
