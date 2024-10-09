import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-red-700">Hey Bitches</Text>
      <StatusBar style="auto" />
    </View>
  );
}


