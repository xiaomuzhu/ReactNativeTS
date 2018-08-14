import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Form, Item, Input, Text, View, Icon, Spinner, Toast } from 'native-base'
import { NavigationActions, NavigationAction, NavigationNavigateAction } from 'react-navigation'
import { State } from '../../Redux/RootReducers'
import LoginStyles from './Styles'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { makeSelectError, makeSelectLoading, makeSelectLoginInfo } from './Selectors'
import { PostLoginActionType, LoginInfoRecord } from './Reducers'
import { LoginInfoParams, loginRequest } from './Actions'

class LoginScreen extends React.PureComponent<LoginProps, LoginState> {
  public static getDerivedStateFromProps(nextProps: LoginProps) {
    if (nextProps.err) {
      Toast.show({
        text: nextProps.err,
        type: 'danger',
      })
    } else if (nextProps.info) {
      Toast.show({
        text: '登陆成功',
        type: 'success',
      })
      nextProps.gotoHome()
    }

    return null
  }

  public state = {
    username: '',
    password: '',
  }

  constructor(props: LoginProps) {
    super(props)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.login = this.login.bind(this)
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
  }

  render() {
    const { isLoading } = this.props
    return (
      <Container style={LoginStyles.container}>
        {isLoading ? <Spinner /> : <Text />}
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
  gotoHome: () => NavigationNavigateAction
}

interface StateProps {
  err: null | string
  isLoading: boolean
  info?: LoginInfoRecord
}

type LoginProps = DispatchProps & StateProps

interface LoginState {
  password: string
  username: string
}

const mapDispatchToProps = (
  dispatch: Dispatch<PostLoginActionType | NavigationAction>,
): DispatchProps => ({
  login: (params: LoginInfoParams) => dispatch(loginRequest(params)),
  gotoHome: () => dispatch(NavigationActions.navigate({ routeName: 'Home' })),
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
