import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';

type ButtonAddProps = TouchableOpacityProps

export function ButtonAdd({ ...props }: ButtonAddProps) {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <MaterialCommunityIcons
                name='plus'
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    );
}