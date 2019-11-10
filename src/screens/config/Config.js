import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View
} from 'react-native';
import ButtonActions from '../../interface/button/Button'
import styles_default from '../Styles'
import styles from './Styles';
import { connect } from 'react-redux'
import { openModal } from '../../store/actions/modal'
import { 
  includeCounter
} from '../../store/actions/counter'

class Config extends Component {

  verifyCounters = () => {
    if(this.props.selected_counter === null)
      this.props.openModal("Você ainda não inseriu um counter!", 'error')
    return this.props.selected_counter
  }

  addCounter = async () => {
    await this.props.addCounter()
    this.props.openModal(`Counter ${this.props.counters.length} adicionado com sucesso!`, 'success')
  }

  removeCounter = () => {
    if(this.verifyCounters()){

    }
  }

  incCounter = () => {
    if(this.verifyCounters()){

    }
  }

  decCounter = () => {
    if(this.verifyCounters()){

    }
  }

  resetCounter = () => {
    if(this.verifyCounters()){

    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles_default.container}>
        <View style={styles.section}>
          <Text style={styles.title_section}>Counters</Text>
          <View style={styles.counter_container}>
            <View style={styles.button_container}>
              <ButtonActions
                label="Add Counter"
                setIcon="MaterialIcons"
                icon='add'
                sizeIcon={29}
                onClick={this.addCounter}
              ></ButtonActions>
            </View>
            <View style={styles.button_container}>
              <ButtonActions
                label="Remove Counter"
                setIcon="MaterialIcons"
                icon="close"
                sizeIcon={29}
                onClick={this.removeCounter}
              ></ButtonActions>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title_section}>Selected Counter</Text>
          <View style={styles.counter_container}>
            <View style={styles.button_decinc}>
              <ButtonActions
                label="Inc"
                setIcon="MaterialIcons"
                icon='add'
                sizeIcon={29}
                onClick={this.incCounter}
              ></ButtonActions>

              <ButtonActions
                label="Dec"
                setIcon="MaterialIcons"
                icon='remove'
                sizeIcon={29}
                onClick={this.decCounter}
              ></ButtonActions>
            </View>
            <View style={styles.button_reset}>
              <ButtonActions
                label="Reset"
                setIcon="MaterialIcons"
                icon='exposure-zero'
                sizeIcon={29}
                onClick={this.resetCounter}
              ></ButtonActions>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (msg, type) => dispatch(openModal(msg, type)),
    addCounter: () => dispatch(includeCounter())
  }
}

const mapStateToProps = ({ counters }) => {
  return {
      counters: counters.counters,
      selected_counter: counters.selected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)