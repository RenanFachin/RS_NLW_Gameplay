import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from '../global/styles/theme'

import { Home } from '../screens/Home'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >

            <Screen
                name='Home'
                component={Home}
            />

            <Screen
                name='AppointmentDetails'
                component={AppointmentDetails}
            />

            <Screen
                name='AppointmentCreate'
                component={AppointmentCreate}
            />

        </Navigator>
    )
}