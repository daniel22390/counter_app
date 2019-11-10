import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text
} from 'react-native'
import styles from './Styles'
import Icon from '../icon/Icon'

class Button extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={this.props.onClick}>
        <Icon set={this.props.setIcon} icon={this.props.icon} size={this.props.sizeIcon}></Icon>
        <Text style={styles.label}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button
