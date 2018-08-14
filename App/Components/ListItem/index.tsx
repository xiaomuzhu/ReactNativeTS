import * as React from 'react'
import { ListItem, Text, Body } from 'native-base'

import Avatar from '../Avatar'
import { TopicItem } from '../../Containers/HomeScreen/Actions'

type TopicListItemProps = Pick<TopicItem, 'author'> & Pick<TopicItem, 'title'>

export default function TopicListItem(props: TopicListItemProps) {
  return (
    <ListItem avatar>
      <Avatar url={props.author.avatar_url} />
      <Body>
        <Text numberOfLines={1}>{props.title}</Text>
      </Body>
    </ListItem>
  )
}
