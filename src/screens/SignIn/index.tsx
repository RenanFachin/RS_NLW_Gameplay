import { View, Image, Text, Alert } from 'react-native';
import { styles } from './styles';

import { useAuth } from '../../hooks/useAuth';


import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import IllustrationImg from '../../assets/illustration.png'

export function SignIn() {
    // Contextos
    const { user, SignIn } = useAuth()

    async function handleSignIn() {
        try{ 
            await SignIn()
        } catch (error){
            
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte {`\n`}suas jogatinas {`\n`}facilmente
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>


                    <ButtonIcon
                        title='Entrar com o discord'
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </Background>
    );
}