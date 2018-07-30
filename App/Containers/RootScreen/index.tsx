import * as React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { add } from './Actions'
import { Counter } from './Reducers'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import rootReducers from '../../Redux/RootReducers'

export interface DispatchProps {
  add: typeof add
}

export interface StateProps {
  root: Counter
}

type Props = DispatchProps & StateProps

class RootScreen extends React.Component<Props> {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <Text>{this.props.root.age}</Text>
        <Text>哈哈</Text>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  add: bindActionCreators(add, dispatch),
})

export type State = ReturnType<typeof rootReducers>

const mapStateToProps = (state: State): StateProps => {
  return {
    root: state.root,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootScreen)
