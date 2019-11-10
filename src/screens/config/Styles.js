import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  section: {
    flex: 1
  },
  title_section: {
    color: "#333333",
    fontSize: 25,
    marginLeft: 10
  },
  counter_container: {
    flexDirection: 'row'
  },
  button_container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button_decinc: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  button_reset: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export default styles