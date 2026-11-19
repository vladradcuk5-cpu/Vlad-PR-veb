
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Alert
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Мій перший мобільний застосунок
      </Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600'
        }}
        style={styles.image}
      />

      <Text style={styles.name}>
        Студент: Радчук Владислав
      </Text>

      <Text style={styles.group}>
        Група: ІТ-32
      </Text>

      <Text style={styles.description}>
        Це мій перший мобільний застосунок,
        створений за допомогою React Native та Expo.
        Він демонструє основні компоненти,
        стилізацію та інтерактивність.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          Alert.alert(
            'Вітаю!',
            'Ви створили свій перший застосунок!'
          )
        }
      >
        <Text style={styles.buttonText}>
          Привітатися
        </Text>
      </Pressable>

      <Pressable
        style={styles.secondButton}
        onPress={() =>
          Alert.alert(
            'Про застосунок',
            'Цей застосунок створено за допомогою React Native та Expo. Він є моєю першою практичною роботою.'
          )
        }
      >
        <Text style={styles.buttonText}>
          Про застосунок
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173B70',
    textAlign: 'center',
    marginBottom: 25,
  },

  image: {
    width: 220,
    height: 150,
    borderRadius: 20,
    marginBottom: 20,
  },

  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 10,
  },

  group: {
    fontSize: 18,
    color: '#176B87',
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: '#444444',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
    marginBottom: 15,
  },

  secondButton: {
    backgroundColor: '#159D75',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
