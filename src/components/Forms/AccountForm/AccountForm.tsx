import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { ButtonApp } from '../../Controllers/Button';
import { Input } from '../../Controllers/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../../Firebase/firebase';

export function AccountForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const auth = getAuth(app);

  function handleNewAccount() {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => Alert.alert('Conta', 'Cadastrado com sucesso!'))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    console.log(email, password);
  }


  return (
    <>
      <View className='mb-10'>
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
          onPress={
            handleNewAccount}
          title='Cadastrar'
        />
      </View>

    </>
  );
}