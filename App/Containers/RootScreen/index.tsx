import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FlatList, Text, View } from 'react-native'

import rootReducers from '../../Redux/RootReducers'
import { RootState } from './Reducers'
import RootStyles from './Styles'
import { topicRequest } from './Actions'

export interface DispatchProps {
  getTopicList: typeof topicRequest
}

export interface StateProps {
  root: RootState
}

type Props = DispatchProps & StateProps

class RootScreen extends React.Component<Props> {
  public componentDidMount() {
    this.props.getTopicList({ page: 1, tab: 'all', limit: 20, mdrender: 'true' })
  }

  render() {
    const { root } = this.props
    return (
      <View style={RootStyles.container}>
        <FlatList
          data={root.topicList.toJS()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  getTopicList: bindActionCreators(topicRequest, dispatch),
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
