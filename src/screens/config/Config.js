import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View
} from 'react-native';
import ButtonActions from '../../interface/button/Button'
import styles_default from '../Styles'
import styles from './Styles';


class Config extends Component {
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
              ></ButtonActions>
            </View>
            <View style={styles.button_container}>
              <ButtonActions
                label="Remove Counter"
                setIcon="MaterialIcons"
                icon="close"
                sizeIcon={29}
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
              ></ButtonActions>

              <ButtonActions
                label="Dec"
                setIcon="MaterialIcons"
                icon='remove'
                sizeIcon={29}
              ></ButtonActions>
            </View>
            <View style={styles.button_reset}>
              <ButtonActions
                label="Reset"
                setIcon="MaterialIcons"
                icon='exposure-zero'
                sizeIcon={29}
              ></ButtonActions>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Config