import React from 'react';
import { render } from 'react-dom';
import { ThemedButton } from './Hello';
//import './style.css';
import { TwoApp } from './TwoApp'
import { StateProvider } from './State';

export const App = () => {
  const initialState = {
    primary: { val: true }
  };
  
  const reducer = (state, action) => {
    console.log("state:", state, "action:", action)
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          primary: action.primary
        };
        
      default:
        return state;
    }
  };
  
  return (
    <div>
    <StateProvider initialState={initialState} reducer={reducer}>
        <ThemedButton />
    </StateProvider>
    <TwoApp />
    </div>
  );  
}

render(<App />, document.getElementById('root'));
