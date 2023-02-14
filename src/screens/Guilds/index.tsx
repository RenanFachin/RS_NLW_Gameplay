import { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Loading } from '../../components/Loading';
import { api } from '../../services/apiDiscord';

import { styles } from './styles';

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [isLoading, setIsLoading] = useState(true)

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds')

        setGuilds(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchGuilds()
    },[])

    return (
        <View style={styles.container}>
            {
                isLoading ? <Loading /> :

                    <FlatList
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild
                                data={item}
                                onPress={() => handleGuildSelected(item)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        style={styles.guilds}
                        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                    />
            }

        </View>
    );
}