import { createContext, ReactNode, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import { SCOPE, CDN_IMAGE, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../configs'
import { api } from '../services/apiDiscord';

type User = {
   id: string;
   username: string;
   firstName: string;
   avatar: string;
   email: string;
   token: string;
}

type AuthContextData = {
   user: User;
   loading: boolean;
   SignIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProviderProps = {
   children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
   params: {
      access_token: string;
   }
}

export function AuthProvider({ children }: AuthProviderProps) {
   const [user, setUser] = useState<User>({} as User)

   const [loading, setLoading] = useState(false)

   async function SignIn() {
      try {
         setLoading(true)

         const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

         /* 
         authUrl é para onde o usuário tem que ir ao iniciar a autenticação
         */

         const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse

         // Verificação da autenticação
         if (type === 'success') {
            api.defaults.headers.authorization = `Bearer ${params.access_token}`

            const userInfo = await api.get('/users/@me')

            // Pegando apenas o primeiro nome do usuário
            const firstName = userInfo.data.username.split(' ')[0]

            // reatribuindo a imagem de avatar do usuario de acordo com o cdn
            userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

            // Como foi modificado os valores de retorno da api, temos que desestrutura e adicionar as novas informações
            setUser({
               ...userInfo.data,
               firstName,
               token: params.access_token
            })

            setLoading(false)
         } else {
            setLoading(false)
         }


      } catch {
         throw new Error('Não foi possível a autenticação.')
      }
   }


   return (
      <AuthContext.Provider value={{ user, loading, SignIn }}>
         {children}
      </AuthContext.Provider>
   )
}
