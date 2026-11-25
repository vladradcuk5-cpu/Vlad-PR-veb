
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Значення лічильника:', count);
  }, [count]);

  return (
    <View style={styles.block}>
      <Text style={styles.heading}>Лічильник</Text>

      <Text style={[
        styles.counter,
        count === 0 && styles.zero,
        count > 0 && count <= 10 && styles.positive,
        count > 10 && styles.warning
      ]}>
        {count}
      </Text>

      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => setCount(prev => prev + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => setCount(prev => Math.max(0, prev - 1))}
        >
          <Text style={styles.buttonText}>−</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.resetButton,
            pressed && styles.buttonPressed
          ]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Скинути</Text>
        </Pressable>
      </View>
    </View>
  );
}

function ProductCard({ title, price, image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Pressable
      style={styles.productCard}
      onLongPress={() => Alert.alert(
        'Інформація про товар',
        `${title}\nЦіна: ${price} грн`
      )}
    >
      <Image
        source={{ uri: image }}
        style={styles.productImage}
      />

      <Text style={styles.productTitle}>{title}</Text>

      <Text style={styles.price}>{price} грн</Text>

      <Pressable
        style={({ pressed }) => [
          styles.favoriteButton,
          isFavorite && styles.favoriteActive,
          pressed && styles.buttonPressed
        ]}
        onPress={() => setIsFavorite(prev => !prev)}
      >
        <Text style={styles.buttonText}>
          {isFavorite ? 'В обраному' : 'В обране'}
        </Text>
      </Pressable>
    </Pressable>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.block}>
      <Text style={styles.heading}>Таймер</Text>

      <Text style={styles.timerText}>{seconds} сек.</Text>

      <Pressable
        style={({ pressed }) => [
          styles.resetButton,
          pressed && styles.buttonPressed
        ]}
        onPress={() => setSeconds(0)}
      >
        <Text style={styles.buttonText}>Скинути таймер</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Практична робота №5</Text>
        <Text style={styles.subtitle}>
          Стан, події та стилізація в React Native
        </Text>

        <Counter />

        <Timer />

        <View style={styles.block}>
          <Text style={styles.heading}>Наші товари</Text>

          <View style={styles.products}>
            <ProductCard
              title="Смартфон Samsung"
              price={12500}
              image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
            />

            <ProductCard
              title="Навушники"
              price={2500}
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
            />

            <ProductCard
              title="Смарт-годинник"
              price={3800}
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9'
  },
  content: {
    padding: 16,
    gap: 20,
    paddingBottom: 30
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginTop: 15
  },
  subtitle: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 5
  },
  block: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 15
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center'
  },
  counter: {
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  zero: {
    color: '#94a3b8'
  },
  positive: {
    color: '#16a34a'
  },
  warning: {
    color: '#dc2626'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#2563eb',
    width: 55,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resetButton: {
    backgroundColor: '#64748b',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonPressed: {
    opacity: 0.5
  },
  timerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2563eb',
    textAlign: 'center'
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12
  },
  productCard: {
    backgroundColor: '#f8fafc',
    width: '47%',
    minWidth: 140,
    flexGrow: 1,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    gap: 10
  },
  productImage: {
    width: '100%',
    height: 110,
    borderRadius: 10
  },
  productTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16a34a'
  },
  favoriteButton: {
    backgroundColor: '#2563eb',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },
  favoriteActive: {
    backgroundColor: '#16a34a'
  }
});
