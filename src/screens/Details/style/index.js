import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    first: {
        flex: 1,
        backgroundColor: '#ebcd34',
        justifyContent: 'center',
        alignItems: 'center'
    },
    second: {
        flex: 1,
        backgroundColor: '#eb8934',
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultText: {
        padding: 25,
        fontSize: 30,
        fontFamily: 'Avenir-Medium',
        textAlign: 'center'
    },
    submitButton: {
        marginTop: 400,
        backgroundColor: '#000',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Avenir-Medium',
        color: '#fff',
    },
});
