import { createContext, ReactNode, useState, useEffect } from 'react'
import * as AuthSession from 'expo-auth-session'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/apiDiscord';

const { SCOPE } = process.env
const { CDN_IMAGE } = process.env
const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env
const { RESPONSE_TYPE } = process.env

import { COLLECTION_USER } from '../configs/storage'

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
      access_token?: string; // Opcional pq o usuário pode cancelar a autenticação
      error?: string;
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
         if (type === 'success' && !params.error) {
            api.defaults.headers.authorization = `Bearer ${params.access_token}`

            const userInfo = await api.get('/users/@me')

            // Pegando apenas o primeiro nome do usuário
            const firstName = userInfo.data.username.split(' ')[0]

            // reatribuindo a imagem de avatar do usuario de acordo com o cdn
            userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

            // Como foi modificado os valores de retorno da api, temos que desestrutura e adicionar as novas informações

            // PERSISTINDO OS DADOS DO USUÁRIO
            // Criando este objeto para facilitar na hora de salvar o dado no storage e no state
            const userData = {
               ...userInfo.data,
               firstName,
               token: params.access_token
            }


            await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))
            setUser(userData)

         }


      } catch {
         throw new Error('Não foi possível a autenticação.')
      } finally {
         setLoading(false)
      }
   }

   // buscando os dados do storage
   async function loadUserStorageData(){
      const isThereAUserInThestorage = await AsyncStorage.getItem(COLLECTION_USER)

      if(isThereAUserInThestorage){
         const userLogged = JSON.parse(isThereAUserInThestorage) as User

         // Inserindo o token na requisição
         api.defaults.headers.authorization = `Bearer ${userLogged.token}`

         setUser(userLogged)
      }
   }
   useEffect(() => {
      loadUserStorageData()
   },[])

   return (
      <AuthContext.Provider value={{ user, loading, SignIn }}>
         {children}
      </AuthContext.Provider>
   )
}
