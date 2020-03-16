import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Zion from '../assets/ZionSilverRC.jpg'
// import Ja from '../assets/JaSilverRC.jpg'
// import RJ from '../assets/RJSilverRC.jpg'

export default class PlayerCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Zion} style={styles.playerCard} />
        {/* <Image source={Ja} style={{ width: 200, height: 350, resizeMode: 'contain' }} />
        <Image source={RJ} style={{ width: 200, height: 350, resizeMode: 'contain' }} /> */}
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
  playerCard: {
    width: 200,
    height: 350,
    resizeMode: 'contain'
  },
});