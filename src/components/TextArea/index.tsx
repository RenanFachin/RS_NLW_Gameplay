import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function TextArea({ ...props }: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            {...props}
        />
    );
}