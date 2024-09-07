import {
    GoogleSignin,
  } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
    webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    
    });

export const signIn = async function (dispatch: Function, reducer: Function): Promise<any> {
  await GoogleSignin.hasPlayServices();
  const response = await GoogleSignin.addScopes({
  scopes: ['https://www.googleapis.com/auth/user.gender.read'],
  });
  if (response) {
  // ({ userInfo: response.data });
  // console.log(response.data, 'response.data');
  dispatch(reducer({ userInfo: response.data }));
  alert('signIn');
  } else {
    alert('not signIn');
  // sign in was cancelled by user
  dispatch(reducer({ userInfo: null }));
  }
};

export const getCurrentUser = async function (dispatch: Function, reducer: Function): Promise<any> {
  // console.log('getCurrentUser');
    try {
      const response = await GoogleSignin.signInSilently();
      console.log(response, 'response.data ___signInSilently');
      if (response?.data) {
        console.log(response.data, 'response.data getCurrentUser');
       dispatch({ userInfo: response.data });
      } else if (response.type === 'noSavedCredentialFound') {
        console.log(response.type, 'response.data noSavedCredentialFound');
        dispatch(reducer({ userInfo: response.type }));
        // user has not signed in yet
      }
    } catch (error: any) {
      dispatch(reducer({ userInfo: error }));
      // handle error
    }
  };

