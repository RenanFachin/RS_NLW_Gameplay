import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type CategoryProps = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>; // Tipando um ícone
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category({ icon: Icon, title, checked = false, hasCheckBox = false, ...props }: CategoryProps) {
    const { secondary40, secondary50, secondary70, secondary80, secondary85 } = theme.colors

    return (
        <TouchableOpacity style={styles.container} {...props}>
            <LinearGradient style={styles.container} colors={[secondary70, secondary80]}>
                <LinearGradient
                    style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
                    colors={[checked ? secondary85 : secondary40, secondary50]}
                >

                    {
                        hasCheckBox &&
                        <View style={checked ? styles.checked : styles.check} />
                    }                    

                    <Icon width={48} height={48} />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>
    );
}