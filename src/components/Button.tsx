import { MotiView, useAnimationState } from 'moti';
import { TouchableOpacity, TouchableOpacityProps, View, Text, ActivityIndicator } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function ButtonApp({ title, isLoading = false, ...rest }: Props) {
  function initialAnimationState() {
    return useAnimationState({
      from: {
        translateX: +130,
      },
      to: {
        translateX: 0,
      },
    })
  }
  const state = initialAnimationState();

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.9}
      disabled={isLoading}
    >
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
        className='h-12 w-72 bg-appgreen-200 rounded-md flex-row items-center px-3 ml-9 justify-center'
        state={state}
        transition={{ type: 'timing', duration: 700 }}
      >

        <Text className='text-green-700 font-bold  text-base'>

          {isLoading ? <ActivityIndicator size='small' color='gray' /> : <>{title}</>}
        </Text>

      </MotiView>
    </TouchableOpacity >
  );
}