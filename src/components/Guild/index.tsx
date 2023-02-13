import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';
import { GuildIcon } from '../GuildIcon';
import { Feather } from "@expo/vector-icons"
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export interface GuildProps {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: GuildProps
}

export function Guild({ data, ...props }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
            <GuildIcon />

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>

                    <Text style={styles.userType}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>

            <Feather
                name='chevron-right'
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    );
}