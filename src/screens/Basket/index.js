import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import ProductItem from '../../components/product/productItem';

const BasketScreen = () => {
    const { basketItems } = useSelector((state) => state);
    return (
        <View >
            <FlatList
                data={basketItems}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default BasketScreen;
