import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginVertical: 80,
    },
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 8,
        paddingVertical: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    inputButtonContainer: {
      flexDirection: 'row',
      gap: 8,

    },

    logo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
      input: {
        height: 40,
        paddingLeft: 10,
        marginTop: 8,
        width: '100%',
        borderColor: 'rgba(31, 34, 42, 1)',
        color: '#fff',
        borderWidth: 1,
        borderRadius: 5,
      },
      inputPIN: {
        flex: 8,
        marginBottom: 0,
      },
      showPasswordButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
     
      },
      icon: {
        fontSize: 20,
        color: '#333',
      },
      formContainer: {
        marginVertical: 8,
      },
      labelContainer:{
        flexDirection: 'row',
        gap: 8,
      },
      labelText: {
        fontSize: 16,
        lineHeight: 24,
      },
});