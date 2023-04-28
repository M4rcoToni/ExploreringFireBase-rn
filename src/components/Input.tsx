import React, { useEffect } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Feather, createMultiStyleIconSet } from '@expo/vector-icons'
import { MotiView, useAnimationState } from 'moti';

interface Props extends TextInputProps {
  title: string;
  password?: boolean;
}
export function Input({ title, password, ...rest }: Props) {
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
    <View>
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
          placeholder={title}
          secureTextEntry
          className=' text-appgray-300 px-3 text-base w-full'
          {...rest}
        />

      </MotiView>
    </View >

  );
}