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
        backgroundColor: theme.colors.secondary40,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 8
    },
    checked: {
        width: 12,
        height: 12,
        backgroundColor: theme.colors.button.primary,
        alignSelf: 'flex-end',
        marginRight: 8,
        borderRadius: 4
    },
    check: {
        width: 14,
        height: 14,
        backgroundColor: theme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 8,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 4
    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15
    }
});