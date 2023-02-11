import React from 'react';
import { View, Image, Text } from 'react-native';

// Botão com melhor experiência para o usuário
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = RectButtonProps & {
    title: string;
}

export function ButtonIcon({ title, ...props }: ButtonIconProps) {
    return (
        <RectButton style={styles.container} activeOpacity={0.7} {...props}>
            <View style={styles.iconWrapper}>
                <Image
                    source={DiscordImg}
                    style={styles.icon}
                />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}