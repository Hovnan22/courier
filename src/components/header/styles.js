import { StyleSheet } from 'react-native';
import { BLACK } from '../../constants/colors';

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    text: {
        color: BLACK,
        paddingBottom: 10,
        textAlign: 'center'
    },
});
