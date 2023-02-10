import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { ButtonApp } from '../../Controllers/Button';
import { Input } from '../../Controllers/Input';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../../Firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const auth = getAuth(app);

  function handleSignIn() {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => Alert.alert('Logado com sucesso'))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  function handleForgotPassword() {


  }
  return (
    <>
      <View className='mb-9'>
        <Input
          onChangeText={setEmail}
        />
      </View>

      <View >
        <Input
          password
          onChangeText={setPassword}
        />
      </View>

      <View className='mt-9'>
        <ButtonApp
          isLoading={isLoading}
          onPress={handleSignIn}
          title='entrar'
        />
      </View>

    </>
  );
}