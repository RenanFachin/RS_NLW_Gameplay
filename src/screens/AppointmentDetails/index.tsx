import { View, TouchableOpacity, ImageBackground, Text, FlatList, Alert } from 'react-native';

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Member, MemberProps } from '../../components/Member';
import { AppointmentProps } from '../../components/Appointment';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';

import { SafeAreaView } from 'react-native-safe-area-context'
import { Fontisto } from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { useRoute } from '@react-navigation/native';
import { api } from '../../services/apiDiscord';
import { useState, useEffect } from 'react';

type ParamsProps = {
    guildSelected: AppointmentProps;
}

type GuildWidgetProps = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export function AppointmentDetails() {

    const [widget, setWidget] = useState<GuildWidgetProps>({} as GuildWidgetProps)
    const [isLoading, setIsLoading] = useState(true)

    // Capturando os parâmetros recebidos pela rota
    const route = useRoute()
    const { guildSelected } = route.params as ParamsProps;

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)

            setWidget(response.data)

        } catch {
            Alert.alert("Verifique as configurações do servidor. É preciso habilitar a opção Widget")
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchGuildWidget()
    }, [])


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
                            {guildSelected.guild.name}
                        </Text>

                        <Text style={styles.subtitle}>
                            {guildSelected.description}
                        </Text>
                    </View>
                </ImageBackground>


                {
                    isLoading ?
                        <Loading />
                        :
                        <>
                            <ListHeader
                                title='Jogadores'
                                subtitle={`Total: ${widget.members.length}`}
                            />

                            <FlatList
                                data={widget.members}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <Member data={item} />
                                )}
                                ItemSeparatorComponent={() => <ListDivider isCentered />}
                                style={styles.members}

                            />
                        </>
                }



                <View style={[styles.footer, {}]}>
                    <ButtonIcon title='Entrar no servidor do Discord' />
                </View>
            </SafeAreaView>
        </Background>
    );
}