import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Responsive Design Playground' }} />
      <Stack.Screen name="responsive-demo" options={{ title: 'Responsive Demo' }} />
      <Stack.Screen name="unresponsive-demo" options={{ title: 'Unresponsive Demo' }} />
      <Stack.Screen name="playground/page1" options={{ title: 'Page 1' }} />
      <Stack.Screen name="playground/page2" options={{ title: 'Page 2' }} />
      <Stack.Screen name="playground/page3" options={{ title: 'Page 3' }} />
      <Stack.Screen name="playground/page4" options={{ title: 'Page 4' }} />
      <Stack.Screen name="playground/page5" options={{ title: 'Page 5' }} />
      <Stack.Screen name="playground/page6" options={{ title: 'Page 6' }} />
      <Stack.Screen name="playground/page7" options={{ title: 'Page 7' }} />
      <Stack.Screen name="playground/page8" options={{ title: 'Page 8' }} />
      <Stack.Screen name="playground/page9" options={{ title: 'Page 9' }} />
      <Stack.Screen name="playground/page10" options={{ title: 'Page 10' }} />
      <Stack.Screen name="playground/page11" options={{ title: 'Page 11' }} />
      <Stack.Screen name="playground/page12" options={{ title: 'Page 12' }} />
      <Stack.Screen name="playground/page13" options={{ title: 'Page 13' }} />
      <Stack.Screen name="playground/page14" options={{ title: 'Page 14' }} />
      <Stack.Screen name="playground/page15" options={{ title: 'Page 15' }} />
    </Stack>
  );
}
