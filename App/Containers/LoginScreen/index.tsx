import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Form, Item, Input, Text, View, Icon } from 'native-base'
import { State } from '../../Redux/RootReducers'
import LoginStyles from './Styles'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { makeSelectError, makeSelectLoading, makeSelectLoginInfo } from './Selectors'
import { PostLoginActionType } from './Reducers'
import { LoginInfoParams, loginRequest } from './Actions'

class LoginScreen extends React.PureComponent<LoginProps, LoginState> {
  public state = {
    username: '',
    password: '',
  }

  constructor(props: LoginProps) {
    super(props)
    this.changeUsername = this.changeUsername.bind(this)
  }

  /**
   * changeUsername
   */
  public changeUsername(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.setState({
      username: e.nativeEvent.text,
    })
  }

  /**
   * changePassword
   */
  public changePassword(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    this.setState({
      password: e.nativeEvent.text,
    })
  }

  /**
   * login
   */
  public login() {
    this.props.login({
      username: this.state.username,
      password: this.state.password,
    })

    this.props
  }

  render() {
    return (
      <Container style={LoginStyles.container}>
        <Form style={LoginStyles.form}>
          <Item>
            <Icon style={{ fontSize: 16 }} active type="SimpleLineIcons" name="user" />
            <Input onChange={this.changeUsername} placeholder="用户名" />
          </Item>
          <Item>
            <Icon active name="lock" />
            <Input secureTextEntry={true} placeholder="密码" />
          </Item>
          <View style={LoginStyles.btnContainer}>
            <Button onPress={this.login}>
              <Text>登录</Text>
            </Button>
          </View>
        </Form>
      </Container>
    )
  }
}

interface DispatchProps {
  login: typeof loginRequest
}

type LoginProps = DispatchProps

interface LoginState {
  password: string
  username: string
}

const mapDispatchToProps = (dispatch: Dispatch<PostLoginActionType>): DispatchProps => ({
  login: (params: LoginInfoParams) => dispatch(loginRequest(params)),
  // gotoHomeScreen: () =>
})

const mapStateToProps = (state: State) => ({
  err: makeSelectError(state),
  isLoading: makeSelectLoading(state),
  info: makeSelectLoginInfo(state),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen)
