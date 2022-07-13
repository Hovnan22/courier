import { StyleSheet } from 'react-native';
import { GREEN, WHITE, RED, BLACK } from '../../constants/colors';

export default StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: 25,
        justifyContent: 'space-around',
        height: '100%'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 50,
        fontWeight: '700',
        color: BLACK
    },
    LoginInput: {
        borderWidth: 1,
        fontSize: 16,
        borderRadius: 15,
        marginBottom: 15,
        color: BLACK
    },
    button: {
        alignItems: 'center',
        backgroundColor: GREEN,
        paddingVertical: 15,
        borderRadius: 15,
    },
    buttonText: {
        color: WHITE,
        fontSize: 18,
        fontWeight: '700',
    },
    error: {
        color: RED,
        fontSize: 16,
        paddingBottom: 10,
        paddingLeft: 5
    }
});
