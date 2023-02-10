import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
interface Props extends TextInputProps {
  password?: boolean;
}
export function Input({ password, ...rest }: Props) {
  return (
    <View >
      <View className=' h-12 w-72 bg-appgray-300  rounded-md absolute  mt-6 ml-4' />
      <View className=' h-12 w-72 bg-appgreen-300  rounded-md absolute  mt-3 ml-6' />
      <View className='h-12 w-72 bg-white rounded-md flex-row items-center px-3 ml-9'>
        {
          !password ?
            <Feather
              name='user'
              size={24}
              color={'gray'} />

            :
            <Feather
              name='lock'
              size={24}
              color={'gray'}
            />
        }
        <TextInput
          keyboardType={password ? 'default' : 'email-address'}
          placeholder={password ? '*******' : 'Usuario'}
          secureTextEntry
          className=' text-appgray-300 px-3 text-base'
          {...rest}
        />

      </View>
    </View>

  );
}