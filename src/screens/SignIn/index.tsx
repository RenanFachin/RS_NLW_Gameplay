import { View, Image, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { useAuth } from '../../hooks/useAuth';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import IllustrationImg from '../../assets/illustration.png'

export function SignIn() {
    // Contextos
    const { loading, SignIn } = useAuth()

    async function handleSignIn() {
        try {
            await SignIn()
        } catch (error) {

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


                    {
                        loading ?
                            <ActivityIndicator color={theme.colors.button.primary} />
                            :
                            <ButtonIcon
                                title='Entrar com o discord'
                                onPress={handleSignIn}
                            />
                    }
                </View>
            </View>
        </Background>
    );
}