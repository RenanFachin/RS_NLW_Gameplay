import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 102,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 20
    },
    checked: {
        position: 'absolute',
        right: 7,
        top: 7,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.button.primary,
        borderRadius: 4
    },
    check: {
        position: 'absolute',
        right: 7,
        top: 7,
        width: 14,
        height: 14,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 4
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15
    }
});