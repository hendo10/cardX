import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './Home'
import PlayerCard from './Players'

const RootStack = createStackNavigator({
    Home: Home,
    PlayerCard: PlayerCard,
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(RootStack)