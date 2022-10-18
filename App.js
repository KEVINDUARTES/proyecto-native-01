import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Svg from 'react-native-svg';
import ButtonGradient from './ButtonGradient.js';
export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}> </View>

      <View style={styles.container}>
        <Text style={styles.titulo}>Harnon</Text>
        <Text style={styles.subTitle}>Sign In to your account</Text>
        <TextInput placeholder='jhon@email.com' style={styles.textInput} />
        <TextInput placeholder='password' style={styles.textInput} />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <ButtonGradient />
        <StatusBar style='auto' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1 ',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    color: 'blue',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
});
