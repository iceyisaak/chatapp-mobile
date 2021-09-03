import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import style from './style';
import globalStyle from '../../styles/GlobalStyle';

const Login = ({
}) => {

  const {
    container,
    input,
    text
  } = style;

  const {
    buttonPrimary,
    buttonSecondary
  } = globalStyle;

  return (

    <View style={container}>

      <Text style={text}>
        Login:
      </Text>

      <TextInput style={input} />

      <Text>
        Password:
      </Text>

      <TextInput style={input} />

      <TouchableOpacity style={buttonPrimary}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={buttonSecondary}>
        <Text>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>

  );
};

export default Login;