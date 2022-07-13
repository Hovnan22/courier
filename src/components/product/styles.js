import { StyleSheet, Dimensions } from 'react-native';
import { WHITE, BLACK } from '../../constants/colors';

const { width } = Dimensions.get('screen');
export default StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: WHITE,
        marginRight: 10
    },
    text: {
        color: BLACK,
        paddingBottom: 10
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 150
    }
});
