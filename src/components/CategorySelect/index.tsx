import { ScrollView } from 'react-native';
import { styles } from './styles';

import { Category } from '../Category';

import { categories } from '../../utils/categories';

type props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: props) {
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >

            {
                categories.map((category) => (
                    <Category
                        title={category.title}
                        icon={category.icon}
                        key={category.id}

                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }

        </ScrollView>
    );
}