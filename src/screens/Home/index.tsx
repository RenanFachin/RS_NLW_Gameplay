import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListDivider } from '../../components/ListDivider';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';

import { styles } from './styles';



export function Home() {
    const insets = useSafeAreaInsets()
    const [category, setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Testando'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'Testando'
        }
    ]

    // Esta função será passada como parâmetro pelo componente CategorySelect. Será necessário tipar ela lá no componente
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return (
        <Background>
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


                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />


                <View style={styles.content}>
                    <ListHeader title='Partidas agendadas' subtitle='Total: 6' />

                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment data={item} />
                        )}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        // Passando um componente como um divisor de lista
                        ItemSeparatorComponent={() => <ListDivider />}
                    />
                </View>
            </View>
        </Background>
    );
}