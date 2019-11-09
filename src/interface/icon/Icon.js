import React, { Component } from 'react'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

class Icon extends Component {
  render() {

    let Icon
    switch (this.props.set) {
      case "AntDesign":
        Icon = <IconAntDesign name={this.props.icon} size={this.props.size} style={this.props.style} />
        break;
      case "Foundation":
        Icon = <IconFoundation name={this.props.icon} size={this.props.size} style={this.props.style} />
        break;
      case "MaterialIcons":
        Icon = <IconMaterialIcons name={this.props.icon} size={this.props.size} style={this.props.style} />
        break;
      default:
        Icon = null
    }

    return Icon
  }
}

export default Icon
