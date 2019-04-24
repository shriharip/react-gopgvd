import React from 'react';
import { getState } from './State';
import { Button } from 'semantic-ui-react'

export const ThemedButton = () => {
  const [{ primary }, dispatch] = getState();
  console.log(primary.val)
  return (
  
    <Button
      primary={primary.val}
      onClick={() => dispatch({
        type: 'changeTheme',
        primary: { val: !primary.val}
      })}
    >
      Make me change!
    </Button>

  );
}