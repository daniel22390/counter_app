import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './Styles'
import { connect } from 'react-redux'

class ItemCounter extends Component {

  leftPad = (value, totalWidth, paddingChar) => {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onSelect(this.props.position)}
        underlayColor="transparent"
      >
        <View style={[styles.container, this.props.position === this.props.selected_counter ? styles.container_selected : {}]} >
          <Text style={styles.label}>Counter {this.props.position + 1}</Text>
          <Text style={styles.value}>{this.leftPad(this.props.count, 4)}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const mapStateToProps = ({ counters }) => {
  return {
    selected_counter: counters.selected
  }
}

export default connect(mapStateToProps, null)(ItemCounter)