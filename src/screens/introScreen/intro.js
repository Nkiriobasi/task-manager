import { StyleSheet, View, Image  } from 'react-native';

export default function Intro() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/intro-img.png')} />
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
