import { Image, View } from 'react-native';
import { styles } from './styles';
import DiscordSVG from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type GuildIconProps = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: GuildIconProps) {
    // Caso o servidor tenha uma imagem
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

    return (
        <View style={styles.container}>

            {
                iconId ?
                <Image
                    style={styles.image}
                    source={{ uri }}
                    resizeMode='cover'
                />
                :

                <DiscordSVG 
                    width={40}
                    height={40}
                />
            }

        </View>
    );
}