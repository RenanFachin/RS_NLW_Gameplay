import { Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

type AvatarProps = {
    urlImage: string;
}


export function Avatar({ urlImage }: AvatarProps) {
    const { secondary70, secondary80 } = theme.colors

    return (
        <LinearGradient style={styles.container} colors={[secondary70, secondary80]}>
            <Image
                source={{uri: urlImage}}
                style={styles.avatar}
                
            />
        </LinearGradient>
    );
}