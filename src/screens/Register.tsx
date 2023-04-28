import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import { FirebaseApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase';

import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { ButtonApp } from '../components/Button';
import { OtherButton } from '../components/OtherButton';

export function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    <View className='flex-1 items-center justify-center  bg-appwhite-200'>
      <View className='my-8'>
        <Title
          text='Crie sua conta' />
      </View>

      <Input
        title='E-mail'
        onChangeText={setEmail}
      />

      <View className='mt-10'>
        <Input
          title='Senha'
          password
          onChangeText={setPassword}
        />
      </View>
      <View className='mt-10'>
        <Input
          title='Confirme a Senha'
          password
          onChangeText={setPassword}
        />
      </View>

      <View className='mt-10'>
        <ButtonApp
          isLoading={isLoading}
          onPress={
            handleNewAccount}
          title='Cadastrar'
        />
      </View>
      <View className='flex-row mt-12'>

        <OtherButton
          onPress={() => navigation.goBack()}
          title='Ja estou cadastrado'
          iconName='arrow-left'
        />
      </View>
    </View>
  );
}