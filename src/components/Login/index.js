import React, { useState } from 'react';
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
    content,
    input,
    text
  } = style;

  const {
    container,
    buttonPrimary,
    buttonSecondary
  } = globalStyle;


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (

    <View style={container}>

      <View style={content}>

        <Text style={text}>
          Username:
        </Text>

        <TextInput
          style={input}
        />

        <Text>
          Password:
        </Text>

        <TextInput
          style={input}
          // value={() => setPassword(val)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={buttonPrimary}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>

        <Text>
          Don't have an account yet?
        </Text>

        <TouchableOpacity
          style={buttonSecondary}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default Login;