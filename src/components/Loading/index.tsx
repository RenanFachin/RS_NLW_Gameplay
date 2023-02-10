import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                color={theme.colors.button.primary}
                size={'large'}
            />
        </View>
    );
}