import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type CategoryProps = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>; // Tipando um ícone
    checked?: boolean;
}

export function Category({ icon: Icon, title, checked = false, ...props }: CategoryProps) {
    const { secondary70, secondary80 } = theme.colors

    return (
        <TouchableOpacity style={styles.container} {...props}>
            <LinearGradient style={styles.container} colors={[secondary70, secondary80]}>
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? styles.checked : styles.check} />

                    <Icon width={48} height={48} />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}