import { TouchableOpacity, TouchableOpacityProps, View, Text, ActivityIndicator } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function ButtonApp({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <View className=' h-12 w-72 bg-appgray-300  rounded-md absolute  mt-6 ml-4' />
      <View className=' h-12 w-72 bg-appgreen-300  rounded-md absolute  mt-3 ml-6' />
      <View className='h-12 w-72 bg-appgreen-200 rounded-md flex-row items-center px-3 ml-9 justify-center'>

        <Text className='text-green-700 font-bold uppercase text-base'>

          {isLoading ? <ActivityIndicator size='small' color='gray' /> : <>{title}</>}
        </Text>

      </View>
    </TouchableOpacity >
  );
}