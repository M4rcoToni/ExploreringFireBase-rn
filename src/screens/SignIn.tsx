import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Alert } from 'react-native';

import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../firebase/firebase';

import { AppNavigatorRoutesProps } from '../routes/app.routes';
import { OtherButton } from '../components/OtherButton';
import { Input } from '../components/Input';
import { ButtonApp } from '../components/Button';
import { Title } from '../components/Title';

export function SignIn() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth(app);

  function handleSignIn() {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => Alert.alert('Logado com sucesso'))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  function handleForgotPassword() {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => Alert.alert('Email enviado'))
        .catch((error) => console.log(error))
    } else {
      Alert.alert('Digite seu email')
    }
  }
  return (
    <View className='flex-1 items-center justify-center  bg-appwhite-200 '>

      <View className='my-8'>
        <Title
          text='Acesse sua conta'
        />
      </View>

      <View>
        <Input
          title='Usuário'
          onChangeText={setEmail}
          value={email}
        />
      </View>

      <View className='mt-10'>
        <Input
          title='Senha'
          password
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View className='mt-10'>
        <ButtonApp
          isLoading={isLoading}
          onPress={handleSignIn}
          title='Acessar'
        />
      </View>

      <View className='flex-row mt-24'>

        <OtherButton
          onPress={() => navigation.navigate('register')}
          title='Criar conta'
          iconName='user-plus'
        />
        <OtherButton
          onPress={handleForgotPassword}
          title='Esqueceu a senha'
          iconName='mail'
        />
      </View>
    </View>
  );
}