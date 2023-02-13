import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-64x64.jpg'

    return (
        <Image
            style={styles.image}
            source={{ uri }}
            resizeMode='cover'
        />
    );
}