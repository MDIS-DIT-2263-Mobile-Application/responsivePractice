import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

type MenuItem = {
  label: string;
  route: string;
};

const menuItems: MenuItem[] = [
  { label: 'Responsive Demo', route: '/responsive-demo' },
  { label: 'Unresponsive Demo', route: '/unresponsive-demo' },
  ...Array.from({ length: 15 }, (_, index) => ({
    label: `Playground Page ${index + 1}`,
    route: `/playground/page${index + 1}`,
  })),
];

export default function HomeScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Responsive Design Playground</Text>
      <Text style={styles.subtitle}>{isPortrait ? 'Portrait Mode' : 'Landscape Mode'}</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.menuContainer, !isPortrait && styles.menuContainerLandscape]}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.route}
              style={[styles.menuButton, !isPortrait && styles.menuButtonLandscape]}
              onPress={() => router.push(item.route as never)}
            >
              <Text style={styles.menuButtonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  menuContainer: {
    width: '100%',
  },
  menuContainerLandscape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuButton: {
    backgroundColor: '#1f6feb',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: '100%',
  },
  menuButtonLandscape: {
    width: '48.5%',
  },
  menuButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
