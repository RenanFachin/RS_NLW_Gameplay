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
   SignIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProviderProps = {
   children: ReactNode;
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

         AuthSession.startAsync({ authUrl })

      } catch {
         throw new Error('Não foi possível a autenticação.')
      }
   }


   return (
      <AuthContext.Provider value={{ user, SignIn }}>
         {children}
      </AuthContext.Provider>
   )
}
