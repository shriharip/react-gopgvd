import React from 'react';
import { getState } from './State';
import { Button } from 'semantic-ui-react'

export const ThemedButtonTwo = () => {
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