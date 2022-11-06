import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { WhiteLogo } from '../../components/WhiteLogo';
import { Background } from '../../components/Background';
import { styles } from './styles';

export const LoginScreen = () => {
  const handleGoogleLogin = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const handleFacebookLogin = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );
    return auth().signInWithCredential(facebookCredential);
  };

  return (
    <>
      <Background />

      <View style={styles.formContainer}>
        <WhiteLogo />
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={handleFacebookLogin}>
          <View style={styles.containerFacebook}>
            <Image
              source={require('../../assets/iconFacebook.png')}
              style={styles.img}
            />
            <Text style={styles.textFacebook}>{'Login with Facebook'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleLogin}>
          <View style={styles.containerGoogle}>
            <Image
              source={require('../../assets/iconGoogle.png')}
              style={styles.img}
            />
            <Text style={styles.textGoogle}>{'Login with Facebook'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};