import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='sigin'
        component={SignIn}
      />
      <Screen
        name='register'
        component={Register}
      />

    </Navigator>
  )
}