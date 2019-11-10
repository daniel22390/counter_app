import { StyleSheet } from 'react-native'

var styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#D8D8D8",
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 110,
    opacity: 0.6,
    borderRadius: 3
  },
  label: {
    fontSize: 18,
    color: "#999999"
  },
  value: {
    textAlign: 'right',
    fontSize: 50,
    color: '#333333',
    fontWeight: 'bold'
  },
  container_selected: {
    opacity: 1,
    borderWidth: 3,
    borderColor: '#14437B'
  }
})


export default styles