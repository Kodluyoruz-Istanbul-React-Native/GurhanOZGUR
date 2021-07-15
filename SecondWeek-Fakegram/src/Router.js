import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';

//TODO UYGULAMA, ÖDEVE İSTİNADEN YAPILMIŞ OLUP SADECE NAVIGATION'LAR AKTİF EDİLMİŞTİR.
//TODO ZAMANLA FAKEGRAM ADI ANLAMLANDIRILACAK, UYGULAMA GELİŞTİRİLECEKTİR.

//TODO Sayfaları ayrı ayrı import etmek şu anlık kişisel bir tercih.
import Home from './pages/home';
import HomeNewPost from './pages/home/HomeNewPost';
import HomeMessages from './pages/home/HomeMessages';
import Discover from './pages/discover/Discover';
import Unreels from './pages/unreels/Unreels';
import Shopping from './pages/shopping';
import Profile from './pages/profile';
import ProfileDetails from './pages/profile/ProfileDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//TODO Nested Navigation ile, sayfaların kendi içlerinde yeni bir NavigationContainer oluşturmak yerine
//tek bir yerden kontrol sağlıyorum.
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="HomeMessagesScreen" component={HomeMessages} />
      <Stack.Screen name="HomeNewPostScreen" component={HomeNewPost} />
    </Stack.Navigator>
  );
};

//TODO Nested Navigation ile, sayfaların kendi içlerinde yeni bir NavigationContainer oluşturmak yerine
//tek bir yerden kontrol sağlıyorum.
const ProfileDrawer = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="ProfileScreen" component={Profile} />
      <Drawer.Screen name="ProfileDetailsScreen" component={ProfileDetails} />
    </Drawer.Navigator>
  );
};

function App() {
  //FIXME TabBar ayrı bir customComponent olarak ileride düzenlenecek.
  const TabBar = ({state: {index}, navigation: {jumpTo}}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.tabContainer}
          onPress={() => jumpTo('Home')}>
          <Entypo
            name={'home'}
            color={index === 0 ? 'white' : '#444444'}
            size={27}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabContainer}
          onPress={() => jumpTo('Discover')}>
          <Entypo
            name={'magnifying-glass'}
            color={index === 1 ? 'white' : '#444444'}
            size={27}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabContainer}
          onPress={() => jumpTo('Unreels')}>
          <Entypo
            name={'clapperboard'}
            color={index === 2 ? 'white' : '#444444'}
            size={27}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabContainer}
          onPress={() => jumpTo('Shopping')}>
          <Entypo
            name={'shop'}
            color={index === 3 ? 'white' : '#444444'}
            size={27}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabContainer}
          onPress={() => jumpTo('Profile')}>
          <Entypo
            name={'user'}
            color={index === 4 ? 'white' : '#444444'}
            size={27}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    //TODO NestedNavigation yapısı kullanılmıştır. HomeStack ve ProfileDrawer NestesNav'ın parçasıdır.
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBar={TabBar}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Unreels" component={Unreels} />
        <Tab.Screen name="Shopping" component={Shopping} />
        <Tab.Screen name="Profile" component={ProfileDrawer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//FIXME TabBar ayrı bir component'e alındığında styles'lara da ihtiyaç kalmayacak.
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  tabContainer: {
    paddingVertical: 10,
  },
});

export default App;
