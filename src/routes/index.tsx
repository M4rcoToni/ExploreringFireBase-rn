import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { getAuth, } from 'firebase/auth';
import { AppRoutes } from './app.routes'

import { Home } from '../screens/Home';
import { View } from 'react-native';

export function Routes() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(setUser);
    return subscriber;
  }, [])

  return (
    <View className='flex-1 bg-appwhite-200'>
      <NavigationContainer >
        {user ? <Home /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  )
}