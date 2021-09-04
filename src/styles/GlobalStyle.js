import { StyleSheet } from "react-native";

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'

  },
  buttonPrimary: {
    backgroundColor: 'orange',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

});

export default GlobalStyle;