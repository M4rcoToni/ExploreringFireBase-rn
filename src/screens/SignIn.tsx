import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { OtherButton } from '../components/Controllers/OtherButton';
import { SigninForm } from '../components/Forms/SiginForm/SigininForm';

export function SignIn() {
  const navigation = useNavigation();

  return (
    <View className='flex-1 items-center justify-center  bg-appwhite-200 pt-32'>
      <SigninForm />
      <View className='flex-row mt-24'>

        <OtherButton
          onPress={() => navigation.navigate('register')}
          title='Criar conta'
          iconName='user-plus'
        />
        <OtherButton
          title='Esqueceu a senha'
          iconName='mail'
        />
      </View>
    </View>
  );
}