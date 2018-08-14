import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Container, List } from 'native-base'

import { TopicItemList, GetTopicsActionType } from './Reducers'
import HomeStyles from './Styles'
import { topicRequest, RequestParams } from './Actions'
import { makeSelectTopicList } from './Selectors'
import { State } from '../../Redux/RootReducers'
import TopicListItem from '../../Components/ListItem'

interface DispatchProps {
  getTopicList: typeof topicRequest
}

interface StateProps {
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
      <Container style={HomeStyles.container}>
        <List
          dataArray={topicList.toJS()}
          renderRow={item => <TopicListItem author={item.author} title={item.title} />}
        />
      </Container>
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
