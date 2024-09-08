import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // To navigate on notification click

const NotificationHandler = () => {
  const navigation = useNavigation();  // Hook to access navigation

  useEffect(() => {
    // Foreground state: The app is open, and the notification is received
    const unsubscribeForeground = messaging().onMessage(async (remoteMessage: any) => {
      Alert.alert('New Notification', remoteMessage.notification.title);
      console.log('Notification in foreground:', remoteMessage);
    });

    // Background/Closed state: The app is opened by clicking the notification
    messaging().onNotificationOpenedApp((remoteMessage: any) => {
      console.log('Notification caused app to open from background state:', remoteMessage);
      const movieId = remoteMessage.data.movieId;

        //TODO: Navigate to movie detail screen right after notification is clicked movieID
    });

    // Killed state: The app was closed, and the notification caused it to open
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage);
          const movieId = remoteMessage.data.movieId;
          navigation.navigate('MovieDetailScreen', { movieId });  // Navigate on notification click
        }
      });

    // Cleanup: Remove listener when component unmounts
    return unsubscribeForeground;
  }, []);
};

export default NotificationHandler;
