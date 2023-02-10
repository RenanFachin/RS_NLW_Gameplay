import { StatusBar } from 'react-native';

import { SignIn } from './src/screens/SignIn'
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';

// using custom fonts
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  // Enquanto as fontes não forem carregadas, o app não será aberto
  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SignIn />
    </Background>
  );
}
