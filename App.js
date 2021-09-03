import React from 'react';
import LoginScreen from './src/components/Login';
import globalStyle from './src/styles/GlobalStyle';

const App = () => {
  return (
    <>
      <LoginScreen style={globalStyle} />
    </>
  );
};

export default App;


