import * as React from 'react'
import { Left, Thumbnail } from 'native-base'
import AvatarStyles from './Styles'

export interface AvatarProps {
  url: string
}

export default function Avatar(props: AvatarProps) {
  return (
    <Left style={AvatarStyles.left}>
      <Thumbnail circular small source={{ uri: props.url }} />
    </Left>
  )
}
