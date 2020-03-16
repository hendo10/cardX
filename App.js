import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView, RefreshControl } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LineChart } from 'react-native-chart-kit';
import { SearchBar } from 'react-native-elements';
import ApiKeys from './Constants/apiKeys';
import * as firebase from 'firebase'
import logo from './assets/logo2.png';
import kobeC from './assets/kobeCartoon1.jpg';
import hardenC from './assets/hardenCartoon.jpg';
import curryC from './assets/curryCartoon.jpg';
// import Zion from './assets/ZionSilverRC.jpg';
// import Ja from './assets/JaSilverRC.jpg'
// import RJ from './assets/RJSilverRC.jpg'

class Home extends React.Component {
  render() {
  // console.log('this.props', this.props.navigation)
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity
          onPress={()=> this.props.navigation.push('Players')}
          style={styles.button}>
            <Text style={styles.buttonText}>welcome</Text>
        </TouchableOpacity>
        <View style={styles.playerCartoonContainer}>
          <Image source={curryC} style={styles.playerCartoon} />
          <Image source={kobeC} style={styles.playerCartoon} />
          <Image source={hardenC} style={styles.playerCartoon} />
          {/* <Image source={dirkC} style={styles.playerCartoon} /> */}
        </View>
      </View>
    )
  }
}

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.setRefresh = this.setRefresh.bind(this)
  }

  setRefresh() {
    this.setState({
      refreshing: false
    })
  }

  _onRefresh() {
    this.setState({
      refreshing: !this.state.refreshing
    })
    this.setRefresh()
  }

  render() {
    // const { search } = this.state;
    const labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']

    const zionLine = {
      labels: labels,
      datasets: [
        {
        data: [
          Number(Math.random()* 250),
          Number(Math.random()* 250),
          Number(Math.random()* 250),
          Number(Math.random()* 250),
          Number(Math.random()* 250),
          Number(Math.random()* 250),
        ],
        strokeWidth: 6, // optional
        },
      ],
    }

    const zionYTD = ((zionLine.datasets[0].data[5] -
      zionLine.datasets[0].data[4]) / 
      zionLine.datasets[0].data[4] * 100).toFixed(1)

    const zion6M = ((zionLine.datasets[0].data[5] -
      zionLine.datasets[0].data[0]) / 
      zionLine.datasets[0].data[0] * 100).toFixed(1)

    const jaLine = {
      labels: labels,
      datasets: [
        {
        data: [
          Number(Math.random()* 200),
          Number(Math.random()* 200),
          Number(Math.random()* 200),
          Number(Math.random()* 200),
          Number(Math.random()* 200),
          Number(Math.random()* 200),
        ],
        strokeWidth: 6, // optional
        },
      ],
    }

    const jaYTD = ((jaLine.datasets[0].data[5] - 
      jaLine.datasets[0].data[4]) / 
      jaLine.datasets[0].data[4] * 100).toFixed(1)

    const ja6M = ((jaLine.datasets[0].data[5] - 
      jaLine.datasets[0].data[0]) / 
      jaLine.datasets[0].data[0] * 100).toFixed(1)

    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} />
        }
      >
        <SearchBar
          placeholder="Type Here..."
          // onChangeText={this.updateSearch}
          // value={search}
        />
        <Text style={styles.playerName}>Zion Williamson</Text>
        <Text style={styles.metrics}>YTD: {zionYTD}%, 6M: {zion6M}%</Text>
        {zionYTD > 0 ? <Text style={styles.buy}>BUY</Text> : <Text style={styles.sell}>SELL</Text>}
        <Text style={styles.chartTitle}>Twitter Mentions</Text>
        <LineChart
          data={zionLine}
          width={Dimensions.get('window').width * .95} // from react-native
          height={200}
          yAxisSuffix={'k'}
          chartConfig={{
            backgroundColor: '#6767ff',
            backgroundGradientFrom: '#6767ff',
            backgroundGradientTo: '#54E1A5',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 8
            },
            propsForDots: {
              r: "6",
              strokeWidth: "3",
              stroke: "#6767ff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 20,
            padding: 10
          }}
        />
      
        <Text style={styles.playerName}>Ja Morant</Text>
        <Text style={styles.metrics}>YTD: {jaYTD}%, 6M: {ja6M}%</Text>
        {jaYTD > 0 ? <Text style={styles.buy}>BUY</Text> : <Text style={styles.sell}>SELL</Text>}
        <Text style={styles.chartTitle}>Twitter Mentions</Text>
        <LineChart
          data={jaLine}
          width={Dimensions.get('window').width * .95} // from react-native
          height={200}
          yAxisSuffix={'k'}
          chartConfig={{
            backgroundColor: '#6767ff',
            backgroundGradientFrom: '#6767ff',
            backgroundGradientTo: '#54E1A5',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 2,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "3",
              stroke: "#6767ff"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 20,
            padding: 10,
          }}
        />
        {/* <Image source={Ja} style={{ width: 200, height: 350, resizeMode: 'contain' }} />
        <Image source={RJ} style={{ width: 200, height: 350, resizeMode: 'contain' }} /> */}
      </ScrollView>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    Players: PlayerCard,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width,
    height: 200,
    // marginBottom: 8,
    resizeMode: 'contain'
  },
  playerCartoonContainer: {
    flex: 3,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: "stretch",
  },
  playerCartoon: {
    width: Dimensions.get('window').width/3,
    height: 175,
    padding: 0,
    resizeMode: 'contain'
  },
  button: {
    padding: 10,
    width: 200,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    justifyContent: "center",
    color: "black",
  }, 
  playerName: {
    color: "#16142f",
    fontSize: 20,
    lineHeight: 26,
    padding: 5,
    fontWeight: "bold"
  },
  chartTitle: {
    color: "#00acee",
    fontSize: 20,
    lineHeight: 26,
    padding: 5,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  metrics: {
    color: "#16142f",
    fontSize: 16,
    lineHeight: 20,
    padding: 5,
  },
  buy: {
    color: "#026440",
    fontSize: 16,
    lineHeight: 20,
    padding: 5,
    fontWeight: "bold"
  },
  sell: {
    color: "#720000",
    fontSize: 16,
    lineHeight: 20,
    padding: 5,
    fontWeight: "bold"
  },
  playerContainer: {
    backgroundColor: "#f1f1f1",
    marginTop: 72,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: "100%"
  },
  playerCard: {
    width: 200/4,
    height: 350/4,
    resizeMode: 'contain'
  },
});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}