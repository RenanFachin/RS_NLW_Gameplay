import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { GuildIcon } from '../GuildIcon';
import PlayerSVG from '../../assets/player.svg'
import CalendarSVG from '../../assets/calendar.svg'

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string;
    name: string;
    icon: null;
    owner: boolean;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = TouchableOpacityProps & {
    data: AppointmentProps
}



export function Appointment({ data, ...props }: Props) {

    const [category] = categories.filter(item => item.id === data.category)
    const { owner } = data.guild
    const { button, on } = theme.colors

    return (
        <TouchableOpacity {...props}>
            <View style={styles.container}>
                <GuildIcon />


                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>


                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSVG />

                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={styles.playersInfo}>
                            <PlayerSVG
                                // Aplicando uma coloração de acordo com o usuário ser ou não o dono
                                // Só será aplicado caso o svg não tenha a prop FILL definida nele
                                fill={owner ? button.primary : on}
                            />

                            <Text style={[styles.player, { color: owner ? button.primary : on }]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>

                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}