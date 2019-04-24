import React from 'react';
import { ThemedButtonTwo } from './Hello2';
//import './style.css';
import { StateProvider } from './State';

export const TwoApp = () => {
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
    <StateProvider initialState={initialState} reducer={reducer}>
        <ThemedButtonTwo />
    </StateProvider>
  );  
}