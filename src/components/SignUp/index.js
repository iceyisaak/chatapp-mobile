import React from "react";

const SignUp = () => {
  return (
    <View style={container}>

      <Text style={text}>
        Username:
      </Text>

      <TextInput style={input} />
      <Text style={text}>
        email:
      </Text>

      <TextInput style={input} />

      <Text>
        Password:
      </Text>

      <TextInput style={input} secureTextEntry={true} />

      <TouchableOpacity style={buttonPrimary}>
        <Text>
          Sign Up
        </Text>
      </TouchableOpacity>


      <TouchableOpacity style={buttonSecondary}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
