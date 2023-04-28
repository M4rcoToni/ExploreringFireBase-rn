import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { Register } from '../screens/Register';

type AppRoutes = {
  sign: undefined
  register: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='sign'
        component={SignIn}
      />
      <Screen
        name='register'
        component={Register}
      />
    </Navigator>
  )
}