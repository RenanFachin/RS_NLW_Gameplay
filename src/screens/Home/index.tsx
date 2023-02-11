import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Profile } from '../../components/Profile';
import { styles } from './styles';



export function Home() {
    const insets = useSafeAreaInsets()

    return (

        <View style={styles.container}>

            <View style={{
                width: '100%',
                paddingHorizontal: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: insets.top + 32 ,
                marginBottom: 42
            }}>
                <Profile />
            </View>

        </View>

    );
}