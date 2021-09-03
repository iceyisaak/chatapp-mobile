import { StyleSheet } from "react-native";

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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