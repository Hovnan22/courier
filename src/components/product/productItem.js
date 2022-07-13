import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BasketIcon from '../../assets/icons/basket';

import styles from './styles';

const ProductItem = ({ item, addToBasket }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{
                uri: item.image
            }} />
            <View style={styles.description}>
                <View>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.text}>{item.description}</Text>
                </View>

                <View>
                    <Text style={styles.text}>{item.price}</Text>
                    {addToBasket && (<TouchableOpacity onPress={() => addToBasket(item)}>
                        <BasketIcon />
                    </TouchableOpacity>
                    )}

                </View>

            </View>
        </View>
    );
};

export default ProductItem;
