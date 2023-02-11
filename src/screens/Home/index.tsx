import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';

import { styles } from './styles';
import { CategorySelect } from '../../components/CategorySelect';
import { useState } from 'react';



export function Home() {
    const insets = useSafeAreaInsets()


    const [category, setCategory] = useState('')


    // Esta função será passada como parâmetro pelo componente CategorySelect. Será necessário tipar ela lá no componente
    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)        
    }

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
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

        </View>

    );
}