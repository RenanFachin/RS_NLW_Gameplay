import { View, TouchableOpacity, ImageBackground, Text, FlatList } from 'react-native';

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';

import { SafeAreaView } from 'react-native-safe-area-context'
import { Fontisto } from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Renan',
            avatar_url: 'https://github.com/RenanFachin.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Header
                    title='Detalhes'
                    action={
                        <TouchableOpacity>
                            <Fontisto
                                name="share"
                                size={24}
                                color={theme.colors.button.primary}
                            />
                        </TouchableOpacity>
                    }
                />

                <ImageBackground source={BannerImg} style={styles.banner}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>
                            Lendários
                        </Text>

                        <Text style={styles.subtitle}>
                            É hoje que vamos chegar ao challenger sem perder uma partida da md10
                        </Text>
                    </View>
                </ImageBackground>


                <ListHeader
                    title='Jogadores'
                    subtitle='Total: 3'
                />

                <FlatList
                    data={members}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Member data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.members}

                />

                <View style={[styles.footer, {}]}>
                    <ButtonIcon title='Entrar no servidor do Discord' />
                </View>
            </SafeAreaView>
        </Background>
    );
}