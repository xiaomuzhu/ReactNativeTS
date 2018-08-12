import * as React from 'react'
import { View, Text } from 'react-native'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { State } from '../../Redux/RootReducers'

class LoginScreen extends React.PureComponent<LoginProps, LoginState> {
  render() {
    return (
      <View>
        <Text>哈</Text>
      </View>
    )
  }
}

interface LoginProps {}
interface LoginState {}
// @ts-ignore
const mapDispatchToProps = (dispatch: Dispatch) => ({})
// @ts-ignore
const mapStateToProps = (state: State) => ({})
export default connect(
  mapDispatchToProps,
  mapStateToProps,
)(LoginScreen)
