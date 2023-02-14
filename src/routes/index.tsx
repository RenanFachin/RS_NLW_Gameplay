import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hooks/useAuth'

import { SignIn } from '../screens/SignIn'

import { AppRoutes } from './app.routes'


export function Routes() {
    const { user } = useAuth()

    return (
        <NavigationContainer>

            {/* Caso exista um id de usuário dentro do state user do contexto de autenticação quer dizer que o usuário esta autenticado e pode ser redirecionado para as rotas autenticadas */}
            {user.id ? <AppRoutes /> : <SignIn />}

        </NavigationContainer>
    )
}