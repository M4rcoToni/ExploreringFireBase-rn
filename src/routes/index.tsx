import { NavigationContainer } from '@react-navigation/native'

import { getAuth, } from "firebase/auth";

import { AppRoutes } from './app.routes'
import { useEffect, useState } from 'react';
import { Home } from '../screens/Home';
export function Routes() {
    const auth = getAuth();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(setUser);
        return subscriber;
    }, [])
    return (
        <NavigationContainer>
            {user ? <Home /> : <AppRoutes />}
        </NavigationContainer>
    )

}