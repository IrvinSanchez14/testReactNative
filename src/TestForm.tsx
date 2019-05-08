/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native';
import { Store } from './Store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default function Test(Props: any){
  const name = useFormInput('Alex', 'name');
  const surname = useFormInput('Alex', 'surname');
  const [form, setForm] = useState({});
  // const store = React.useContext(Store);
  const { state, dispatch } = React.useContext(Store);


  return(
    <React.Fragment>
      {console.log(state)}
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! { name.value }</Text>
        <Text style={styles.welcome}>Welcome to React Native! { surname.value }</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput {...name}/>
        <TextInput {...surname}/>
      </View>
    </React.Fragment>
  )

  function _setValue ()
  {
    setForm({
      name: name,
      surname:surname
    })
    return dispatch({ type: 'FETCH_DATA', payload: form });

  }

  function useFormInput(initialValue: string, varName: string){
    const [value, setValue] = useState(initialValue);
    function handleChangeValue(e: React.SetStateAction<string>){
      setValue(e);
      setForm({
        name: name.value,
        surname: surname.value
      })
      return dispatch({ type: 'FETCH_DATA', payload: form });
    }
    return{
      value,
      onChangeText: handleChangeValue
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});