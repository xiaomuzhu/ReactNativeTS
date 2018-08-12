import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { FlatList, Text, View } from 'react-native'

import { TopicItemList, GetTopicsActionType } from './Reducers'
import HomeStyles from './Styles'
import { topicRequest, RequestParams } from './Actions'
import { makeSelectTopicList } from './Selectors'
import { State } from '../../Redux/RootReducers'

export interface DispatchProps {
  getTopicList: typeof topicRequest
}

export interface StateProps {
  topicList: TopicItemList
}

type HomeProps = DispatchProps & StateProps

class HomeScreen extends React.Component<HomeProps> {
  static navigationOptions = {
    title: 'Home',
  }
  public componentDidMount() {
    this.props.getTopicList({ page: 1, tab: 'all', limit: 20, mdrender: 'true' })
  }

  render() {
    const { topicList } = this.props
    return (
      <View style={HomeStyles.container}>
        <FlatList
          data={topicList.toJS()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<GetTopicsActionType>): DispatchProps => ({
  getTopicList: (params: RequestParams) => dispatch(topicRequest(params)),
})

const mapStateToProps = (state: State) => ({
  topicList: makeSelectTopicList(state),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
