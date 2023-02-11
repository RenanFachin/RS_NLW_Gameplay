import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png'

export function SignIn() {

    const { navigate } = useNavigation()

    function handleSignIn() {
        navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}suas jogatinas {`\n`}facilmente
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
    );
}