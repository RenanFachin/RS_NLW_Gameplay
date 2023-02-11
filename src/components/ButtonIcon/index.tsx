import React from 'react';
import { View, Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...props }: ButtonIconProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
            <View style={styles.iconWrapper}>
                <Image
                    source={DiscordImg}
                    style={styles.icon}
                />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}