import React, { useEffect } from 'react';
import { View, TextInput, TextInputProps, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { MotiView, useAnimationState } from 'moti';

interface Props extends TextInputProps {
  placeholder: string;
  password?: boolean;
  errorMessage?: string | null
}
export function Input({ errorMessage = null, placeholder, password, ...rest }: Props) {
  function initialAnimationState() {
    return useAnimationState({
      from: {
        translateX: -130,
      },
      to: {
        translateX: 0,
      },
    })
  }

  const state = initialAnimationState();

  return (
    <View className='my-5'>
      <MotiView
        className=' h-12 w-72 bg-appgray-300  rounded-md absolute  mt-6 ml-4'
        state={state}
        transition={{ type: 'timing', duration: 1000, delay: 200 }}
      />
      <MotiView
        className=' h-12 w-72 bg-appgreen-300  rounded-md absolute  mt-3 ml-6'
        state={state}
        transition={{ type: 'timing', duration: 800, delay: 100 }}
      />
      <MotiView
        className='h-12 w-72 bg-white rounded-md flex-row items-center px-3 ml-9'
        state={state}
        transition={{ type: 'timing', duration: 700 }}
      >
        {
          !password ?
            <Feather
              name='user'
              size={24}

              color={errorMessage ? 'red' : 'gray'}
            />

            :
            <Feather
              name='lock'
              size={24}
              color={errorMessage ? 'red' : 'gray'}
            />
        }
        <TextInput
          keyboardType={password ? 'default' : 'email-address'}
          placeholder={placeholder}
          secureTextEntry
          className=' text-appgray-300 px-3 text-base w-full'
          {...rest}
        />
      </MotiView>

    </View >

  );
}