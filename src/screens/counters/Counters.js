import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import styles_default from '../Styles'
import styles from './Styles'
import { connect } from 'react-redux'
import ItemCounter from './ItemCounter/ItemCounter'
import { selectCounter } from '../../store/actions/counter'

class Counters extends Component {

  clickSelect = (position) => {
    this.props.setSelect(position)
  }

  render() {
    return (
      <View style={[styles_default.container, styles.container]}>
        {
          this.props.counters.length ?
          <FlatList
            data={this.props.counters}
            renderItem={({ item, index }) => (
              <ItemCounter
                count={item.count}
                onSelect={this.clickSelect}
                position={index}
              />
            )}
            style={styles.flat}
            extraData={this.props.selected_counter}
            keyExtractor={(item, index) => 'key' + index}
          />
          :
          <Text style={styles.not_items}>Nenhum counter encontrado!</Text>
        }
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelect: (position) => dispatch(selectCounter(position))
  }
}

const mapStateToProps = ({ counters }) => {
  return {
    counters: counters.counters,
    selected_counter: counters.selected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters)

