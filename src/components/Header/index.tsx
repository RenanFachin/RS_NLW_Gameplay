import { ReactNode } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
    title: string;
    action?: ReactNode; // Podendo ser um componente
}

export function Header({ title, action }: HeaderProps) {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const { secondary40, secondary100, heading } = theme.colors

    function handleGoBack(){
        navigation.goBack()
    }

    return (
        <LinearGradient
            style={[styles.container]}
            colors={[secondary100, secondary40]}
        >
            <TouchableOpacity onPress={handleGoBack}>
                <Feather
                    name='arrow-left'
                    size={24}
                    color={heading}
                />
            </TouchableOpacity>

            <Text style={styles.title}>
                {title}
            </Text>


            {
                action ?
                <View>
                    {action}
                </View>

                :

                <View style={{width: 24}}/>
            }
        </LinearGradient>
    );
}