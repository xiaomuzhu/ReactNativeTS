import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationActions, NavigationAction, NavigationNavigateAction } from 'react-navigation'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

class RootScreen extends React.PureComponent<DispatchProps> {
  render() {
    return (
      <View>
        <Button title="列表" onPress={this.props.gotoHome} />
        <Text>我是你爹</Text>
      </View>
    )
  }
}

export interface DispatchProps {
  gotoHome: () => NavigationNavigateAction
}

const mapDispatchToProps = (dispatch: Dispatch<NavigationAction>) => ({
  gotoHome: () => dispatch(NavigationActions.navigate({ routeName: 'Home' })),
})

export default connect(
  null,
  mapDispatchToProps,
)(RootScreen)
