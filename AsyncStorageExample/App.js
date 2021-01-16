import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_age';

const App = () => {
  const [age, setAge] = useState('');
  
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, age)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem(STORAGE_KEY)
  
      if (userAge !== null) {
        setAge(userAge)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }
  // ...
}

export default App