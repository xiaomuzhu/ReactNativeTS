import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import RootScreen from '../Containers/RootScreen/index'

const RootNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Root: { screen: RootScreen },
  },
  {
    initialRouteName: 'Root',
  },
)

export default RootNavigator
