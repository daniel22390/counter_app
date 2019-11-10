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
import {
  includeCounter,
  decCounter,
  incCounter,
  resetCounter,
  removeCounter
} from '../../store/actions/counter'
import { showMessage } from "react-native-flash-message";

class Config extends Component {

  verifyCounters = () => {
    if (this.props.selected_counter === null)
      showMessage({
        message: 'Nenhum counter foi selecionado!',
        type: "danger",
      });

    return this.props.selected_counter !== null
  }

  addCounter = async () => {
    await this.props.includeCounter()
    showMessage({
      message: `Counter ${this.props.counters.length} foi adicionado com sucesso!`,
      type: "success",
    });
  }

  removeCounter = async () => {
    if (this.verifyCounters()) {
      await this.props.removeCounter(this.props.selected_counter)
      showMessage({
        message: `Counter ${this.props.selected_counter + 1} foi removido com sucesso!`,
        type: "success",
      });
    }
  }

  incCounter = async () => {
    if (this.verifyCounters()) {
      await this.props.incCounter(this.props.selected_counter)
      showMessage({
        message: `Counter ${this.props.selected_counter + 1} foi incrementado com sucesso!`,
        type: "success",
      });
    }
  }

  decCounter = async () => {
    if (this.verifyCounters()) {
      await this.props.decCounter(this.props.selected_counter)
      showMessage({
        message: `Counter ${this.props.selected_counter + 1} foi decrementado com sucesso!`,
        type: "success",
      });
    }
  }

  resetCounter = async () => {
    if (this.verifyCounters()) {
      await this.props.resetCounter(this.props.selected_counter)
      showMessage({
        message: `Counter ${this.props.selected_counter + 1} foi reiniciado com sucesso!`,
        type: "success",
      });
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
    includeCounter: () => dispatch(includeCounter()),
    incCounter: (position) => dispatch(incCounter(position)),
    decCounter: (position) => dispatch(decCounter(position)),
    resetCounter: (position) => dispatch(resetCounter(position)),
    removeCounter: (position) => dispatch(removeCounter(position))
  }
}

const mapStateToProps = ({ counters }) => {
  return {
    counters: counters.counters,
    selected_counter: counters.selected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)