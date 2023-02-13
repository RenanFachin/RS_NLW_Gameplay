import { ReactNode } from 'react';
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

type HeaderProps = {
    title: string;
    action?: ReactNode; // Podendo ser um componente
}

export function Header({ title, action }: HeaderProps) {
    const insets = useSafeAreaInsets()
    const { secondary40, secondary100, heading } = theme.colors

    return (
        <LinearGradient
            style={[styles.container, { paddingTop: insets.top + 32 }]}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton>
                <Feather
                    name='arrow-left'
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>


            {
                action &&
                <View>
                    {action}
                </View>
            }
        </LinearGradient>
    );
}