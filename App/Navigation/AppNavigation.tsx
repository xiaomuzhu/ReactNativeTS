import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'

const AppStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
  },
)

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
)

const RootNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
)

export default RootNavigator
