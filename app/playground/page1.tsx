import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function PlaygroundPage1({ navigation }) {
  const [value, setValue] = useState('');

  // Submit -> 弹框
  const handleSubmit = () => {
    Alert.alert('Thank you for your answers');
  };

  // Cancel -> 清空输入框
  const handleCancel = () => {
    setValue('');
  };

  // Draft -> 保留输入框内容，返回主界面
  const handleDraft = () => {
    if (navigation) {
      navigation.goBack();
    } else {
      Alert.alert('Draft saved, returning to main screen');
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={[styles.title, { fontSize: width * 0.06 }]}>
            Share Your Thoughts
          </Text>
          <Text style={[styles.paragraph, { fontSize: width * 0.04, lineHeight: width * 0.06 }]}>
            Do you feel happy in your life?
          </Text>

          <TextInput
            style={[styles.input, { height: width * 0.12, fontSize: width * 0.04 }]}
            value={value}
            onChangeText={setValue}
            placeholder="Enter Your Answers"
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={[styles.buttonText, { fontSize: width * 0.04 }]}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCancel}>
              <Text style={[styles.buttonText, { fontSize: width * 0.04 }]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDraft}>
              <Text style={[styles.buttonText, { fontSize: width * 0.04 }]}>Draft</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffe7d6',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    width: '95%',
    maxWidth: 450,
    padding: 16,
    backgroundColor: '#ffd4b2',
    borderRadius: 12,
  },
  title: {
    fontWeight: '800',
    marginBottom: 12,
  },
  paragraph: {
    marginBottom: 12,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 45,
    backgroundColor: '#9a3412',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});