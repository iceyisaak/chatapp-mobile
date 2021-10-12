import React from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';


import LoginScreen from './src/components/Login';
import globalStyle from './src/styles/GlobalStyle';


const App = () => {
  return (
    <>
      {/* <LoginScreen style={globalStyle} /> */}
      <AuthNavigator />
    </>
  );
};

export default App;


