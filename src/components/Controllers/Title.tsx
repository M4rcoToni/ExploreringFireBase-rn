import React from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
}
export function Title({ text }: Props) {
  return (
    <Text className='text-2xl font-bold text-appgray-300'>
      {text}
    </Text>
  );
}