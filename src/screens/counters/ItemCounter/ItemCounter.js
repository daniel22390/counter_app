import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './Styles'
import { connect } from 'react-redux'

class ItemCounter extends Component {

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onSelect(this.props.position)}
        underlayColor="transparent"
      >
        <View style={[styles.container, this.props.position === this.props.selected_counter ? styles.container_selected : {}]} >
          <Text style={styles.label}>Counter {this.props.position + 1}</Text>
          <Text style={styles.value}>{this.props.count}</Text>
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