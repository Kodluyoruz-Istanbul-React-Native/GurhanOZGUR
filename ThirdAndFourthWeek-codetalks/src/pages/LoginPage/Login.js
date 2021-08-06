import React, {useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessages';

import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Login.style';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('RoomsPage');
      showMessage({
        message: 'Giriş Başarılı!',
        type: 'success',
        icon: 'success',
      });
    } catch (err) {
      showMessage({
        message: authErrorMessageParser(err.code),
        type: 'danger',
        icon: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.main_title}>codetalks</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <View>
            <Input
              placeholder="E-Posta adresinizi giriniz..."
              value={values.usermail}
              onChangeText={handleChange('usermail')}
            />
            <Input
              placeholder="Parola..."
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <Button
              title="Giriş Yap"
              loading={loading}
              onPress={handleSubmit}
            />
            <Button
              title="Hesabınız yok mu? Kayıt Ol"
              theme="secondary"
              onPress={() => navigation.navigate('SignPage')}
            />
            <Text style={styles.forgot_password}>
              Şifreni mi unuttun? Yapacak bir şey yok. Hatırla...
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
