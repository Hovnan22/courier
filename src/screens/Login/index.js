import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import { LogIn } from '../../actions/app'
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState(null);
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async () => {
    if (password === 'admin' && userName === 'admin') {
      try {
        await AsyncStorage.setItem('login', 'true');
        dispatch(LogIn(true));
      } catch (err) {
        console.log({ err });
      }
      setError(null);
    } else {
      setError('*wrong username or password');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        LOGIN
      </Text>
      <View>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput style={styles.LoginInput} onChangeText={setUserName} placeholder="User name" />
        <TextInput secureTextEntry={true} style={styles.LoginInput} onChangeText={setPassword} placeholder="Password" />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
