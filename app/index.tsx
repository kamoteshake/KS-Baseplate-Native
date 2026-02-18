import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222',
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>
        HELLO WORLD
      </Text>
      <Text style={{ fontSize: 16, color: '#cccccc', marginTop: 10 }}>
        If you see this, it works!
      </Text>
    </View>
  );
}
