import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundTransparentView: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#181A20',
      opacity: 0.84,
    },
    decoTransparentView: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(24, 26, 32, .86)',
      opacity: 0.92,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    logo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    buttonLogin: {
      width: '100%',
      height: 40,
      flexDirection: 'row',
      paddingHorizontal: 12,
      gap: 8,
      marginBottom: 8,
      color: '#000',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(216, 31, 38, 1)',
    },
    bottomSheetShadow: {
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    buttonMovie: {
      width: '100%',
      height: 22,
      flexDirection: 'row',
      paddingHorizontal: 12,
      gap: 8,
      marginBottom: 8,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'rgba(216, 31, 38, 1)',
      borderBlockColor: 'rgba(216, 31, 38, 1)',
      borderWidth: .8,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  });