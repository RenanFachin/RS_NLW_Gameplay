import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';


type ButtonIconProps = TouchableOpacityProps & {
    title: string;
}

export function Button({ title, ...props }: ButtonIconProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}