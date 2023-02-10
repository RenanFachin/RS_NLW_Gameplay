import { SignIn } from './src/screens/SignIn'
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <SignIn />
    </>
  );
}
