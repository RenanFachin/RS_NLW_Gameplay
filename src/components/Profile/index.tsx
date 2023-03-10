import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
    const { user, SignOut } = useAuth()

    function handleSignOut() {
        Alert.alert('Logout', 'Deseja sair do GamePlay?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => SignOut()
            }
        ])
    }

    return (
        <View style={styles.container}>


            <TouchableOpacity onPress={handleSignOut}>
                <Avatar urlImage={user.avatar} />
            </TouchableOpacity>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>


                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}