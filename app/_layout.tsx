import { Slot } from 'expo-router';
import { View } from 'react-native';

import '../global.css';

export default function RootLayout() {
  return (
    // This View ensures the app takes up the full screen
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Slot />
    </View>
  );
}
