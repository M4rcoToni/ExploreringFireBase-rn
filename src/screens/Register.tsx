import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { OtherButton } from '../components/Controllers/OtherButton';
import { Title } from '../components/Controllers/Title';
import { AccountForm } from '../components/Forms/AccountForm/AccountForm';

export function Register() {
  const navigation = useNavigation();

  return (
    <View className='flex-1 items-center justify-center  bg-appwhite-200'>
      <View className='my-8'>
        <Title
          text='Cadastro' />
      </View>

      <AccountForm />
      <View className='flex-row my-12'>

        <OtherButton
          onPress={() => navigation.goBack()}
          title='Ja estou cadastrado'
          iconName='arrow-left'
        />
      </View>
    </View>
  );
}