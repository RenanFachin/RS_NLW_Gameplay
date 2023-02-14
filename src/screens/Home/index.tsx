import { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListDivider } from '../../components/ListDivider';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { Loading } from '../../components/Loading';

import { styles } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';



export function Home() {
    const { navigate } = useNavigation()
    const insets = useSafeAreaInsets()
    const [category, setCategory] = useState('')

    // Listando os agendamentos
    const [appointments, setAppointments] = useState<AppointmentProps[]>([])
    const [isLoading, setIsLoading] = useState(true)

    async function loadAppointments() {
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)

        // Caso exista, retorna os dados. se não existir, vetor vazio
        const storageResponseAppointments: AppointmentProps[] = storage ? JSON.parse(storage) : []

        if (category) {
            setAppointments(storageResponseAppointments.filter(item => item.category === category))
        } else {
            setAppointments(storageResponseAppointments)
        }

        setIsLoading(false)
    }

    // Recarregando a listagem até mesmo quando o agendamento for realizado
    useFocusEffect(useCallback(() => {
        loadAppointments()
    },[category]))


    // Esta função será passada como parâmetro pelo componente CategorySelect. Será necessário tipar ela lá no componente
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmenteDetails() {
        navigate('AppointmentDetails')
    }

    function handleAppointmenteCreate() {
        navigate('AppointmentCreate')
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
                    <ButtonAdd onPress={handleAppointmenteCreate} />
                </View>


                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />


                {
                    isLoading ? <Loading /> :
                        <>
                            <ListHeader
                                title='Partidas agendadas'
                                subtitle={`Total: ${appointments.length}`}
                            />


                            <FlatList
                                data={appointments}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <Appointment
                                        data={item}
                                        onPress={handleAppointmenteDetails}
                                    />
                                )}
                                style={styles.matches}
                                showsVerticalScrollIndicator={false}
                                // Passando um componente como um divisor de lista
                                ItemSeparatorComponent={() => <ListDivider />}
                                // deixando um "respiro" ao final da lista
                                contentContainerStyle={{ paddingBottom: 68 }}
                            />
                        </>
                }

            </View>
        </Background>
    );
}