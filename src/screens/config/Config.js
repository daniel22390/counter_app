import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles_default from '../Styles'


class Config extends Component {
  render() {
    return (
      <View style={styles_default.container}>
        <Text>config</Text>
      </View>
    )
  }
}

export default Config