import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

import authErrorMessageParser from '../../utils/authErrorMessages';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Sign.style';

const initialFormValues = {
  usermail: '',
  password: '',
  rePassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.rePassword) {
      showMessage({
        message: 'Şifreler Uyuşmuyor',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }

    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı Başarıyla Oluşturuldu.',
        type: 'success',
        icon: 'success',
      });
      setLoading(false);
      navigation.navigate('LoginPage');
    } catch (err) {
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(err.code),
        type: 'danger',
        icon: 'danger',
      });
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
            <Input
              placeholder="Parola tekrar..."
              value={values.rePassword}
              onChangeText={handleChange('rePassword')}
              secureTextEntry
            />
            <Button title="Kayıt Ol" loading={loading} onPress={handleSubmit} />
            <Button
              title="Hesabınız var mı? Giriş Yap"
              theme="secondary"
              onPress={() => navigation.navigate('LoginPage')}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Sign;
