import { MotiView } from 'moti';
import React from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
}
export function Title({ text }: Props) {
  return (
    <MotiView
      from={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{ type: 'timing', duration: 800, delay: 70 }}
    >
      <Text className='text-2xl font-bold text-appgray-300'>
        {text}
      </Text>
    </MotiView>
  );
}