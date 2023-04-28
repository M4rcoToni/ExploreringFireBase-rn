import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { MotiView } from 'moti';

interface Props extends TouchableOpacityProps {
  title: string;
  iconName: string;
}

export function OtherButton({ title, iconName, ...rest }: Props) {
  return (
    <MotiView
      from={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{ type: 'timing', duration: 800, delay: 100 }}
    >
      <TouchableOpacity
        {...rest}
        activeOpacity={0.7}
        className='h-12 w-auto  rounded-md flex-row items-center px-3 ml-6 justify-center '>

        <Feather
          name={iconName}
          size={24}
          color={'gray'} />

        <Text className='text-appgray-300 font-semibold uppercase m-3'>

          {title}
        </Text>

      </TouchableOpacity >
    </MotiView>

  );
}