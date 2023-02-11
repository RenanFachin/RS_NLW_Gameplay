import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';

import { styles } from './styles';
import { CategorySelect } from '../../components/CategorySelect';



export function Home() {
    const insets = useSafeAreaInsets()

    return (

        <View style={styles.container}>

            <View style={{
                width: '100%',
                paddingHorizontal: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: insets.top + 32,
                marginBottom: 42
            }}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect />
            </View>

        </View>

    );
}