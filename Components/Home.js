import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from '../assets/logo.png'
// first screen

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

export default class Home extends React.Component {
  render() {
  // console.log('this.props', this.props.navigation)
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
          <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('PlayerCard')}
            // onPress={()=> alert('Under Construction')}
            style={styles.button}>
            <Text style={styles.buttonText}>Welcome</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 150,
    // marginBottom: 8,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: "white",
    padding: 16,
    width: 200,
    borderRadius: 24,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  }, 
});