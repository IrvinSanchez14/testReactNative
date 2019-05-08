/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React from 'react';

import { StoreProvider } from './Store'
import App from './TestForm'

export default function Test(Props: any){
  
  return(
    <StoreProvider>
      <App />
    </StoreProvider>
  )

}
