import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PRODUCTS from '../../constants/products.json';
import { FlatList } from 'react-native-gesture-handler';
import ProductItem from '../../components/product/productItem';
import { AddToBasket } from '../../actions/app';

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const { basketItems } = useSelector((state) => state);

    const addToBasket = (item) => {
        dispatch(AddToBasket({ ...item, id: basketItems.length }));
    }
    return (
        <View>
            <FlatList
                data={PRODUCTS.products}
                renderItem={({ item }) => <ProductItem item={item} addToBasket={addToBasket} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default DashboardScreen;
