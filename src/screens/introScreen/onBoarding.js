import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image  } from 'react-native';

export default function OnBoarding() {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/onBoarding-img1.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
