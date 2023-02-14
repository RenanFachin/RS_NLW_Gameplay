import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { CategorySelect } from '../../components/CategorySelect';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';

import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';


export function AppointmentCreate() {

    const [category, setCategory] = useState('')
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    function handleOpenGuilds() {
        setOpenGuildsModal(true)
    }

    function handleCloseGuilds() {
        setOpenGuildsModal(false)
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected)
        setOpenGuildsModal(false)
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId)
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <Background>
                    <SafeAreaView style={styles.container}>
                        <Header
                            title='Agendar partida'
                        />

                        <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                            Categoria
                        </Text>

                        <CategorySelect
                            hasCheckBox
                            setCategory={handleCategorySelect}
                            categorySelected={category}
                        />

                        <View style={styles.form}>
                            <TouchableOpacity onPress={handleOpenGuilds}>
                                <View style={styles.select}>
                                    {
                                        guild.icon ?
                                            <GuildIcon 
                                            guildId={guild.id}
                                            iconId={guild.icon}
                                            />
                                            :
                                            <View style={styles.image} />
                                    }

                                    <View style={styles.selectBody}>
                                        <Text style={styles.label}>
                                            {/* Aplicando condicional */}
                                            {guild.name ? guild.name : 'Selecione um servidor'}

                                        </Text>
                                    </View>

                                    <Feather
                                        name='chevron-right'
                                        color={theme.colors.heading}
                                        size={18}
                                    />
                                </View>
                            </TouchableOpacity>


                            <View style={styles.field}>
                                <View>
                                    <Text style={[styles.label, { marginBottom: 12 }]}> Dia e mês</Text>

                                    <View style={styles.column}>
                                        <SmallInput maxLength={2} />

                                        <Text style={styles.divider}>
                                            /
                                        </Text>

                                        <SmallInput maxLength={2} />
                                    </View>
                                </View>


                                <View>
                                    <Text style={[styles.label, { marginBottom: 12 }]}> Hora e minuto</Text>

                                    <View style={styles.column}>
                                        <SmallInput maxLength={2} />

                                        <Text style={styles.divider}>
                                            :
                                        </Text>

                                        <SmallInput maxLength={2} />
                                    </View>
                                </View>

                            </View>


                            <View style={[styles.field, { marginBottom: 12 }]}>
                                <Text style={styles.label}>
                                    Descrição
                                </Text>

                                <Text style={styles.textInputArea}>
                                    Max. 100 caracteres
                                </Text>
                            </View>

                            <TextArea
                                multiline
                                maxLength={100}
                                numberOfLines={5}
                                autoCorrect={false}
                            />

                            <View style={styles.footer}>
                                <Button
                                    title='Agendar'
                                />
                            </View>
                        </View>

                    </SafeAreaView >
                </Background >
            </ScrollView>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelected={handleGuildSelect} />
            </ModalView>

        </KeyboardAvoidingView>
    );
}